// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('../config/config.json');
const fs = require('node:fs');
const path = require('node:path');
import { commandHandler } from './commands/controller/commandHandler';

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// Call commandHandler and pass the necessary parameters
commandHandler(client, foldersPath);

// Log in to Discord with your app's token
client.login(token);