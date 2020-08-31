import {
  cfg,
  pushUser,
  toAlpha,
  getRomanticized,
  sendMessage,
  createEmbed,
  changeName,
} from "../../../deps.ts";

export async function fRegister(message: any) {
  let roles = message.guild().members.get(message.author.id).roles;
  if (roles.includes(cfg.admin.adminRoles[0])) {
    let name: string;
    try {
      let user = message.mentions()[0].user;

      cfg.bot.alphanumeric == true
        ? name = await toAlpha(BigInt(user.id))
        : name = await getRomanticized(BigInt(user.id));

      let embed = createEmbed(
        String(
          `${await pushUser(
            user.username,
            user.discriminator,
            BigInt(user.id),
          )} as: **${name}**`,
        ),
      );

      changeName(name, message.guildID, user.id);
      sendMessage(message.channel, { embed });
    } catch (err) {
      let embed = createEmbed(
        "You have do mention a user ... thats literally the point.",
      );
      sendMessage(message.channel, { embed });
    }
  } else {
    let embed = createEmbed(
      "You are not an admin, do not try and force register users.",
    );
    sendMessage(message.channel, { embed });
  }
}
