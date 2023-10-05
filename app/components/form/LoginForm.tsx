"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Auth from "@/lib/services/AuthService";
import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/helper";

export default function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const { push } = useRouter();

  const handleCredChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setError({ email: "", password: "" });
    setData((p) => ({ ...p, [name]: value }));
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { token, error } = await Auth.login(data);
    if (token) {
      setCookie("auth-token", token, 30);
      push("/");
    }
    if (error) {
      setError(error);
    }
  };
  return (
    <form className="mt-6" onSubmit={handleLogin}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleCredChange}
        className={error.email ? "border-red-500" : ""}
        error={error.email}
      />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleCredChange}
        className={error.password ? "border-red-500" : ""}
        error={error.password}
      />

      <Button type="submit" variant="default">
        Submit
      </Button>
    </form>
  );
}
