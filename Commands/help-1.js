const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**NOPE YOU DONT HAVE THE PERMISSIONS TO DO THAT**");
    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setDescription(`
**      
════════════
 Setup Evolution
════════════
Welcome = **welcome**
Goodbye = **goodbye**
Banned = **Banned**
Roles **Muted**, **Banned**
    **`)


        message.channel.send(embed)
}