"use strict";

//const Alexa = require('ask-sdk');
const Alexa = require('ask-sdk-core');

function getRenderResponse(handlerInput, speechText, repromptText, displayText, imageUrl, shouldEndSession) {

    let builder = handlerInput.responseBuilder.speak(speechText);

    if(repromptText) {
        builder = builder.reprompt(repromptText);
    };

    if(displayText && imageUrl){
        const backgroundImage = new Alexa.ImageHelper()
            .withDescription(displayText)
            .addImageInstance(imageUrl)
            .getImage();

        const textContent = new Alexa.PlainTextContentHelper()
            .withPrimaryText(displayText)
            .getTextContent();

        const renderTemplate = {
            type : 'BodyTemplate6',
            token : 'token',
            backButton : 'HIDDEN',
            backgroundImage,
            title : 'title',
            textContent,
        };
    
        builder = builder.addRenderTemplateDirective(renderTemplate);
    }

    if(shouldEndSession === true || shouldEndSession === false) {
        builder = builder.withShouldEndSession(shouldEndSession);
    };

    return builder.getResponse();
}

module.exports = {
    getRenderResponse: getRenderResponse,
};