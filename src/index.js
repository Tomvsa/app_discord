// Require the necessary discord.js classes
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('../config/config.json');
const { commandHandler } = require('./handler/commandHandler');
const { coomandEvent, commandEvent } = require('./handler/commandEvent');
const fs = require('node:fs');
const path = require('node:path');


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));


// Call commandHandler and pass the necessary parameters
commandHandler(client, foldersPath);
commandEvent(eventFiles, eventsPath, client);

// Log in to Discord with your app's token
client.login(token);