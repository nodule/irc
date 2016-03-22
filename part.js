module.exports = {
  name: "part",
  ns: "irc",
  description: "Part Message",
  phrases: {
    active: "Client parting"
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
      reason: {
        title: "Reason",
        type: "string"
      }
    }
  },
  fn: function part(input, $, output, state, done, cb, on) {
    var r = function() {
      $.bot.part('part', function partCallback(channel, who, reason) {
        cb({
          channel: channel,
          who: who,
          reason: reason
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