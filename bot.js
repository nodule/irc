module.exports = {
  name: "bot",
  ns: "irc",
  description: "IRC Bot",
  phrases: {
    active: "Starting IRC Bot"
  },
  ports: {
    input: {
      name: {
        title: "Bot Name",
        type: "string",
        "default": "xBot"
      },
      server: {
        title: "IRC Server",
        type: "string",
        required: true
      },
      channels: {
        title: "Channels",
        type: "array",
        required: true
      },
      debug: {
        title: "String Parts",
        type: "boolean",
        "default": false
      }
    },
    output: {
      error: {
        title: "Error",
        type: "any"
      },
      bot: {
        title: "Bot",
        type: "Client"
      }
    }
  },
  dependencies: {
    npm: {
      irc: require('irc')
    }
  },
  fn: function bot(input, $, output, state, done, cb, on, irc) {
    var r = function() {
      var bot = new irc.Client($.server, $.name, {
        debug: $.debug,
        channels: $.channels,
      });

      bot.addListener('error', function(message) {
        output({
          error: $.create(message)
        });
      });

      output({
        bot: $.create(bot)
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}