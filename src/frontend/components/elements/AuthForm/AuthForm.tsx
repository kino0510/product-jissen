"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import Link from "next/link";

interface LoginForm {
    email: string;
    password: string;
}

export default function AuthForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({ mode: "onChange" });

    const onSubmit = (data: LoginForm) => {
        console.log(data);
    };

    return (
        <div className="w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e8e8e8] rounded-lg shadow-md p-8">
        <h2 className="text-center text-xl font-bold mb-6 italic">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Emailは必須です" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#e8e8e8]"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "パスワードは必須です",
              minLength: { value: 5, message: "5文字以上で入力してください" },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#e8e8e8]"
          />
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-[#5b9bd5] rounded-md hover:bg-[#4a8bc5] transition-colors duration-300"
        >
          Login
        </button>

        <div className="mt-4 text-center text-sm">
          <Link href="/auth/signup" className="text-gray-600 hover:underline">
            アカウントをお持ちでない方はこちら
          </Link>
        </div>
      </form>
    </div>
    );
}