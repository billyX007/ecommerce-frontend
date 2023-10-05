"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Auth from "@/lib/services/AuthService";
import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/helper";
import { Button } from "@/app/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export default function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const handleCredChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setError({ email: "", password: "" });
    setData((p) => ({ ...p, [name]: value }));
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { token, error } = await Auth.login(data);
    if (token) {
      setCookie("auth-token", token, 30);
      push("/");
      setLoading(false);
    }
    if (error) {
      setError(error);
      setLoading(false);
    }
  };
  return (
    <form className="mt-6" onSubmit={handleLogin}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Sign in</CardTitle>
        <CardDescription className="text-center">
          Enter your email and password to login
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleCredChange}
            error={error.email}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleCredChange}
            error={error.password}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button
          className={`w-full ${loading ? "opacity-60" : ""}`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
        <p className="mt-2 text-xs text-center text-gray-700">
          Forgot Password?{" "}
          <span className=" text-blue-600 hover:underline">Reset Password</span>
        </p>
      </CardFooter>
    </form>
  );
}
