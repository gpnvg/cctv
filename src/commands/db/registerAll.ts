import {
  cfg,
  pushUser,
  toAlpha,
  getRomanticized,
  sendMessage,
  createEmbed,
  changeName,
  fetchMembers
} from "../../../deps.ts";

export async function regAll(message: any) {
  let roles = message.guild().members.get(message.author.id).roles;
  if (roles.includes(cfg.admin.adminRoles[0])) {
    let members = await fetchMembers(message.guild());
    console.log(await members);
  } else {
    let embed = createEmbed(
      "You are not an admin, do not try and force register users.",
    );
    sendMessage(message.channel, { embed });
  }
}
