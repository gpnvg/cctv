import { editMember, EditMemberOptions } from "../../deps.ts";

export function changeName(name: string, guildID: string, id: string) {
  const options: EditMemberOptions = {
    nick: `${name}`,
  };
  try {
    editMember(String(guildID), String(id), options);
  } catch (err) {
    console.log(err);
  }
}
