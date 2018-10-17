const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.join(" ").slice(22);
  
    let rEmbed = new Discord.RichEmbed()
    .setTitle("Report")
    .setColor("RANDOM")
    .addField("Reported User",  `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);
    let reportschannel = message.guild.channels.find(`name`, "📝-report");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel");
  
    message.delete().catch(O_o=>{});
    reportschannel.send(rEmbed);
}