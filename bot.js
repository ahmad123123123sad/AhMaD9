const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', async() => {
var server = "513743320703434752"; 
var channel = "513743478325510144";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** احمد عمك يا ورعاحمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع احمد عمك يا ورع **')
    },305);
})








client.login(process.env.BOT_TOKEN);
