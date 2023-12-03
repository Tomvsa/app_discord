const { Events} = require("discord.js");

/*Se define un evento que activará cuando el bot este listo*/
module.exports = {
    name: Events.ClientReady, //nombre del evento
    once: true, //Indica si tiene que ejecutarse una vez
    execute(client){
        console.log(`Ready ${client.user.tag}`);
    },
};