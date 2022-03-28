class Chat extends Command {
  run (args, username) {
    super.run(args, username)

    const message = args.join(' ')

    this.handler.bot.chat(message)
  }
}

module.exports = {
  Command: Chat,
  name: 'chat',
  description: 'Echos text back.',
  usage: 'chat <message>',
  trust: 0,
  enabled: true
}
