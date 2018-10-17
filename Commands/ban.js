const Discord = require('discord.js');
exports.run = (evo, message, args, ops) => {

    let buser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let banned = message.guild.roles.find(`name`, "Banned");

  if(!buser) return message.channel.send("**:x: | You have to mention a user/player.**");


  buser.addRole(banned.id);
message.channel.send("**User has been banned**")

}