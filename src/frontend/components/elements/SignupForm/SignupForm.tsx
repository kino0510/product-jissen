"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import Link from "next/link"

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignupForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<RegisterForm>({ mode: "onChange" });

    const onSubmit = (data: RegisterForm) => {
        console.log(data);
    };

    const password = watch("password");

    return (
        <div className="w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e8e8e8] rounded-lg shadow-md p-8">
        <h2 className="text-center text-xl font-bold mb-6 italic">Create Account</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm">
            name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "名前は必須です" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#e8e8e8]"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "有効なメールアドレスを入力してください",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#e8e8e8]"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "パスワードは必須です",
              minLength: { value: 5, message: "パスワードは5文字以上で入力してください" },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#e8e8e8]"
          />
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-1 text-sm">
            Password（確認）
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "パスワード（確認）は必須です",
              validate: (value) => value === password || "パスワードが一致しません",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#e8e8e8]"
          />
          {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-[#5b9bd5] rounded-md hover:bg-[#4a8bc5] transition-colors duration-300"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center text-sm">
          <Link href="/auth/login" className="text-gray-600 hover:underline">
            既に登録済みの方はこちら
          </Link>
        </div>
      </form>
    </div>
    );
}