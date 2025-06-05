const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env.DISCORD_TOKEN;

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// ADD THIS: Slash command interaction handler
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'pingkai') {
    const latency = Date.now() - interaction.createdTimestamp;
    await interaction.reply(`Pong! 🏓 Latency is ${latency}ms.`);
  }
});

client.login(token);

