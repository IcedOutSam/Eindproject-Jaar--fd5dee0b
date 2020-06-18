    const SlackBot = require('slackbots');
    const dotenv = require('dotenv');
    const mysql = require('mysql');

    var connection = mysql.createConnection({
    host: "skil1.mysql.database.azure.com",
    database: 'skil',
    user:  process.env.DB_USER,
    password: process.env.DB_PASS
    });


    connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });

    var SlackBot = require('slackbots');
    var studentsArray = [];

    // Create a bot
        var bot = new SlackBot({
        token: process.env.SLACK_TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token
        name: 'skilbot'
        });

        bot.on('start', () => {
        const params = {
        };
        bot.postMessageToChannel(
            'skilbot_test_channel',
            'SKILbot tot je beschikking',
            params
        );
        });
        function handleMessage(message) {
            if(message.includes('greet')) {
            } else if(message.includes('students')) {
            issuesTies();
            } else if(message.includes('help')) {
            }
        };

        // Error Handler
        bot.on('error', err => console.log(err));

        //Functions
        function issuesTies() {
        connection.query("SELECT idIssue FROM coachIssue WHERE idCoach=1", function STUDENTS (err, resultTies) {
            for (var i = 0; i < resultTies.length; i++) {
            console.log(resultTies[i].idIssue);
            var ID = resultTies[i].idIssue;
            console.log(ID);

        connection.query("SELECT * FROM ISSUES WHERE ID="+ID, function STUDENTS (err, resultIssue) {
            if (err) throw err;
        
            for (var i = 0; i < resultIssue.length; i++) {
            bot.postMessageToChannel(
                'skilbot_test_channel',
                resultIssue[i]
            );
            }
        });
        }
        });
        }
    
        // Message Handler
        bot.on('message', data => {
        if (data.type !== 'message') {
            return;
        }

        handleMessage(data.text);
        });

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
