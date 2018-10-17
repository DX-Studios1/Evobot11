const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    let sReason = args.join(" ");
    let sEmbed = new Discord.RichEmbed()
    .setTitle("Support Request")
    .setColor("RANDOM")
    .addField("Requested By", `${message.author}`)
    .addField("User Id", `${message.author.id}`)
    .addField("Guild", message.guild.id)
    .addField("Help", sReason)
    .addField("Time", message.createdAt)
    .setFooter('Made by Nameless Dev team',  bot.user.avatarURL);
    let channel = bot.channels.get("483638513342873615")
    channel.send(sEmbed)
}