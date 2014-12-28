module.exports = {
  name: "say",
  ns: "irc",
  description: "Say Something",
  phrases: {
    active: "Talking to channel {{input.channel}}"
  },
  ports: {
    input: {
      bot: {
        title: "IRC Client",
        type: "Client",
        required: true
      },
      "in": {
        title: "Message",
        type: "string",
        required: true
      },
      target: {
        title: "Target",
        type: "string",
        required: true
      }
    },
    output: {}
  },
  fn: function say(input, output, state, done, cb, on) {
    var r = function() {
      output = input.bot.say(input.target, input.in);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}