output = function (cb) {

  var bot = new irc.Client(input.server, input.name, {
    debug: input.debug,
    channels: input.channels,
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
