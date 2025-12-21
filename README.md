# 🎄 2025 Christmas Party Quiz

An interactive puzzle game for Christmas parties where participants help Santa find his forgotten items.

## 🎮 Game Overview

Santa Claus seems to have forgotten something important. This is a puzzle game where participants work together to find what Santa left behind.

### ゲームの流れ
1. **通知ビデオ** - パーティー参加者への案内動画
2. **招待状** - サンタからの手紙で冒険が始まります
3. **パズルゲーム** - 数字を正しい順序に並べるパズルを解きます
4. **SOS羊のメールス信号** - 2匹の羊がモールス信号風の鳴き声で暗号を伝える謎解き
5. **音響効果** - パズルの動作に合わせた楽しい音が鳴ります

## 🌟 特徴

- 🎨 美しいクリスマステーマのデザイン
- ❄️ 雪の降るアニメーション効果
- ✨ キラキラと星空の演出
- 🎵 Web Audio APIによる音響効果
- 📱 レスポンシブデザイン（PC・スマートフォン対応）

## 🚀 使い方

### GitHub Pages で遊ぶ
以下のURLでゲームをプレイできます：

#### 🎬 通知ビデオ
- **メイン動画**: [santa_video_final.mp4](https://lutelute.github.io/2025_Xmas_party_quiz/video/santa_video_final.mp4)
- **ひらがなサブタイトル版**: [santa_video_with_subtitle_hiragana.mp4](https://lutelute.github.io/2025_Xmas_party_quiz/video/santa_video_with_subtitle_hiragana.mp4)

#### 🎮 ゲーム本体
- **招待状**: https://lutelute.github.io/2025_Xmas_party_quiz/invitation.html
- **謎解きゲーム**: https://lutelute.github.io/2025_Xmas_party_quiz/
- **SOS羊のメールス信号**: https://lutelute.github.io/2025_Xmas_party_quiz/SOS_sheep/sheep1.html

#### 📊 管理ツール
- **データ管理**: https://lutelute.github.io/2025_Xmas_party_quiz/spreadsheet.html
- **Googleスプレッドシート**: [パーティー管理シート](https://docs.google.com/spreadsheets/d/1WYxvbkR39NJSZ3ltivddMzjYQbKcMeS-ZgQvCfLqON8/edit?usp=sharing)

### ローカルで遊ぶ
1. リポジトリをクローン
```bash
git clone https://github.com/lutelute/2025_Xmas_party_quiz.git
cd 2025_Xmas_party_quiz
```

2. ブラウザで `invitation.html` を開く

## 📁 ファイル構成

```
2025_Xmas_party_quiz/
├── invitation.html      # サンタからの招待状（ゲームの導入）
├── index.html          # メインのパズルゲーム
├── spreadsheet.html    # Googleスプレッドシート埋め込みページ
├── video/              # Video files
│   ├── santa_video_final.mp4
│   ├── santa_video_with_subtitle_hiragana.mp4
│   ├── santa_video_old.mp4
│   └── ending_ultra_final.mp4  # Ending video
├── quiz/
│   └── 1/
│       └── index.html  # Quiz 1 page
├── SOS_sheep/          # 羊のモールス信号謎解きゲーム
│   ├── sheep1.html     # 羊1のページ
│   ├── sheep2.html     # 羊2のページ
│   └── celebration.html # 正解時のお祝いページ
├── sounds/
│   └── README.md       # 音響効果の説明
└── README.md           # このファイル
```

## 🎵 音響効果

Web Audio APIを使用して以下の音を生成しています：
- パズルピース移動音
- 正解時の効果音
- 背景の環境音
- 羊の鳴き声によるモールス信号音

## 🐑 SOS羊のメールス信号について

このパズルでは、2匹の可愛い羊がモールス信号風の鳴き声で暗号メッセージを伝えます：

### 遊び方
1. **羊1**: 問題文「このひつじのなきごえをきいてみよう」をモールス信号で表現
2. **羊2**: 答えの「SOS」をモールス信号で表現
3. 羊の鳴き声を聞いて、隠されたメッセージを解読しましょう

### 特徴
- 🎵 音声合成による羊の鳴き声
- 📖 問題文の音声読み上げ機能
- ✨ インタラクティブな文字ハイライト
- 🎨 可愛い羊のイラスト付きデザイン

## 🎯 対象年齢

全年齢対象のファミリー向けゲームです。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🎬 ビデオプレビュー

### 通知ビデオ
パーティー参加者に送る案内動画：

<video width="100%" controls>
  <source src="https://lutelute.github.io/2025_Xmas_party_quiz/video/santa_video_final.mp4" type="video/mp4">
  お使いのブラウザではビデオタグがサポートされていません。
  <a href="https://lutelute.github.io/2025_Xmas_party_quiz/video/santa_video_final.mp4">ビデオを直接開く</a>
</video>

## 📊 管理用スプレッドシート

パーティーの進行管理用：

<iframe 
  src="https://docs.google.com/spreadsheets/d/1WYxvbkR39NJSZ3ltivddMzjYQbKcMeS-ZgQvCfLqON8/edit?usp=sharing&rm=minimal" 
  width="100%" 
  height="400"
  frameborder="0">
</iframe>

**直接スプレッドシートを開く**: [管理用スプレッドシート](https://docs.google.com/spreadsheets/d/1WYxvbkR39NJSZ3ltivddMzjYQbKcMeS-ZgQvCfLqON8/edit?usp=sharing)

## 🎅 作成者

クリスマスパーティーの思い出作りのために作成されました。