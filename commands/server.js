const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Server info!'),
	async execute(interaction) {
		await interaction.reply(`Server info: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
};