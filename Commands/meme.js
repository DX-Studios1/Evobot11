const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    let {body} = await superagent
    .get(`https://api-to.get-a.life/meme`);
  
    let dEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Dog :dog:")
    .setImage(body.url);
  
    message.channel.send(dEmbed);
}