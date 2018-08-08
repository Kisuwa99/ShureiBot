const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  message.delete().catch(O_o=>{});

  let n= getRandomInt(15) + 1 ;
  console.log("nombre random:", n);
  if(n==1){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473841929868673025/UnimportantGiantGopher-max-1mb.gif';}
  if(n==2){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842128670162944/fe83684d972e038f577242a311f36549.gif';}
  if(n==3){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842132654751745/fullmetal_alchemist_flame_alchemist_explosion.gif';}
  if(n==4){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842228792524820/2996484-5171690775-tumbl.gif';}
  if(n==5){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842243493429258/giphy2.gif';}
  if(n==6){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842276519641119/giphy.gif';}
  if(n==7){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842453191983114/tumblr_neb7s88fsu1u2928mo1_500.gif';}
  if(n==8){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842487451189250/077cbf9b40133b91709868086d7206d8.gif';}
  if(n==9){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842555436400640/saitama-one-punch-man-gif-8.gif';}
  if(n==10){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842557261185024/Beer_explosion.gif';}
  if(n==11){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842560729874432/Roy_mustang_angry.gif';}
  if(n==12){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473842651859517440/tnt.gif';}
  if(n==13){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473843057184342016/Makoto-gif-11.gif';}
  if(n==14){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473843119498985472/InfiniteInfatuatedDunlin.gif';}
  if(n==15){ nuking = url='https://cdn.discordapp.com/attachments/419807411864338433/473843184070426624/wnFxTB.gif';}

  n= getRandomInt(12) + 1 ;

  let Member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let nukeEmbed = new Discord.RichEmbed()
  .setColor("#7eb7b4")
  .setDescription(`**:bomb: <@${message.author.id}> nuked <@${Member.id}> :bomb:**`)
  .setImage(nuking)
  return message.channel.send(nukeEmbed);

  };

module.exports.help = {
  name: "nuke"
};
