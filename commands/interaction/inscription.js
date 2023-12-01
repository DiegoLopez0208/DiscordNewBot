import pkg from 'discord.js';
const { SlashCommandBuilder, MessageEmbed } = pkg;
//import axios from 'axios';

export const data = new SlashCommandBuilder()
  .setName('inscription')
  .setDescription('XD')
  .addStringOption(option => option.setName('nombreriot').setDescription('El nombre de tu cuenta Riot'))
  .addStringOption(option => option.setName('tag').setDescription('El tag de tu cuenta Riot'));

export async function execute(interaction) {
  const gameName = interaction.options.getString('nombreriot');
  const tag = interaction.options.getString('tag');


  if (!gameName) {
    return interaction.reply('¡Por favor, menciona a un usuario válido!');
  }
  if (!tag) {
    return interaction.reply('Por favor, ingresa un mensaje para mostrar en el embed.');
  }

  console.log(gameName);
  console.log(tag);
}