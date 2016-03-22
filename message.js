module.exports = {
  name: "message",
  ns: "irc",
  description: "Public Message",
  phrases: {
    active: "Receiving message"
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
      from: {
        title: "From",
        type: "string"
      },
      to: {
        title: "To",
        type: "string"
      },
      message: {
        title: "Message",
        type: "string"
      },
      raw: {
        title: "Raw",
        type: "object"
      }
    }
  },
  fn: function message(input, $, output, state, done, cb, on) {
    var r = function() {
      $.bot.message('message', function messageCallback(from, to, message, raw) {
        cb({
          from: from,
          to: to,
          message: message,
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