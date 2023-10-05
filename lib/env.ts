const env = process.env.NODE_ENV;

export const apiUrl =
  env === "development" ? process.env.LOCAL_URL : process.env.PROD_URL;

export const selfApiUrl = process.env.SELF_API;
