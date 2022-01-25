const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const { keep_alive } = require("./keep_alive");

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login("OTM1Mzk4MzY1NzEyMjI0MjU2.Ye-DnQ.L3EcV4Dopm1M5zQssvIzJ450FO4");
