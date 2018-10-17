const Discord = require("discord.js");
exports.run = (evo, message, args, ops) => {
    const vlevel = ['None', 'Low (Must have verified email)', 'Medium (Must be register for 5 mineuts)', 'High (Need to wait 10 minutes)', 'Very High (Need verified phone on account)']
    const members = await message.guild.members.filter(m=> m.presence.status === 'online').size + message.guild.members.filter(m=> m.presence.status === 'idle').size + message.guild.members.filter(m=> m.presence.status === 'dnd').size
    message.channel.send(new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} [Server Icon URL]`, message.guild.iconURL)
    .setURL(message.guild.iconURL)
    .addField('ðŸ†” Server ID', message.guild.id , true)
    .addField('ðŸ‘‘ Server Owner', message.guild.owner , true)
    .addField('ðŸ—º Region', message.guild.region , true)
    .addField(`ðŸ‘¥ Members [${message.guild.memberCount}]`, `${members} online`, true)
    .addField(`ðŸ’¬ Channels`, `**${message.guild.channels.filter(c => c.type === 'category').size}** Categories | **${message.guild.channels.filter(c=> c.type === 'text').size}** Text | **${message.guild.channels.filter(c=> c.type === 'voice').size}** Voice` ,true)
    .addField(`ðŸ’  Verification Level`, vlevel[message.guild.verificationLevel] , true)
    .addField(`ðŸ‘” Roles`, message.guild.roles.size, true)
    .addField(`ðŸ“† Created On`, message.guild.createdAt , true)
    .setFooter(message.author.tag, message.author.avatarURL)
    )
  }