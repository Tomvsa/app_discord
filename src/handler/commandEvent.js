const {Event, Client} = require('discord.js');
const path = require('node:path');

/**
 * 
 * @param {*} filePath 
 * @param {*} event 
 */
function commandEvent(eventFiles, eventsPath, client){
    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}


module.exports = { commandEvent}