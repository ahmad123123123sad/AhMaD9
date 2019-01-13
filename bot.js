const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "534070892439797780"; 
var channel = "534071167800180747";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** spam say spam  **')
    },305);
})








client.login(process.env.BOT_TOKEN);
