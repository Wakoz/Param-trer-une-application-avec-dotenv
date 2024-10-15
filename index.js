import "dotenv/config";

const name = process.env.DB_USER;
const city = process.env.DB_CITY;
const language = process.env.DB_LANGUAGE;
console.log(name)
const say =`I am ${name}, wilder in ${city}, and I love ${language}`;
console.log(say);
