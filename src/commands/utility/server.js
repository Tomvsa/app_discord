const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the guild.'),
	async execute(interaction) {
		// Obtener información de la guild
		const guild = interaction.guild;
		const guildOwner = await interaction.guild.fetchOwner();

		

		// Construir el embed
		const embed = {
			title: 'Guild Information',
			color: parseInt('0099ff', 16),
			description: 'Info',
			fields: [
				{ name: 'Guild ID', value: guild.id },
				{ name: 'Guild Name', value: guild.name },
				{ name: 'Owner', value: `${guildOwner.user.username}#${guildOwner.user.discriminator}` },
				{ name: 'Members', value: guild.memberCount },
				{ name: 'Creation Date', value: guild.createdAt.toLocaleDateString(), inline: true },
				{ name: 'Region', value: guild.region || 'Unknown', inline: true },
				{ name: 'Verification Level', value: guild.verificationLevel || 'Unknown' }, // Usar 'Unknown' si el valor es null o undefined
				{ name: 'AFK Channel', value: guild.afkChannel ? guild.afkChannel.name : 'None', inline: true },
				{ name: 'Content Filter', value: guild.explicitContentFilter },
			]
		};

		console.log(embed.fields);

		// Enviar el embed al canal de la interacción
		await interaction.channel.send({ embeds: [embed] });
	},
};