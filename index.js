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
    token: 'xoxb-369216512676-1162931326837-OkyndgX8ZO8soYKLoQfkRJJj', // Add a bot https://my.slack.com/services/new/bot and put the token
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
            // inspireMe()
        } else if(message.includes('students')) {
          issuesTies();
        } else if(message.includes('help')) {
            // runHelp()
        }
    };

    // Error Handler
    bot.on('error', err => console.log(err));



    //functions
    function issuesTies() {
      connection.query("SELECT idIssue FROM coachIssue WHERE idCoach=1", function STUDENTS (err, resultTies) {
        for (var i = 0; i < resultTies.length; i++) {
          console.log(resultTies[i].idIssue);
          var ID = resultTies[i].idIssue;
          console.log(ID);

      connection.query("SELECT * FROM ISSUES WHERE ID="+ID, function STUDENTS (err, resultIssue) {
        if (err) throw err;
        // studentsArray.push(result);
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

// connection.query('SELECT * FROM issues', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });
