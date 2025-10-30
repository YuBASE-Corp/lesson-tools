## GAS

function doPost(e) {
  try {
    // リクエストパラメータを取得
    var params = JSON.parse(e.postData.contents);
    var date = params.date;
    var studentID = params.studentID;
    
    // パラメータのバリデーション
    if (!date || !studentID) {
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Date and studentID are required'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // スプレッドシートを取得
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // 'logs' タブを取得 (存在しない場合は作成)
    var logsSheet = spreadsheet.getSheetByName('logs');
    if (!logsSheet) {
      logsSheet = spreadsheet.insertSheet('logs');
      logsSheet.appendRow(['日付', '学籍番号']); // ヘッダー行を追加
    }
    
    // 新しい行にデータを追加
    logsSheet.appendRow([date, studentID]);
    
    // 成功レスポンスを返す
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Log entry added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // エラーレスポンスを返す
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

## デプロイ

このスクリプトをWeb APIとして公開するには：

スクリプトエディタでこのコードを保存します。
「デプロイ」 > 「新しいデプロイ」をクリックします。
「種類の選択」で「ウェブアプリ」を選択します。
必要な設定を行い（実行するユーザー、アクセスできるユーザーなど）、「デプロイ」をクリックします。
生成されたURLをコピーします。このURLがAPIのエンドポイントになります。


## アクセス例

```
curl -X POST -H "Content-Type: application/json" -d '{"date":"2024-09-18 14:30:00","studentID":"12345"}' https://script.google.com/macros/s/AKfycbx7190ic4e7NV8TB_cXcEgkIAKRwde43tHUe_cefz4LlGRzPF6Yh1M1vifYmxAhfZ5Q/exec
```