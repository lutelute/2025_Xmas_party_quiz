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
- **メイン動画**: [santa_video_final.mp4](https://lutelute.github.io/2025_Xmas_party_quiz/resources/video/santa_video_final.mp4)
- **ひらがなサブタイトル版**: [santa_video_with_subtitle_hiragana.mp4](https://lutelute.github.io/2025_Xmas_party_quiz/resources/video/santa_video_with_subtitle_hiragana.mp4)

#### 🎮 ゲーム本体
- **招待状**: https://lutelute.github.io/2025_Xmas_party_quiz/main/invitation.html
- **謎解きゲーム**: https://lutelute.github.io/2025_Xmas_party_quiz/main/
- **Apple Puzzle**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/apple_puzzle/
- **Autumn Cipher**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/autumn_cipher/momiji.html
- **SOS Morse Sheep**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/morse_sheep/sheep1.html
- **Sheep Location Hint**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/sheep_hint/
- **PISA Tower Hint**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/pisa_hint/
- **Glasses Hint**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/megane_hint/
- **Santa Final Message**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/santa_final/
- **Music Puzzle**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/music_puzzle/
- **Station Quiz**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/station_quiz/
- **Underground Key**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/underground_key/
- **Treasure Final**: https://lutelute.github.io/2025_Xmas_party_quiz/quiz/treasure_final/

#### 📊 管理ツール
- **データ管理**: https://lutelute.github.io/2025_Xmas_party_quiz/others/spreadsheet.html
- **Googleスプレッドシート**: [パーティー管理シート](https://docs.google.com/spreadsheets/d/1WYxvbkR39NJSZ3ltivddMzjYQbKcMeS-ZgQvCfLqON8/edit?usp=sharing)

### ローカルで遊ぶ
1. リポジトリをクローン
```bash
git clone https://github.com/lutelute/2025_Xmas_party_quiz.git
cd 2025_Xmas_party_quiz
```

2. ブラウザで `main/invitation.html` を開く

## 📁 ファイル構成

```
2025_Xmas_party_quiz/
├── main/               # Main game files
│   ├── index.html      # Main puzzle game
│   └── invitation.html # Santa's invitation letter (game introduction)
├── quiz/               # All puzzle games
│   ├── apple_puzzle/   # Apple riddle puzzle
│   │   └── index.html  # Apple puzzle game
│   ├── autumn_cipher/  # Autumn leaf cipher puzzle
│   │   └── momiji.html # Autumn cipher decryption game
│   ├── morse_sheep/    # SOS sheep morse code puzzle
│   │   ├── sheep1.html # Sheep 1 page
│   │   ├── sheep2.html # Sheep 2 page
│   │   └── celebration.html # Success celebration page
│   ├── sheep_hint/     # Sheep location hint puzzle
│   │   └── index.html  # Sheep location hint game
│   ├── pisa_hint/      # PISA tower hint puzzle
│   │   └── index.html  # PISA tower hint game
│   ├── megane_hint/    # Glasses hint puzzle
│   │   └── index.html  # Glasses hint game
│   ├── music_puzzle/   # Music code progression puzzle
│   │   └── index.html  # Music puzzle with DECA CAFE hint
│   ├── santa_final/    # Santa's final message
│   │   └── index.html  # Final message and video link
│   ├── station_quiz/   # Station quiz puzzle
│   │   └── index.html  # Station quiz game
│   ├── underground_key/ # Underground key puzzle
│   │   └── index.html  # Underground key puzzle game
│   └── treasure_final/ # Final treasure chest puzzle
│       └── index.html  # Treasure unlocking game
├── resources/          # Media and asset files
│   ├── video/          # Video files
│   │   ├── santa_video_final.mp4
│   │   ├── santa_video_with_subtitle_hiragana.mp4
│   │   ├── santa_video_old.mp4
│   │   └── ending_ultra_final.mp4  # Ending video
│   ├── music/          # Music files for puzzles
│   │   ├── クリスマス DECA CAFE_guiter.mp3
│   │   ├── クリスマス DECA CAFE_シャカシャカ.mp3
│   │   ├── クリスマス DECA CAFE_JAZZ.mp3
│   │   ├── クリスマス DECA CAFE_少し暗め.mp3
│   │   └── クリスマス DECA CAFE_fusion風.mp3
│   └── sounds/
│       └── README.md   # Audio effects documentation
├── others/             # Miscellaneous utilities
│   └── spreadsheet.html # Google Spreadsheet embed page
└── README.md           # This file
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
  <source src="https://lutelute.github.io/2025_Xmas_party_quiz/resources/video/santa_video_final.mp4" type="video/mp4">
  お使いのブラウザではビデオタグがサポートされていません。
  <a href="https://lutelute.github.io/2025_Xmas_party_quiz/resources/video/santa_video_final.mp4">ビデオを直接開く</a>
</video>

### エンディング動画
ゲーム終了時の特別メッセージ：

<video width="100%" controls>
  <source src="https://lutelute.github.io/2025_Xmas_party_quiz/resources/video/ending_ultra_final.mp4" type="video/mp4">
  お使いのブラウザではビデオタグがサポートされていません。
  <a href="https://lutelute.github.io/2025_Xmas_party_quiz/resources/video/ending_ultra_final.mp4">エンディング動画を直接開く</a>
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