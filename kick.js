module.exports = {
  name: "kick",
  ns: "irc",
  description: "Kick Message",
  phrases: {
    active: "Somebody is kicked..."
  },
  ports: {
    input: {
      bot: {
        title: "IRC Client",
        type: "Client",
        required: true
      }
    },
    output: {
      channel: {
        title: "Channel",
        type: "string"
      },
      who: {
        title: "Who",
        type: "string"
      },
      by: {
        title: "By",
        type: "string"
      },
      reason: {
        title: "Reason",
        type: "string"
      },
      raw: {
        title: "Raw",
        type: "string"
      }
    }
  },
  fn: function kick(input, output, state, done, cb, on) {
    var r = function() {
      input.bot.kick('kick', function kickCallback(channel, who, by, reason, raw) {
        cb({
          channel: channel,
          who: who,
          by: by,
          reason: reason,
          raw: raw
        });
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