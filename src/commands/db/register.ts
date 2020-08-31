import {
  cfg,
  pushUser,
  toAlpha,
  getRomanticized,
  sendMessage,
  createEmbed,
  changeName,
} from "../../../deps.ts";

export async function register(message: any): Promise<any> {
  let name: string;

  let bed = await pushUser(
    message.author.username,
    message.author.discriminator,
    BigInt(message.author.id),
  );

  cfg.bot.alphanumeric == true
    ? name = await toAlpha(BigInt(message.author.id))
    : name = await getRomanticized(BigInt(message.author.id));

  try {
    let embed = createEmbed(`${bed} as: **${name}**`);
    changeName(name, message.guildID, message.author.id);
    sendMessage(message.channel, { embed });
  } catch (err) {
    let embed = createEmbed(`You have a higher role than the bot.`);
    sendMessage(message.channel, { embed });
  }
}
