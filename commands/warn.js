const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
module.exports.run = async(bot, message, args) => {
  //:warn @user <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You are not allowed to do that.")
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.memnbers.get(args[0]));
  if(!wUser) return message.reply("This user does not exist !");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Hmmmmmmm.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
    if(err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#ff3300")
  .setField("Warned User", wUser.tag)
  .setField("Warned in", message.channel)
  .setField("Number of warnings", warns[wUser.id].warns)
  .setField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("You need a #logs channel on the server before using this !")

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 1){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You need a 'muted' role !");

    let mutetime = "60s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`${wUser.tag} has been muted for 60seconds, for breaking once the rules.`);

    setTimeout(function(){
        wUser.removeRole(muterole.id);
        message.channel.reply(`${wUser.tag} has been unmuted.`);
    });
  };

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You need a 'muted' role !");

    let mutetime = "2h";
    await(wUser.addRole(muterole.id));
    message.channel.send(`${wUser.tag} has been muted for two hours, for breaking twice the rules.`);

    setTimeout(function(){
        wUser.removeRole(muterole.id);
        message.channel.reply(`${wUser.tag} has been unmuted.`);
    });
  };

  if(warns[wUser.id].warns == 3){
    message.channel.send(`${wUser.tag} has been kicked for breaking the rules three times.`);
    message.guild.member(wUser).kick(reason);
  };
}

module.exports.help = {
  name: "warn"
}
