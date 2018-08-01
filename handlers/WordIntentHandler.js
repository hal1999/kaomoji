"use strict";

const Consts = require('consts/Consts.js');
const Messages = require('consts/Messages.js');
const RenderUtils = require('utils/RenderUtils.js');
const WordUtils = require('utils/WordUtils.js');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'WordIntent';
  },
  handle(handlerInput) {
    const word = handlerInput.requestEnvelope.request.intent.slots.word.value;
    const imageNumber = WordUtils.getImageNumber(Consts.wordFitMap, word);
    if(imageNumber !== -1) {
      return RenderUtils.getRenderResponse(handlerInput, Messages.wordSpeech(word), Messages.wordReprompt(word), Messages.wordDisplay(word), Consts.imageUrl(imageNumber), false);
    }

    return RenderUtils.getRenderResponse(handlerInput, Messages.unknownSpeech, Messages.unknownReprompt, Messages.unknownDisplay, Consts.imageUrl(0), false);
  }
};