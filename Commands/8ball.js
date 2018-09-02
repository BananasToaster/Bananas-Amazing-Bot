const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!8ball <Question> and he'll answer you.
  if(!args[2]) return message.reply("pls ask a full question buddy!");
  let replies = ["Yes.", "No.", "Probably", "Mostly likely",];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FFFF00")
  .addField("Qeustion", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);



}

module.exports.help = {
  name: "8ball"
}
