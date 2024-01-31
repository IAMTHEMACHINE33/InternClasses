# Task

Currently we are storing our data to the file or in database.
This behaviour of storing data to file or database should be `env` driven.
`env` driven means you should have some key as `STORE_TO` in your `.env` file and that key might have two possible values as `FS` or `DB`.
Make use of this key to drive all operations in your application. Operations means `CREATE`, `READ`, `UPDATE`, `DELETE`.

---

# References

- [What is .env ? How to Set up and run a .env file in Node?](https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj)
- [How to read environment variables from Node.js](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)
- [How to Use Node Environment Variables with a DotEnv File for Node.js and npm](https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/)
