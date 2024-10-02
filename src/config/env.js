import dotenv from "dotenv"
// require('dotenv').config();
dotenv.config()
import env from "env-var"

const { get } = env
// const {get}=require('env-var');

export const envs={
    PORT: get("PORT").required().asPortNumber(),
    PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
}

// module.exports={
//     envs
// }