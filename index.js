const SlackBot = require('slackbots');


// Bot Info
var bot = new SlackBot({
    token: 'xoxb-369216512676-1162931326837-zBVtyygexEb8TBvqP2kOsBjd', //DO NOT SHARE! // Bot's Token
    name: 'SKILbot'
});

// Start Handler
bot.on('start', () => {
    bot.postMessageToChannel('skilbot_test_channel', 'SKILbot tot je beschikking!\nHeb je me nodig? Type "SKIL" nadat je me mentioned.'); //First Message sent upon launching, channel name and message

    //Later adding the ability to DM a user    

});



// SKIL function "command"
function handleMessage(message) {
    if (message.includes(' SKIL')) {
        responseSKIL();
    }
}

// Message Handler

bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

// Bot's reply to the Greeting
function responseSKIL() {
    bot.postMessageToChannel('skilbot_test_channel', "yo")
}

// Attachment Preview Message
// {
// 	"attachments": [
// 		{
// 			"blocks": [
// 				{
// 					"type": "section",
// 					"text": {
// 						"type": "mrkdwn",
// 						"text": "Hallo, ik ben SKILbot! Momenteel ben ik nog een prototype en wordt er nog verder aan mij gewerkt. Wil je wat meer weten over de school waar mijn developers opzitten? Klik op de knop! Tot ziens! uwu"
// 					},
// 					"accessory": {
// 						"type": "image",
// 						"image_url": "https://pbs.twimg.com/profile_images/1083376501939208193/es-8Ejer_400x400.jpg",
// 						"alt_text": "Bit Academy"
// 					}
// 				},
// 				{
// 					"type": "actions",
// 					"elements": [
// 						{
// 							"type": "button",
// 							"text": {
// 								"type": "plain_text",
// 								"text": "Ga naar site"
// 							},
// 							"value": "https://www.bit-academy.nl/"
// 						}
// 					]
// 				},
// 				{
// 					"type": "context",
// 					"elements": [
// 						{
// 							"type": "plain_text",
// 							"text": "SKILbot© is powered by Sam, Kenza, Iz-Dine and Laurens."
// 						}
// 					]
// 				}
// 			]
// 		}
// 	]
// }
