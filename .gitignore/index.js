const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = (".");

bot.on("ready", function() {
bot.user.setGame("Hakai, .help");
console.log("Le bot a bien été connecté");
});

bot.login("NDA3NTc2MDgxOTIzNzAyNzk0.DVDg8g.KlsqxbXYV4OLBGG60ELlV9zDlms");

bot.on("message", message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Voici les commandes bande d'enculés :\n .help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }
});    
