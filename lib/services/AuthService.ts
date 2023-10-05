import axios from "axios";
import { apiUrl } from "../env";

interface LoginCredentials {
  email: string;
  password: string;
}

const Auth = {
  login: async function ({ email, password }: LoginCredentials) {
    const url = `${apiUrl}/login`;
    try {
      const res = await axios({
        url,
        method: "post",
        headers: {
          Accept: "application/json",
        },
        data: { email, password },
      });

      return { token: res.data.token };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  },
};

export default Auth;
