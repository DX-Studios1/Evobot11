const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    var msg = `${Date.now() - message.createdTimestamp}`
    var api = `${Math.round(evo.ping)}`
    let bicon = evo.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setTitle("Ping")
    .setAuthor(message.author.username,message.author.avatarURL)
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .addField('**Time Taken:**',msg + " ms :signal_strength: ")
    .addField('**WebSocket:**',api + " ms :signal_strength: ");
    message.channel.send(embed)
}