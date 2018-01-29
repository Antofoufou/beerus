const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
bot.user.setGame("Hakai, .help");
console.log("Le bot a bien été connecté");
});

bot.login("NDA3NTc2MDgxOTIzNzAyNzk0.DVDg8g.KlsqxbXYV4OLBGG60ELlV9zDlms");
