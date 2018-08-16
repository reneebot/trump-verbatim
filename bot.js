console.log("The bot is starting");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var trumpID = 25073877;
var botID = 850612023209717760; // @VerbatimPOTUS
var myID = 268536594; // @Renenenenee

var stream = T.stream('statuses/filter', { follow: myID });

stream.on('connect', function (request) {
  console.log("[twit] Attempting to connect...");
});

stream.on('connected', function (response) {
  console.log("[twit] Status code: %d, connection sucessful", response.statusCode);
});

stream.on('reconnect', function (request, response, connectInterval) {
  console.log("[twit] Status code: %d, reconnect scheduled in %d ms", response.statusCode, connectInterval);
});

stream.on('disconnect', function (disconnectMessage) {
  console.log("[twit] Stream disconnected with code %d, reason: ",
  disconnectMessage.disconnect.code, disconnectMessage.disconnect.reason);
});

stream.on('limit', function (limitMessage) {
  console.log("[twit] Limit notice, num undelivered tweets: " + limitMessage.limit.track);
});

stream.on('error', function (error) {
  console.log('[twit] Error code %d: %s. Status code: %d', error.code, error.message, error.statusCode);
});

stream.on('delete', function (deleteMessage) {
  console.log(deleteMessage)
  console.log('[twit] Tweet id %d deleted', deleteMessage.delete.status.id);
});

stream.on('tweet', function (tweet) {
  if (tweet.user.id == myID) {
    console.log('[twit] Got tweet!');
    console.log(tweet)
    // T.post('statuses/update', {status: "\"" + tweet.text + "\" #TrumpVerbatim"}, function(err, data, response) {
    //   console.log(data);
    // });
  }
});

// observation: tweets that start with an @ will post, but only show up as a reply
//
// RT @dunfIower: i’m fucking DEAD rn y’all have no idea https://t.co/ELO5u5SyEF
// { delete:
//    { status:
//       { id: 1029996084872052700,
//         id_str: '1029996084872052736',
//         user_id: 268536594,
//         user_id_str: '268536594' },
//      timestamp_ms: '1534405189819' } }
// [twit] Status id 1029996084872052700 deleted
