require('dotenv').config();
const token = process.env.SLACK_TOKEN;
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
const coaches = ["ties", "klaas"];

// create a bot
var bot = new SlackBot({
token: process.env.SLACK_TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token
name: 'skilbot'
});
bot.on('start', () => {
    const params = {
        icon_emoji: ':robot:'
    };

    bot.postMessageToChannel(
        'skilbot_test_channel',
        'SKILbot tot je beschikking',
        params
      );
    });

bot.on('message', (message) => {
  if (message.type == 'message') {
    console.log(message.user);
  }
});

function handleMessage(message) {
    if(message.includes('greet')) {
        // inspireMe()
    } else if(message.includes('<@U014STD9LQM> Ties')) {
      issuesTies();
    } else if(message.includes('help')) {
        // runHelp()
    }
};

// Error Handler
bot.on('error', err => console.log(err));



//functions
function issuesTies() {
  console.log('begin functie Ties()');
  connection.query("SELECT idIssue FROM coachIssue WHERE idCoach=1", function STUDENTS (err, resultTies) {
    for (var i = 0; i < resultTies.length; i++) {
      console.log(`index: ${resultTies[i].idIssue} in de for loop`);
      var ID = resultTies[i].idIssue;

  connection.query("SELECT * FROM ISSUES WHERE ID="+ID, function STUDENTS (err, resultIssue) {
    if (err) throw err;

    for (var j = 0; j < resultIssue.length; j++) {
    bot.postMessageToChannel(
        'skilbot_test_channel',
        resultIssue[j]
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


//const coaches = ["ties", "klaas"]
//if (coaches.includes(message.user)) { send msg }
