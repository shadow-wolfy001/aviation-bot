const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(` Succesfully Logged in as ${client.user.tag} <3!`);
});

const { prefix, token } = require('./config.json');

client.login(token);

process.setMaxListeners(20);





  
  client.on('message', msg => {
  if (msg.content === '!invites') {

    var userId = msg.author.id;

    var userInvites = msg.guild.fetchInvites().then(invites => invites.find(invite => invite.inviter.id === userId));

    var useAmount = userInvites.uses;

    if (useAmount === undefined) {

        msg.channel.send(`${msg.author.username} has 0 invites`);
    }

    else {

        msg.channel.send(`${msg.author.username} has ${useAmount} invites`);
    }
}
  }); 



 


  
const config = require("./config.json");

const fetch = require('node-fetch');


client.on("ready", () => {
 
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  
  client.user.setActivity(`Watching over ${client.guilds.cache.size} servers`);
});

client.on("guildCreate", guild => {
  
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`I am currently stalking ${client.guilds.cache.size} servers`);
});

client.on("guildDelete", guild => {

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`I am currently stalking ${client.guilds.cache.size} servers`);
});


client.on("message", async message => {

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const { prefix, token } = require('./config.json');

  let reason = args.slice(1).join(' ');

  const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);



  const Discord = require('discord.js');


  if(message.author.bot) return;

  

  if(!message.content.startsWith(config.prefix)) return;
  
  
  
  const command = args.shift().toLowerCase();

  if(command === "help") {
    let HelpEmbed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTitle(`Help`) 
    .addFields(
      { name: 'Moderation', value: 'Ban, Kick, Warn, Mute,' },
      { name: 'Utility', value: 'Slowmode, Purge', inline: true },
      { name: 'Fun', value: 'Bork, Waddle, Urban, Ahegao, ', inline: true },
    )
    .setTimestamp()
    return message.channel.send(HelpEmbed)
  }


 if (command === "waddle") {
  let waddleEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}, Waddle or die tommorow`)
 .setColor('#0e70df')
 .setImage('https://images-ext-1.discordapp.net/external/kvLhDXQtIUeanQMCwSSz6WlrRAWpJG3XxBQi_E3GwFI/%3Fwidth%3D319%26height%3D475/https/media.discordapp.net/attachments/592463507124125706/721910509783351336/Penguin_bots_bot_pfp_.png')
 await console.log(`await command has been used in ${message.guild.name} by ${message.author.username}`);
  message.channel.send(waddleEmbed)

 }

if(command === "bork")  {
  let borkEmbed = new Discord.MessageEmbed()
  .setTitle('Bork!')
  .setImage(`https://media.discordapp.net/attachments/592463507124125706/723222781508059156/B3Frk.png?width=633&height=475`)
  .setTimestamp()
await console.log(`bork command has been used in ${message.guild.name} by ${message.author.username}`);
message.channel.send(borkEmbed)
}     

if (command === "8ball") {

const eightball = [


"Yes",  "No",
"Unsure",

"Mabye",

"Concentrate and ask again",

"Definetly"




]

const eightballrandom = eightball[Math.floor (Math.random() * eightball.length) ]

let eightballembed = new Discord.MessageEmbed()
.setTitle(`You have asked thy great 8ball`)
.addFields(
  { name: 'Your answer is', value: eightballrandom, },
)

return message.channel.send(eightballembed)

}
 if (command === "ahegao")  {

  const aleghro = ["https://cdn.discordapp.com/attachments/723566792521547826/733874684399058964/mydocttfycn31.png",
  "https://cdn.discordapp.com/attachments/723566792521547826/733874852783456357/2Q.png",
  "https://cdn.discordapp.com/attachments/592463507124125706/723222937175326791/ahego_.png",
  "https://cdn.discordapp.com/attachments/707354557814014032/733875769658310706/4845195bceb02f06b01fc9cc7a642499.png",
  "https://cdn.discordapp.com/attachments/719017965277937726/733876938384343085/312059436013211.png",
]
  const randomAleghro = aleghro[Math.floor(Math.random() * aleghro.length)]


   let ahegaoEmbed = new Discord.MessageEmbed()
   .setTitle(`Ahegao!`)
   .setImage(randomAleghro)
   .setTimestamp()
   await console.log(`ahegao command has been used in ${message.guild.name} by ${message.author.username}`);
message.channel.send(ahegaoEmbed)

 }

  if(command === "ping") {

    const m = await message.channel.send("Getting the ping");
    m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }

  
  if(command === "say") {
    if(!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply("Lol noob, you dont have permission, the kick members perms is required");
   
    const sayMessage = args.join(" ");
    
    message.delete().catch(O_o=>{}); 
     await console.log(`say command has been used in ${message.guild.name} by ${message.author.username}`);
    
    message.channel.send(sayMessage);
  }

  if(command === "kick") {
    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, You do not have the required permission to do this, kick members perms is required`) 
    .setTimestamp()
    
    if(!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(RolePermsEmbed)


    
    let member = message.mentions.members.first();
    let validMemberEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, please mention a valid user of this server`)
    .setTimestamp()

    let missingBotKickPermmisionsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, I dont have the permmision to do this.`)

    if(!member)
    return message.channel.send(validMemberEmbed)
    if(!member.kickable) 
    return message.channel.send(missingBotKickPermmisionsEmbed)
    

    let reason = args.slice(1).join(' ');
    let kicksuccesEmbed = new Discord.MessageEmbed()
    .setColor('#20d44d')
    .setTitle(`${member.user.username} has been kicked by ${message.author.tag} because: ${reason}`)

    let kickdmembed = new Discord.MessageEmbed( )
.setTitle(`You have been kicked from ${message.guild.name}`)
    let nokickreasonembed = new Discord.MessageEmbed()
    .setColor('RED')
    .addFields(
      { name: 'No reason entered', value: `Please enter a valid reason`, },
    )
    
    if(!reason)
   
    return message.channel.send(nokickreasonembed)


    await console.log(`kick command has been used in ${message.guild.name} by ${message.author.username}`);
     member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(kicksuccesEmbed);
member.user.send(kickdmembed)
  }


  if(command === `warn`){          

    let dMessage = args.join(" ").slice(22);
    let member = message.mentions.members.first();
    let WarnCantFindEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('I cant warn somebody if you dont tell me who to warn :/')


    let validMemberEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, please mention a valid user of this server`)
    .setTimestamp()
  
 

    let NoWarnReason = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('You need to enter a valid reason.')


 .setTimestamp()


    if (!member)

    
    return message.channel.send(WarnCantFindEmbed)

    if(!message.member.hasPermission("KICK_MEMBERS"))

    return message.reply(validMemberEmbed)


    if(dMessage.length < 1) 


    return message.channel.send(NoWarnReason)

  let  WarnEmbed = new Discord.MessageEmbed()
  .setColor('RED')
    .setTitle(`you have been warned`)
    .addFields(
      { name: 'Warned in', value: `${message.guild.name}`, },
     { name: 'Warned By', value: `${message.author.username}`, },
     { name: 'Reason', value: (dMessage)},
    )

    let ServerWarnEmbed = new Discord.MessageEmbed()
    .setTitle(`Succesfully warned ${member.user.username}`)
    .addFields(
      { name: 'Warned for', value:`${dMessage}` },     { name: 'Warned By', value: `${message.author.username}`, inline: true },
  
    
     )

    member.send(WarnEmbed)
    await console.log(`warn command has been used in ${message.guild.name} by ${message.author.username}`);
    message.channel.send(ServerWarnEmbed)
}









  if(command === "ban") {



    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
    .setTimestamp()
    if(!message.member.hasPermission("BAN_MEMBERS"))
    
    return message.channel.send(RolePermsEmbed);




    let member = message.mentions.members.first();
  let validMemberEmbed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`${message.author.username}, please mention a valid user of this server`)
  .setTimestamp()

let missingBotPermmisionsEmbed = new Discord.MessageEmbed()
.setColor('#cf1313')
.setTitle(`${message.author.username}, I dont have the permmision to do this.`)

let reason = args.slice(1).join(' ');
let bansuccesEmbed = new Discord.MessageEmbed()
.setColor('GREEM')
.setTitle(`${message.author.username} has succesfully banned ${member} for ${reason}`)








  if(!member)
    return message.channel.send(validMemberEmbed);
  if(!member.bannable) 
    return message.channel.send(missingBotPermmisionsEmbed);

    let nobanreasonembed = new Discord.MessageEmbed()
    .setColor('RED')
    .addFields(
      { name: 'No reason entered', value: `Please enter a valid reason`, },
    )



  if(!reason) 
  return message.channel.send(nobanreasonembed)
  await console.log(`ban command has been used in ${message.guild.name} by ${message.author.username}`);

  let BanDmembed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle('You have been banned')
  .addFields(
  { name: 'You have been Banned from ', value: `${message.guild.name}` },
    { name: 'Banned By', value: `${message.author.username}`, inline: true },
    { name: 'reason', value: (reason)},
  );

   member.send(BanDmembed)
  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  message.channel.send(bansuccesEmbed);

  const banchannel = message.guild.channels.cache.get('728057875959906356');
  banchannel.send(bansuccesEmbed)

}

if(command === 'unmute') {


  let RolePermsEmbed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
  .setTimestamp()
if(!message.member.hasPermission("MANAGE_MESSAGES"))
 return message.channel.send(RolePermsEmbed)



 let mutevalidmemberembed = new Discord.MessageEmbed()
 .setColor('RED')
 .setTitle('No user mentioned')
   .addFields(
     { name:  ` Please enter a valid user`, value:`Cant unmute if you dont tell me who` },
   
    )

let member = message.mentions.members.first();

if (!member)
return message.channel.send (mutevalidmemberembed)

let reason = args.slice(1).join(' ');



  const muterole = message.guild.roles.cache.find(role => role.name === 'Muted');


member.roles.remove(muterole);

let unmuteembed = new Discord.MessageEmbed()
.setTitle(`Succesfully unmuted ${member.user.username}`)
.setColor('GREEN')



message.channel.send(unmuteembed)
   }

if(command === 'mute') {


  let RolePermsEmbed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
  .setTimestamp()
if(!message.member.hasPermission("MANAGE_MESSAGES"))
 return message.channel.send(RolePermsEmbed)



 let mutevalidmemberembed = new Discord.MessageEmbed()
 .setColor('RED')
 .setTitle('No user mentioned')
   .addFields(
     { name:  ` Please enter a valid user`, value:`Cant mute if you dont tell me who` },
   
    )

let member = message.mentions.members.first();

if (!member)
return message.channel.send (mutevalidmemberembed)

let reason = args.slice(1).join(' ');

let nomutereasonembed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`No reason given`)
.addFields(
  { name:  ` Please enter a mute reason`, value: `!mute <user> <reason>` },

 )

if (!reason)

return message.channel.send (nomutereasonembed)

  const muterole = message.guild.roles.cache.find(role => role.name === 'Muted');

let nomuterole = new Discord.MessageEmbed()
.setTitle('Unable to mute')
.setColor('RED')
.addFields(
  { name:  ` Cant find mute role`, value:`Please create a role called Muted and deny it permission to send messages`},


)
if(!muterole)

return message.channel.send(nomuterole)

member.roles.add(muterole);


let MuteEmbed  = new Discord.MessageEmbed()
.setColor('GREEM')
.setTitle('Sucsefully Muted!')
.addFields(
  { name:  ` Sucsefully muted`, value:`${member.user.username}` },
  { name:  `Muted for`, value:`${reason}` },
 )
 
 message.channel.send(MuteEmbed)

let muteDMembed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`You have been muted`)
.addFields(
  { name:  ` You have been muted in ${message.guild.name} `, value:`Muted for ${reason}` },

 )
member.send(muteDMembed)
}
  if(command === "slowmode") {

    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
    .setTimestamp()
    if(!message.member.hasPermission("MANAGE_MESSAGES"))


    

  return message.channel.send(RolePermsEmbed)

let nonumberembed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('No Slomwode Time Specified')

if (isNaN(args[0]))

 
  



 return message.channel.send(nonumberembed)
 await console.log(`slowmode command has been used in ${message.guild.name} by ${message.author.username}`);

 message.channel.setRateLimitPerUser(args[0], )


 let slowmodeembed = new Discord.MessageEmbed()
 .setTitle(`${message.author.username}has set the slowmode to ${args[0]} second's`)
 .setTimestamp()
 message.channel.send(slowmodeembed)
  }


  if(command === "purge") {
      
    let RolePermsEmbed = new Discord.MessageEmbed()
    .setColor('#cf1313')
    .setTitle(`${message.author.username}, You do not have the required permission to do this`) 
    .setTimestamp()
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
return message.channel.send(RolePermsEmbed)

    
    const deleteCount = parseInt(args[0], 10);
    let nodeletenumberembed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle(`Enter a purge amount between 2 - 100`)
   
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send(nodeletenumberembed);
    
   
    const fetched = await message.channel.messages.fetch({limit: deleteCount});


    let purgeembed = new Discord.MessageEmbed()
    .setTitle(`Succesfully Purged ${deleteCount} messages`)

    
  
   await message.channel.bulkDelete(fetched)

    message.channel.send(purgeembed)
    .then(msg => {
      msg.delete({ timeout: 2000})
    })
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }






 if (command === 'urban') {
  if (!args.length) {
    return message.channel.send('You need to supply a search term!');
  }


  const querystring = require('querystring');
  const query = querystring.stringify({ term: args.join(' ') });

  const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

  if (!list.length) {
    return message.channel.send(`No results found for **${args.join(' ')}**.`);
  }

  const [answer] = list;
  let embed = new Discord.MessageEmbed()
    .setColor('#EFFF00')
    .setTitle(answer.word)
    .setURL(answer.permalink)
    .setThumbnail('https://media.discordapp.net/attachments/726494577191813191/727191524210770020/dictionary_168552845.jpg?width=538&height=474')
    .addFields(
      { name: 'Definition', value: trim(answer.definition, 1024) },
      { name: 'Example', value: trim(answer.example, 1024) },
  
    );
    await console.log(`urban command has been used in ${message.guild.name} by ${message.author.username}`);
  message.channel.send(embed);
    }


  });


