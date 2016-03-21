output = function (cb) {
  var bot = new irc.Client($.server, $.name, {
    debug: $.debug,
    channels: $.channels,
  });

  bot.addListener('error', function (message) {
    cb({
      error: $.create(message)
    });
  });

  cb({
    bot: $.create(bot)
  });
};
