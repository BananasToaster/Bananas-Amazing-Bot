const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("🍌Oof, you can't do that.🍌");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("🍌Oof, Couldn't find that user.🍌");
  let role = args.slice(1).join(" ");
  if(!role) return message.reply("🍌Specify a role!🍌");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("🍌Role Given.🍌");

  if(!rMember.roles.has(gRole.id)) return message.reply("🍌Oof, they don't have that role.🍌");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`🍌RIP, you lost the ${gRole.name} role.🍌`)
  }catch(e){
    message.channel.send(`🍌RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.🍌`)
  }
}

module.exports.help = {
  name: "delrole"
}
