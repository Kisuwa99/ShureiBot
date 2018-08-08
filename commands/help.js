const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let helpEmbed = new Discord.RichEmbed()
  .setDescription("Commands List")
  .setColor("#7eb7b4")
  .setThumbnail(bicon)
  .addField("Addrole", "To add a role to someone | :addrole @[user] [rolename]")
  .addField("Ban", "To ban someone (needs #logs channel) | :ban @[user] [reason]")
  .addField("Botinfo", "To have the infos of the bot | :botinfo")
  .addField("Clock", "To have the CET time | :help")
  .addField("Help", "To know all of the bot commands| :help")
  .addField("Kick", "To kick someone (needs #logs channel)| :kick @[user] [reason]")
  .addField("Removerole", "To remove the role of someone | :removerole @[user] [rolename]")
  .addField("Report", "To report someone(needs #logs channel) | :report @[user] [reason]")
  .addField("Serverinfo", "To have the server infos | :serverinfo")
  .addField("Tempmute", "To mute temporary someone | :tempmute @[user] [time :ms,s,m,d]");

  return message.channel.send(helpEmbed);
}
module.exports.help = {
  name: "help"
}
