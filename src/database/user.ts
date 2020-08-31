import { Client } from "https://deno.land/x/postgres/mod.ts";
import { cfg } from "../../deps.ts";

const client = new Client({
  user: cfg.database.username,
  password: cfg.database.password,
  database: cfg.database.database,
  hostname: cfg.database.hostname,
  port: cfg.database.port,
});

export async function searchUser(id: bigint): Promise<any> {
  try {
    await client.connect().then(() =>
      console.log("SEARCH | A connection has been opened to the database!")
    );
    try {
      let user = await client.query(`
        SELECT * FROM USERS WHERE ID = ${id};
      `);
      client.end().then(() =>
        console.log("SEARCH | The connection has been closed!")
      );
      try {
        return await user.rows[0]; // This will be undefined if the user is not registered
      } catch (err) {
        console.log(err);
        return null;
      }
    } catch (err) {
      await client.end().then(() =>
        console.log(
          `SEARCH | The connection has been closed, but an error has occurred. That error is: \n ${err}`,
        )
      );
    }
  } catch (err) {
    console.log(
      `SEARCH | An error has occurred connection to the database, that error is: \n ${err}`,
    );
  }
}

export async function pushUser(
  name: string,
  discrim: number,
  id: bigint,
): Promise<string> {
  try {
    if (await searchUser(id) == undefined) {
      try {
        await client.connect();
        await client.query(`
          INSERT INTO USERS (NAME, DISCRIMINATOR, ID) VALUES ('${name}', ${discrim}, ${id});
        `).then(async () => await client.end());
        return `${name}#${discrim} has been registered`;
      } catch (err) {
        return `There was an issue registering this ${name}#${discrim}!`;
      }
    } else {
      return `${name}#${discrim} is already registered`;
    }
  } catch (err) {
    console.log(err);
    return "Its fucked";
  }
}

// console.log(await searchUser(BigInt("1892981892")));
// console.log(await pushUser("John", 3333, BigInt("730205847029786203")));
