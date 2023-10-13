import axios from "../axios";

interface LoginCredentials {
  email: string;
  password: string;
}

const Auth = {
  login: async function ({ email, password }: LoginCredentials) {
    const data = { email, password };
    try {
      const res = await axios.post("/login", data);
      return { token: res.data.token };
    } catch (error: any) {
      return { error: error.response.data.error };
    }
  },
};

export default Auth;
