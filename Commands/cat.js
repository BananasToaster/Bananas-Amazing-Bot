const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

 let {body} = await superagent
 .get(`http://aws.random.cat/meow`);

 let dogembed = new Discord.RichEmbed()
 .setColor("#FFFF00")
 .setTitle("Catty")
 .setImage(body.file);

 message.channel.send(dogembed);


}


module.exports.help = {
  name: "catty"
}
