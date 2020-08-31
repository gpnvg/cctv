import { searchUser, cfg } from "../../deps.ts";

function digitConvert(original: number): string {
  // I did not write this function, it was taken from : JoshTronic
  if (original < 1 || original > 3999) {
    throw new Error("Error: Input integer limited to 1 through 3,999");
  }

  const literals = [
    ["𝐈", "𝐈𝐈", "𝐈𝐈𝐈", "𝐈𝐕", "𝐕", "𝐕𝐈", "𝐕𝐈𝐈", "𝐕𝐈𝐈𝐈", "𝐈𝐗"], // 1-9
    ["𝐗", "𝐗𝐗", "𝐗𝐗𝐗", "𝐗𝐋", "𝐋", "𝐋𝐗", "𝐋𝐗𝐗", "𝐋𝐗𝐗𝐗", "𝐗𝐂"], // 10-90
    ["𝐂", "𝐂𝐂", "𝐂𝐂𝐂", "𝐂𝐃", "𝐃", "𝐃𝐂", "𝐃𝐂𝐂", "𝐃𝐂𝐂𝐂", "𝐂𝐌"], // 100-900
    ["𝐌", "𝐌𝐌", "𝐌𝐌𝐌"], // 1000-3000
  ];

  const numerals = [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // 1-9
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // 10-90
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // 100-900
    ["M", "MM", "MMM"], // 1000-3000
  ];

  const digits = Math.round(original).toString().split("");
  let position = (digits.length - 1);

  return digits.reduce((roman, digit) => {
    if (digit !== "0") {
      cfg.bot.literals == true
        ? roman += literals[position][parseInt(digit) - 1]
        : roman += numerals[position][parseInt(digit) - 1];
    }

    position -= 1;

    return roman;
  }, "");
}

export async function getRomanticized(id: bigint): Promise<string> {
  let num = await searchUser(id);
  try {
    num = num[0];
    return digitConvert(num);
  } catch (err) {
    return "This is not a valid user ID!";
  }
}

// console.log(await getRomanticized(BigInt("730205847029786203")));
