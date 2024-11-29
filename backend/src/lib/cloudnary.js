import {v2 as cloudnary} from "cloudinary"

import {config} from 'dotenv'

config()

cloudnary.config({
    cloud_name:process.env.CLOUDEINARY_CLOUD_NAM,
    api_key:process.env.CLOUDEINARY_API_KEY,
    api_secret:process.env.CLOUDEINARY_API_SECRET,
});

export default cloudnary;
