"use strict";

const Messages = require('consts/Messages.js');
const RenderUtils = require('utils/RenderUtils.js');

module.exports = {
  canHandle(handlerInput) {
    return !handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display;
  },
  handle(handlerInput, error) {
    console.log(`Display Error handled.`);

    return RenderUtils.getRenderResponse(handlerInput, Messages.displayErrorSpeech, null, null, null, null, null, true);
  },
};