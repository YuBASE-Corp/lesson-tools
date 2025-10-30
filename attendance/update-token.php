<?php
// POSTリクエストのボディを取得
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// 新しいトークンを取得
$newToken = $data['token'] ?? '';

// ファイルパスを設定
$filePath = 'tokens.txt';

// 現在のトークンを読み込む（存在する場合）
$currentToken = '';
if (file_exists($filePath)) {
    $currentToken = file_get_contents($filePath);
}

// 新しいトークンと現在のトークンを保存
$content = $currentToken . "\n" . $newToken;
$content = trim($content); // 余分な改行を削除

// 最新の2つのトークンだけを保持
$tokens = explode("\n", $content);
if (count($tokens) > 2) {
    $tokens = array_slice($tokens, -2);
    $content = implode("\n", $tokens);
}

file_put_contents($filePath, $content);

// 成功レスポンスを返す
http_response_code(200);
echo json_encode(['status' => 'success']);
?>
