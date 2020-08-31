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
  cfg.bot.alphanumeric == true
    ? name = await toAlpha(BigInt(message.author.id))
    : name = await getRomanticized(BigInt(message.author.id));

  let embed = createEmbed(
    String(
      `${await pushUser(
        message.author.username,
        message.author.discriminator,
        BigInt(message.author.id),
      )} as: **${name}**`,
    ),
  );
  changeName(name, message.guildID, message.author.id);
  sendMessage(message.channel, { embed });
}
