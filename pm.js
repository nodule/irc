module.exports = {
  name: "pm",
  ns: "irc",
  description: "Private Message",
  phrases: {
    active: "Receiving private message"
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
      nick: {
        title: "Nick",
        type: "string"
      },
      message: {
        title: "Message",
        type: "string"
      }
    }
  },
  fn: function pm(input, output, state, done, cb, on) {
    var r = function() {
      input.bot.pm('pm', function pmCallback(nick, message) {
        cb({
          nick: nick,
          message: message
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