import {
  cfg,
  pushUser,
  toAlpha,
  getRomanticized,
  sendMessage,
  createEmbed,
  changeName,
} from "../../deps.ts";

export async function join(guild: any, member: any): Promise<any> {
  let user = member.user;
  let name: string;

  console.log(
    String(
      `${await pushUser(
        user.username,
        user.discriminator,
        BigInt(user.id),
      )} as: **${
        cfg.bot.alphanumeric == true
          ? name = await toAlpha(BigInt(user.id))
          : name = await getRomanticized(BigInt(user.id))
      }**`,
    ),
  );
  changeName(name, member.guildID, user.id);
}
