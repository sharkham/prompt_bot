const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Bot info!'),
	async execute(interaction) {
		await interaction.reply('This is Cat Prompt Bot! It provides writing prompts, not necessarily cat-related.');
	},
};