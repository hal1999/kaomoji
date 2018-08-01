"use strict";

function wordSpeech(word) {
    return word + '。ですね。続けて、何か話しかけてください。';
}

function wordReprompt(word) {
    return '何か話しかけてください。終了する場合は、止めて、と言ってください。';
}

function wordDisplay(word) {
    return word;
}

module.exports = {
    launchSpeech: 'こんにちは。何か話しかけてください。',
    launchReprompt: '何か話しかけてください。',
    launchDisplay: 'こんにちは！',
    wordSpeech: wordSpeech,
    wordReprompt: wordReprompt,
    wordDisplay: wordDisplay,
    unknownSpeech: 'ごめんなさい。言葉が分かりませんでした。何か話しかけてください。',
    unknownReprompt: '何か話しかけてください。',
    unknownDisplay: 'ごめんなさい！',
    helpSpeech: '話しかけると表情が変わります。何か話しかけてください。',
    helpDisplay: '話しかけて！',
    exitSpeech: 'さようなら。　また呼んでくださいね。',
    errorSpeech: 'ごめんなさい。エラーです。',
    displayErrorSpeech: 'ごめんなさい。このスキルは画面付きのデバイスで使用してください。',
};