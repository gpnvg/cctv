import {
  cfg,
  pushUser,
  toAlpha,
  getRomanticized,
  sendMessage,
  createEmbed,
  changeName,
  cache
} from "../../../deps.ts";

export async function regAll(message: any) {
  let roles = message.guild().members.get(message.author.id).roles;
  if (roles.includes(cfg.admin.adminRoles[0])) {
    try {
      let members = message.guild().members;
      members.forEach((value: boolean, key: string) => {
        console.log(key);
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    let embed = createEmbed(
      "You are not an admin, do not try and force register users.",
    );
    sendMessage(message.channel, { embed });
  }
}
