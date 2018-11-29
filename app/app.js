const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function deleteSendBooper(msg){
	msg.delete()
		.then(msg.channel.send('Booper'));
}

client.on('message', msg => {
  console.log(`**Got Message: ${msg.content} from user ${msg.author.username} ${msg.author.id}`);
  if(msg.author.equals(client.user)){
  	console.log(`	>Message created by bot`);
  	return;
  }
  let msg_str = msg.content.toLowerCase();
  if(msg.embeds.length > 0){
  	console.log(`    >Message includes embedded content`);
  	deleteSendBooper(msg);
  } 
  let words = msg_str.split(" ");
  console.log(`	   >Checking Message Content`);
  for (word in words) {
  	let tempWord = words[word];
  	//replace special characters
  	tempWord = tempWord.replace("0", "o");
  	tempWord = tempWord.replace("3", "e");
  	tempword = tempWord.replace(":b:", "b");

  	let boopers = tempWord.split("booper");
  	console.log(`		>>word: ${tempWord}`);
  	console.log(`			>>>word length: ${tempWord.length}`);
  	console.log(`			>>>booper allocated length: ${(boopers.length-1) * 6}`);
  	if(tempWord.length > (boopers.length-1) * 6){
  		console.log(`	>Message includes more than boopers`);
  		deleteSendBooper(msg);
  	}
  }
});

client.login('NTE3NjA2MjA0NDE2MTk2NjA5.DuErJg.40Yr0gR7-ZEbItAegUQ6ov1UE_U');
