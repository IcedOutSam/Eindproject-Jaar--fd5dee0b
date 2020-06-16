var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "skil1.mysql.database.azure.com",
  database: 'skil',
  user:  "izdine@skil1",
  password: 'IKLS+1234'
});



connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var SlackBot = require('slackbots');
var studentsArray = [];

// create a bot
var bot = new SlackBot({
    token: 'xoxb-369216512676-1162931326837-46eFDYwxQglf9iPiVjrEGwDz', // Add a bot https://my.slack.com/services/new/bot and put the token
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
    function handleMessage(message) {
        if(message.includes('greet')) {
            inspireMe()
        } else if(message.includes('STUDENTS')) {
          students();
        } else if(message.includes('help')) {
            runHelp()
        }
    };

    // Error Handler
    bot.on('error', err => console.log(err));



    //functions
    function students() {
      var STUDENTS = connection.query("SELECT naamStudent FROM STUDENTS", function STUDENTS (err, result) {
        if (err) throw err;
        studentsArray.push(result);
        bot.postMessageToChannel(
            'skilbot_test_channel',
            result
          );
      });
    }
    // Message Handler
    bot.on('message', data => {
      if (data.type !== 'message') {
        return;
      }

      handleMessage(data.text);
    });

// connection.query('SELECT * FROM issues', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });
