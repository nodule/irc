module.exports = {
  name: "say",
  ns: "irc",
  async: true,
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
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.bot.say($.target, $.in);
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      target: {
        title: "Target",
        type: "string",
        required: true
      }
    },
    output: {}
  },
  state: {}
}