"use strict";

const Consts = require('consts/Consts.js');
const Messages = require('consts/Messages.js');
const RenderUtils = require('utils/RenderUtils.js');

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        return RenderUtils.getRenderResponse(handlerInput, Messages.launchSpeech, Messages.launchReprompt, Messages.launchDisplay, Consts.imageUrl(0), false);
    },
};