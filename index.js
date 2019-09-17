const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require('./config.json');

client.on("ready", async () => {

  console.log(`${client.user.username} is online.`)
  client.user.setActivity("on Discord.");

});

client.on("ready", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



});

client.login(config.token);
