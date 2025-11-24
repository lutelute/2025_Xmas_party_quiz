# 🎄 フォーム機能セットアップ手順

READMEから直接スプレッドシートに書き込むための設定方法です。

## 📋 手順

### 1. Google Apps Scriptプロジェクト作成

1. [Google Apps Script](https://script.google.com/) にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を「Christmas Party Registration」に変更

### 2. コードをコピー

1. `google-apps-script.js`の内容をコピー
2. Google Apps Scriptエディタに貼り付け
3. `SPREADSHEET_ID`を確認（既に設定済み）

### 3. Webアプリとしてデプロイ

1. 右上の「デプロイ」→「新しいデプロイ」
2. 種類：「ウェブアプリ」を選択
3. 設定：
   - **実行者**: 自分
   - **アクセスできるユーザー**: 全員
4. 「デプロイ」をクリック
5. **WebアプリのURL**をコピー

### 4. フォームページの更新

1. `form.html`を開く
2. `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`を実際のWebアプリURLに変更：

```javascript
const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

### 5. スプレッドシートの権限設定

1. [Googleスプレッドシート](https://docs.google.com/spreadsheets/d/1WYxvbkR39NJSZ3ltivddMzjYQbKcMeS-ZgQvCfLqON8/edit)を開く
2. 右上の「共有」をクリック
3. 「リンクを知っている全員」に「編集者」権限を付与

## 🎮 使用方法

### 参加登録フォーム
**URL**: https://lutelute.github.io/2025_Xmas_party_quiz/form.html

### データ確認
- **スプレッドシート直接**: https://docs.google.com/spreadsheets/d/1WYxvbkR39NJSZ3ltivddMzjYQbKcMeS-ZgQvCfLqON8/edit
- **埋め込みページ**: https://lutelute.github.io/2025_Xmas_party_quiz/spreadsheet.html

## 🔧 トラブルシューティング

### エラーが発生する場合

1. **権限エラー**
   - Google Apps Scriptの実行権限を確認
   - スプレッドシートの共有設定を確認

2. **CORS エラー**
   - `mode: 'no-cors'`を使用（既に設定済み）
   - Google Apps Scriptのデプロイ設定を確認

3. **データが保存されない**
   - Google Apps Scriptのログを確認
   - スプレッドシートIDが正しいか確認

## 📊 データ構造

スプレッドシートに以下の列が自動作成されます：

| 列 | 内容 |
|---|---|
| A | タイムスタンプ |
| B | お名前 |
| C | メールアドレス |
| D | 参加形式 |
| E | チーム希望 |
| F | 食事制限・アレルギー |
| G | コメント・質問 |

## 🎯 テスト方法

1. Google Apps Scriptエディタで`testWriteToSpreadsheet()`を実行
2. スプレッドシートにテストデータが追加されることを確認
3. フォームから実際にデータを送信してテスト

セットアップ完了後、READMEにフォームを埋め込んで使用できます！