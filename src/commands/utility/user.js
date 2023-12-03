const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// Obtener información del miembro
		const member = interaction.member;

		// Construir el embed
		const embed = {
			title: 'User Information',
			color: parseInt('0099ff', 16),
			description: '',
			fields: [
				{ name: 'Username', value: member.user.username, inline: true },
				{ name: 'Discriminator', value: `#${member.user.discriminator}`, inline: true },
				{ name: 'User ID', value: member.user.id },
				{ name: 'Joined Server', value: member.joinedAt.toLocaleDateString(), inline: true },
				{ name: 'Joined Discord', value: member.user.createdAt.toLocaleDateString(), inline: true },
				{ name: 'Roles', value: member.roles.cache.map(role => role.name).join(', ') || 'No roles' }
			]
		};

		// Enviar el embed al canal de la interacción
		await interaction.channel.send({ embeds: [embed] });
	},
};
