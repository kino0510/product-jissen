// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start bg-[#1e1333] p-24">
      <div className="flex flex-col space-y-4">
        <h1 className="text-7xl font-bold text-white">
          Techno_
          <br />
          cura
        </h1>
        <p className="text-xl text-white">パーソナライズ可能な技術ログキュレーションapp</p>
      </div>

      <div className="mt-16 flex space-x-6">
        <Link href="/auth/signup">
          <Button
            // variant="outline"
            className="bg-gray-200 text-black hover:bg-gray-300 hover:text-black rounded-full px-8 py-2 text-lg font-medium">
            Create Account
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button
            // variant="outline"
            className="bg-gray-200 text-black hover:bg-gray-300 hover:text-black rounded-full px-8 py-2 text-lg font-medium"
          >
            Login
          </Button>
        </Link>
      </div>
    </main>
  );

  
}
