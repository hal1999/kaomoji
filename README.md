# 「かおもじ」スキル for Alexa

話しかけた言葉に応じた画像を表示するAlexaスキルのソース。
単純な言葉と画像を設定した「かおもじ」スキルをAlexaスキルストアに公開しています。

consts, resourcesあたりを変更することで別の言葉や画像に対応できる、はずです。
（Alexaスキル開発の知識が必要です。）

* Amazon Alexa 用のSkill (https://developer.amazon.com/ja/alexa-skills-kit) 。
* AWS Lambda (https://aws.amazon.com/jp/lambda/) でホスト。
* 仕様言語はNode.js 8.10 (https://nodejs.org/ja/)。
* alexa-skills-kit-sdk-for-nodejs (https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs) を使用。

## ディレクトリ構成

### consts
スキルの動作の設定に関するファイルを格納

#### Consts.js
* function imageUrl(imageNumber) {}　画像のURLを設定。画像URLには通し番号を含める。
* wordFitMap 言葉に対して何番目の画像を表示しやすいか、重みを設定。画像の数の分、重みを設定する。

#### Messages.js
* Alexaが発話する文言を設定。wordSpeech など変数を含むものはfunctionで設定。

### resources
* Skillの対話モデルとして設定するもの。

### handlers, utils, (index.js)
* Skillの処理のソース。
