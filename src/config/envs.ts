import 'dotenv/config';
import {get} from 'env-var';


export const envs={
    //Take the values from .env file
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').required().asString(),
    //MONGO_URI: get('MONGO_URI').required().asString(),
    //MONGO_DB: get('MONGO_DB').required().asString()
}