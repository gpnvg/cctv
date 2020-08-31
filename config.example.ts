export const cfg = {
  bot: {
    token: "SUPERCOOLSECRET",
    alphanumeric: false, // False for roman numerals (I, II, etc.,), True for alphanumeric (AA-00, AA-01, etc.,)
    literals: true, // The cool roman numerals
    prefix: "~",
  },
  embed: {
    color: 8611293, // Decimal color code -> http://cdn.html-color.org/
    footer: "This does nothing as the moment ...",
  },
  database: {
    username: "clint",
    password: "thighs",
    database: "eastwood",
    hostname: "america.number.one",
    port: 5432,
  },
  admin: {
    owners: [BigInt(ADD YOUR ID)],
    logChannel: BigInt(THIS DOES NOTHING AT THE MOMENT),
    adminRoles: ["INSERT ROLE ID HERE"],
  },
};
