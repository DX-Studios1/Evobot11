const Discord = require("discord.js");

exports.run = (evo, message, args, ops) => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**ON** **__${evo.guilds.size}__ Servers 🌐**
    **With** **__${evo.users.size}__ Users 👥**
    **and** **__${evo.channels.size}__ Channels 📚**`)
    message.channel.send(embed);
}