import { selfApiUrl } from "../env";

export async function getToken() {
  const res = await fetch(`${selfApiUrl}/token`);
  return await res.json();
}
