module.exports = {
  name: "join",
  ns: "irc",
  description: "Join Channel",
  phrases: {
    active: "Joining channel {{input.channel}}"
  },
  ports: {
    input: {
      bot: {
        title: "IRC Client",
        type: "Client",
        required: true
      },
      channel: {
        title: "Channel",
        type: "string"
      }
    },
    output: {}
  },
  fn: function join(input, $, output, state, done, cb, on) {
    var r = function() {
      output = $.create($.bot.join($.channel))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}