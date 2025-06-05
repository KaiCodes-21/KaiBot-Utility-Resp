const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const { clientId, guildId } = require('./config.json');

const commands = [
  new SlashCommandBuilder()
    .setName('pingkai')
    .setDescription('Replies with Pong and latency!'),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('✅ Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
