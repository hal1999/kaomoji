"use strict";

//const Alexa = require('ask-sdk');
const Alexa = require('ask-sdk-core');
const LaunchRequestHandler = require('handlers/LaunchRequestHandler.js');
const DisplayErrorHandler = require('handlers/DisplayErrorHandler.js');
const WordIntentHandler = require('handlers/WordIntentHandler.js');
const HelpIntentHandler = require('handlers/HelpIntentHandler.js');
const CancelAndStopIntentHandler = require('handlers/CancelAndStopIntentHandler.js');
const SessionEndedRequestHandler = require('handlers/SessionEndedRequestHandler.js');
const ErrorHandler = require('handlers/ErrorHandler.js');

const RequestInterceptor = {
  process(handlerInput) {
    return new Promise((resolve, reject) => {
      if(handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display) {
        resolve();
      }

      reject();
    });
  }
};

//const skillBuilder = Alexa.SkillBuilders.standard();
const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    WordIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(DisplayErrorHandler,
    ErrorHandler)
  .addRequestInterceptors(RequestInterceptor)
  //.withTableName('Eyes')
  //.withAutoCreateTable(true)
  .lambda();