const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = (".");

bot.on("ready", function() {
bot.user.setGame("Hakai, .help");
console.log("Le bot a bien été connecté");
});

bot.login("process.env.TOKEN");

bot.on("message", message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Voici les commandes bande d'enculés :\n :\n .help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }
});



    switch (args[0].toLowerCase()){

        case "kick":

        if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){
            message.reply("Les pouvoirs du Dieu de la Destruction ne sont autorisés qu'aux Modérateur, chose que tu sembles loin d'être.")
        }else{
            var member = message.mentions.members.firsts();
            if(!member){
                message.reply("Je ne trouve pas la personne à détruire ..");
            }else{
                if(!member.kickable){
                    message.reply("Mon pouvoir n'est pas assez rechargé pour ça.");
                }else{
                    member.kick().then((member) => {
                    message.channel.send("${member.displayName} à été annihilé, adieu.");
                }).catch(() => {
                    message.channel.send("Kick refusé");
                })   
            }
        }
        } 
}
