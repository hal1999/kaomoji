"use strict";

const Consts = require('consts/Consts.js');
const Messages = require('consts/Messages.js');
const RenderUtils = require('utils/RenderUtils.js');

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return RenderUtils.getRenderResponse(handlerInput, Messages.helpSpeech, null, Messages.helpDisplay, Consts.imageUrl(0), false);
  },
};