import { searchUser } from "../../deps.ts";

// Start at 01 and go to 99 || Every 1000 users an error will be thrown
export async function toAlpha(id: bigint): Promise<any> {
  function letters(original: number) {
    if (original <= 1000) {
      return String("A" + letterTree(original));
    } else if (original <= 2000) {
      return String("B" + letterTree(original - 1000));
    } else if (original <= 3000) {
      return String("C" + letterTree(original - 2000));
    } else if (original <= 4000) {
      return String("D" + letterTree(original - 3000));
    } else if (original <= 5000) {
      return String("E" + letterTree(original - 4000));
    }
  }
  let numeration = await searchUser(id); // Search here
  try {
    numeration = numeration[0];
    return letters(numeration);
  } catch (err) {
    return "This is not a valid user ID!";
  }

  return letters(numeration);
}

function letterTree(numero: number) {
  if (
    numero == 1000 || numero == 2000 || numero == 3000 || numero == 4000 ||
    numero == 5000
  ) {
    return "X-00";
  } else if (numero <= 100) {
    return `A-${alpha(numero)}`;
  } else if (numero <= 200) {
    return `B-${alpha(numero)}`;
  } else if (numero <= 300) {
    return `C-${alpha(numero)}`;
  } else if (numero <= 400) {
    return `D-${alpha(numero)}`;
  } else if (numero <= 500) {
    return `E-${alpha(numero)}`;
  } else if (numero <= 600) {
    return `F-${alpha(numero)}`;
  } else if (numero <= 700) {
    return `G-${alpha(numero)}`;
  } else if (numero <= 800) {
    return `H-${alpha(numero)}`;
  } else if (numero <= 900) {
    return `I-${alpha(numero)}`;
  } else if (numero <= 1000) {
    return `J-${alpha(numero)}`;
  }
}

function alpha(num: number) {
  if (num <= 100) {
    let digits = String(num - 1);
    Number(digits) < 10 ? digits = `0${digits}` : digits;
    return digits;
  } else {
    let digit = Math.floor((num / 100) % 10); // Get the 3rd digit from the right
    let digits = String(num - Number(`${digit}00`));
    Number(digits) < 10 ? digits = `0${digits}` : digits;
    return digits;
  }
}

// console.log(await toAlpha(BigInt("173049944448434176")));
