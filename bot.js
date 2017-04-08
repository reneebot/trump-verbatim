console.log("The bot is starting");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
// })

// T.get('followers/ids', { screen_name: 'Renenenenee' },  function (err, data, response) {
//   console.log(data)
// })

var params = {
  // screen_name: "realDonaldTrump",
  // count: 1
  q: 'from:realDonaldTrump',
  count: 2
}

//T.get('statuses/user_timeline', params, gotData);
T.get('search/tweets', params, gotData)

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
  console.log(tweets[i].text);
  }
}
