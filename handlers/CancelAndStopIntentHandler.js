"use strict";

const Messages = require('consts/Messages.js');
const RenderUtils = require('utils/RenderUtils.js');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return RenderUtils.getRenderResponse(handlerInput, Messages.exitSpeech, null, null, null, true);
  },
};