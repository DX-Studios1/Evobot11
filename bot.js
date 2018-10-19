const Discord = require("discord.js");
const fs = require("fs");
const evo = new Discord.Client({DisableEveryone: false});
const active = new Map();
let anti_spam = require("discord-anti-spam");
const sWlc = {}
const moment = require ('moment')



const verified = ["289764100915855363"]

evo.on('message', async message => {

      if(message.author.bot) return;
  if(message.channel.type === "dm") return;
    
      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
          prefixes: "."
        };
      }
    
  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;


  let messageArray = message.content.toLowerCase().split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);




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

anti_spam(evo, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 30, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 5000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast.
  banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
  deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
});

evo.on('message', _xShaDowZx => {
  if (_xShaDowZx.content.startsWith(".avatar")) {
      if (_xShaDowZx.author.bot) return
      var mentionned = _xShaDowZx.mentions.users.first();
  var _xShaDowZx;
    if(mentionned){
        var Shadow = mentionned;
    } else {
        var Shadow = _xShaDowZx.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor('Avatar Link:')
      .setTitle('Click Here')
      .setURL(`${Shadow.avatarURL}`)
      .setImage(`${Shadow.avatarURL}`)
      .setFooter('Codes Server Made by --> _xShaDowZx',evo.user.avatarURL) 
    _xShaDowZx.channel.send(embed);
  }
});

evo.on('message', message => {
//if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(".setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**.setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
 }
});
 
evo.on("guildMemberAdd", member => {
     if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
   channel: "welcome"
 }
 const channel = sWlc[member.guild.id].channel
   const sChannel = sWlc[member.guild.id].channel
   let welcomer = member.guild.channels.find('name', sChannel);
   let memberavatar = member.user.avatarURL
     if (!welcomer) return;
     if(welcomer) {
        moment.locale('ar-ly');
        var h = member.user;
       let heroo = new Discord.RichEmbed()
       .setThumbnail(member.user.avatarURL)
       .setTitle(':sparkles: Welcome :sparkles:')
       .setDescription(`Welcome \`${member.user.username}#${member.user.discriminator}\` to **${member.guild.name}:gem:**
 
We hope you enjoy your stay, Please don't forget to read the rules:scroll:
 
Wouldn't want them getting broken!:no_entry_sign:
 
➢ :family: __**Total Members In Server:**__\`${member.guild.memberCount}\`
 
➢ :link: __**User ID:**__
\`${member.user.id}\`
`)
       .setColor('RANDOM')
       .setFooter('Nameless#2340 || Nameless Bot', evo.user.displayAvatarURL, true)
    welcomer.send({embed:heroo});          
       
     var Canvas = require('canvas')
     var jimp = require('jimp')
     
     const w = ['w.png'];
     
             let Image = Canvas.Image,
                 canvas = new Canvas(557, 241),
                 ctx = canvas.getContext('2d');
 
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err)
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 540, 230);
     
     })
     
                     let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                     jimp.read(url, (err, ava) => {
                         if (err) return console.log(err);
                         ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                             if (err) return console.log(err);
     
                                   ctx.font = '21px kathen';
                             ctx.fontSize = '25px';
                             ctx.fillStyle = "#FFFFFF";
                               ctx.fillText(member.user.username, 240, 150);
                             
                             //NAMEً
                             ctx.font = '21px kathen';
                             ctx.fontSize = '20px';
                             ctx.fillStyle = "#FFFFFF";
     ctx.fillText(`Welcome To ${member.guild.name}`, 240, 90);
     
                             //AVATARً
                             let Avatar = Canvas.Image;
                             let ava = new Avatar;
                             ava.src = buf;
                             ctx.beginPath();
                ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                  ctx.closePath();
                 
                                ctx.clip();
 
                       ctx.drawImage(ava, 7, 8, 227, 225);
                             ctx.closePath();
 
                           
   welcomer.sendFile(canvas.toBuffer())
     
     
     
     })
     })
     
     }
     });

     evo.on('message', async _xShaDowZx => {
      if (_xShaDowZx.content === 'Jtest') {
      evo.emit('guildMemberAdd', _xShaDowZx.member || await _xShaDowZx.guild.fetchMember(_xShaDowZx.author));
      }});
evo.login("TOKEN")
