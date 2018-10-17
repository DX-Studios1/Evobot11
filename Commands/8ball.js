const Discord = require("discord.js");


exports.run = (evo, message, args, ops) => {
      if(!args[2]) return message.reply("Please ask a full question");
      let replies = ["Yes", "No", "I dont know", "Ask again", "Better Not Tell You Now", "Outlook Good", "Outlook Not So Good", "Signs Point to Yes,", "Very Doubtful", "Without A Doubt", "You May Rely On It", "As I see it, yes", "It is certain.", "Reply hazy, try again", "Cannot predict now", "Concentrate and ask again.", "In Your Dreams", "You've Got To Be Kidding...", "Ask Me If I Care", "Don't count on it.", "As if"];
    
    
      let result = Math.floor((Math.random() * replies.length));
      let question = args.slice(0).join(" ");
    
      let bEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.tag)
      .setColor("#FF9900")
      .addField("Guestion", question)
      .addField("Answer", replies[result]);
      message.channel.send(bEmbed)
    }
    

