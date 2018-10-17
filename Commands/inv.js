const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    let embed = new Discord.RichEmbed ()
    .setTitle("** :arrow_down: Invite Madness Bot to your Server!**")
    .setColor('RANDOM')
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=470585305167167500&permissions=8&scope=bot");
    message.channel.sendEmbed(embed);
}