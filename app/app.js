const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let msg_str = msg.content.toLowerCase();
  if(msg.embeds.length > 0){
  	msg.delete()
  		.then(message.channel.send('Booper'));
  		return;
  } 
  let words = msg_str.split(" ");
  for (word in words) {
  	let tempWord = word;

  	//replace special characters
  	tempWord = tempWord.replace("0", "o");
  	tempWord = tempWord.replace("3", "e");
  	tempword = tempWord.replace(":b:", "b");

  	let boopers = word.split("booper");
  	if(word.length > (boopers.length-1) * 6){
  		
  	}
  }
});

client.login('NTE3NjA2MjA0NDE2MTk2NjA5.DuErJg.40Yr0gR7-ZEbItAegUQ6ov1UE_U');
