const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bicon = message.guild.iconURL;
  let settingsEmbed = new Discord.RichEmbed()
  .setDescription("WORLD SETTINGS OF THE RP")
  .setColor("#ff6347")
  .setThumbnail(bicon)
  .addField("The City:", "This is a big city separated into districts. ")
  .addField("Population of the city:", "Mostly filled with Humans(around 95%) that mostly shows racisms towards monsters or despises them.")
  .addField("The main district:", "There is a main road connecting each districts to each other. And that is where you can enter the city.")
  .addField("The noble district:", "Mostly filled with nobles and rich people.")
  .addField("The main redisential area:", "A district filled with houses.")
  .addField("The red light district:", "There are back alleys in the whole district, like a dedale. They are more or less large.")
  .addField("Out of the city", "The forest is connected to the main road.")
  .addField("Currency :", "Euros.")
  .addField("Timezone of the Role Play:", "CET");

  return message.channel.send(settingsEmbed);
}
module.exports.help = {
  name: "worldsettingsrp"
}
