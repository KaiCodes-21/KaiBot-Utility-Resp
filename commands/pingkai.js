const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pingkai')
    .setDescription('Replies with Pong and shows latency'),
  async execute(interaction) {
    const latency = Date.now() - interaction.createdTimestamp;
    await interaction.reply(`Pong! 🏓 Latency is ${latency}ms.`);
  }
};
