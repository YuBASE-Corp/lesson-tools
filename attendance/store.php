<?php

// log.txt に書き込む用の関数
function logging ($data) {
    // 現在時刻
    $now = date('Y-m-d H:i:s');
    $log = $now . " " . $data . "\n";
    file_put_contents('log.txt', $log, FILE_APPEND);
}

// JSONデータを受け取り、デコード
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$studentId = $data['studentId'];
$qrcode = $data['qrcode'];
$now = date('Y-m-d H:i:s');

logging("入力データ: " . $json);

// qrコードがtokens.txtにあるか確認
$tokens = file('tokens.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

logging("トークン: " . var_export($tokens, true));

// 存在しない場合エラー
if (!in_array($qrcode, $tokens)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => '不正なコードです']);
    exit;
}

// Google Apps ScriptのWebアプリケーションURL
$url = 'https://script.google.com/macros/s/AKfycbx7190ic4e7NV8TB_cXcEgkIAKRwde43tHUe_cefz4LlGRzPF6Yh1M1vifYmxAhfZ5Q/exec';

// POSTデータの準備
$postData = array(
    'date' => $now,
    'studentID' => $studentId
);

// cURLセッションの初期化
$ch = curl_init($url);

// cURLオプションの設定
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// リクエストの実行
$response = curl_exec($ch);

// cURLセッションの終了
curl_close($ch);

// バックアップとして data.txt にも保存
file_put_contents('data.txt', $now . ', ' . $studentId . "\n", FILE_APPEND);


// レスポンスの処理（必要に応じて）
echo json_encode(['status' => 'success', 'message' => '登録成功']);