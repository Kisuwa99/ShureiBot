const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("n/a error");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rMember) return message.reply(`Couldn't find <@${rMember.id}>.`);
  let Role = args.join(" ").slice(22);
  if (!Role) return message.reply ("Specify a role.");
  let gRole = message.guild.roles.find(`name`, Role);
  if(!gRole) return message.reply("Couldn't find that role.");
  if(!rMember.roles.has(gRole.id)) return message.reply(`<@${rMember.id}> does not have the role ${gRole.name}.`);
  await(rMember.removeRole(gRole.id));
  try{
    await rMember.send(`RIP <@${rMember.id}>, you  have been removed the role ${gRole.name}.`)
  }catch(e){
  message.channel.send(`RIP <@${rMember.id}> have been removed the role ${gRole.name}.` )
}
}

module.exports.help = {
  name: "removerole"
}
