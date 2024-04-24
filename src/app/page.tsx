
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <h1>login form</h1>
      <div>
        <Link href="/login"><Button variant='outline'>login</Button></Link>
        <Link href="/signup"><Button variant='outline'>sign up</Button></Link>


      </div>
    </main>
  );
}
