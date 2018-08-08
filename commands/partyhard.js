const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  message.delete().catch(O_o=>{});

  let rn= getRandomInt(12) + 1 ;
  console.log("nombre random:", rn);
  if(rn==1){ partyhardgif = url='https://media.giphy.com/media/hsBZfDG7wiWHu/giphy.gif';}
  if(rn==2){ partyhardgif = url='https://i.kym-cdn.com/photos/images/original/000/917/185/e60.gif';}
  if(rn==3){ partyhardgif = url='https://media.giphy.com/media/z6wOeNHW1DkIM/giphy.gif';}
  if(rn==4){ partyhardgif = irl='https://i.kym-cdn.com/photos/images/newsfeed/001/121/498/3b5.gif';}
  if(rn==5){ partyhardgif = irl='https://thumbs.gfycat.com/AssuredConcernedEnglishpointer-size_restricted.gif';}
  if(rn==6){ partyhardgif = irl='https://media.giphy.com/media/VxikTwQU8ZpoQ/giphy.gif';}
  if(rn==7){ partyhardgif = irl='https://tenor.com/view/party-hard-cat-space-partya-gif-4858758';}
  if(rn==8){ partyhardgif = irl='https://derpicdn.net/img/2017/2/2/1353136/full.gif';}
  if(rn==9){ partyhardgif = irl='https://media.giphy.com/media/Z9uUspOf2IAHC/giphy.gif';}
  if(rn==10){ partyhardgif = irl='https://i.chzbgr.com/full/6878320384/h35E39463/';}
  if(rn==11){ partyhardgif = irl='https://derpicdn.net/img/2013/10/25/456137/full.gif';}
  if(rn==12){ partyhardgif = irl='https://i.pinimg.com/originals/10/f9/bb/10f9bb26b0b9a540d7ec07af9ef0acb0.gif'}

  rn= getRandomInt(12) + 1 ;
  let Member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let phEmbed = new Discord.RichEmbed()
  .setColor("#7eb7b4")
  .setDescription(`**:fireworks: <@${message.author.id}> is partying hard with <@${Member.id}> :fireworks:**`)
  .setImage(partyhardgif)
  return message.channel.send(phEmbed);

  };

module.exports.help = {
  name: "partyhard"
};
