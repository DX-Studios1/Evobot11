const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setDescription(`
**      
════════════
 Evolution Help Options
════════════
.help-1 Setup Evolution
.help-2 General Commands
.help-3 Staff Commands
.help-4 Fun Commands
    **`)

        message.channel.send(embed)
}