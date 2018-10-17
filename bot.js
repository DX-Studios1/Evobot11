const Discord = require("discord.js");
const fs = require("fs");
const evo = new Discord.Client({DisableEveryone: false});
const active = new Map();


const verified = ["289764100915855363"]

var prefix = ".";
evo.on('message', async message => {

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;




    try {
      let ops = {
        verified: verified
      }

      let commandFile = require(`./Commands/${cmd}.js`);
      commandFile.run(evo, message, args, ops);
    } catch(e) {
      console.log(e.stack);
    }

  })
evo.on('ready', () => {
setInterval(function(){
evo.user.setActivity(` ON ${evo.guilds.size} Server(s) -> .help`)
},10000)
});

evo.on('guildMemberAdd', evo => {
    let channel = evo.guild.channels.find('name', 'welcome');
    let evoavatar = evo.user.avatarURL
    if (!channel) return;

    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(evoavatar)
    .addField(':bust_in_silhouette: | Name :',`${evo}`)
    .addField(':wave: | Welcome!' , `**Welcome to the server**, ${evo}`)
    .addField(':id: | User :', "**[" + `${evo.id}` + "]**" )
    .addField(':family_mwgb: | Server member count :',`**${evo.guild.memberCount}**`)
    .addField("Name:",`**${evo.user.username}#${evo.user.discriminator}**`, true)
    .addField(' Server', `**${evo.guild.name}**`,true)
    .setFooter(`© Evolution - Welcome to evolution`)
    .setTimestamp()

  channel.sendEmbed(embed);
});
evo.login("NTAxNzg4NjU5NDczNzExMTA0.Dqe5gg.CbnxKbUVkktF0QBM9bWZZTc25ag")