/**
 * Google Apps Script for Christmas Party Registration
 * このコードをGoogle Apps Scriptエディタにコピーして使用してください
 */

// スプレッドシートのIDを設定（URLから取得）
const SPREADSHEET_ID = '1WYxvbkR39NJSZ3ltivddMzjYQbKcMeS-ZgQvCfLqON8';
const SHEET_NAME = 'registrations'; // データを保存するシート名

/**
 * WebアプリのPOSTリクエストを処理
 */
function doPost(e) {
  try {
    // JSONデータを解析
    const data = JSON.parse(e.postData.contents);
    
    // スプレッドシートに書き込み
    const result = writeToSpreadsheet(data);
    
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * スプレッドシートにデータを書き込む
 */
function writeToSpreadsheet(data) {
  try {
    // スプレッドシートを開く
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // シートを取得または作成
    let sheet;
    try {
      sheet = spreadsheet.getSheetByName(SHEET_NAME);
    } catch (error) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // ヘッダー行を追加
      const headers = [
        'タイムスタンプ',
        'お名前',
        'メールアドレス',
        '参加形式',
        'チーム希望',
        '食事制限・アレルギー',
        'コメント・質問'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // ヘッダー行をフォーマット
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#c41e3a');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // データを行に変換
    const rowData = [
      data.timestamp || new Date().toLocaleString('ja-JP'),
      data.name || '',
      data.email || '',
      data.role || '',
      data.team || '',
      data.dietary || '',
      data.comments || ''
    ];
    
    // 最後の行に追加
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData]);
    
    // 成功レスポンス
    return {
      success: true,
      message: '登録が完了しました',
      rowNumber: lastRow + 1
    };
    
  } catch (error) {
    console.error('Error writing to spreadsheet:', error);
    throw error;
  }
}

/**
 * テスト用関数
 */
function testWriteToSpreadsheet() {
  const testData = {
    timestamp: new Date().toLocaleString('ja-JP'),
    name: 'テストユーザー',
    email: 'test@example.com',
    role: '参加者',
    team: 'チームA',
    dietary: '特になし',
    comments: 'テストです'
  };
  
  const result = writeToSpreadsheet(testData);
  console.log('Test result:', result);
}

/**
 * GETリクエスト（テスト用）
 */
function doGet(e) {
  return ContentService
    .createTextOutput('Christmas Party Registration API is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}