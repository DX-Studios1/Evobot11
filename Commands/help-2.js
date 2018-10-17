const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setDescription(`
**      
════════════
 Evolution General Commands :fire:
════════════
.8ball
.help
.bot
.server
.MCskin
.user
.report
.vote
.inv
.info
.support
.meme
.dog
.ping
.gsearch
.invites
    **`)
        message.channel.send(embed)
}