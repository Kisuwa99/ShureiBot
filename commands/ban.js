const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o=>{});
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Cannot find the user.");    let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You are not allowed to do it !");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person cannot be ban.");
  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#ff0000")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);
  let banChannel = message.guild.channels.find(`name`, "logs");
  if(!banChannel) return message.channel.send("Cannot find the logs channel.");
  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);
  return;
}
module.exports.help = {
  name: "ban"
}
