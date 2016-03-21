output = function (cb) {

  var bot = new irc.Client($.server, $.name, {
    debug: $.debug,
    channels: $.channels,
  });

  bot.addListener('error', function (message) {
    cb({
      error: message
    });
  });

  cb({
    bot: bot
  });

};
