import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex gap-5">
        <div>
        <h1 className="font-black text-3xl text-orange-950 ">Welcome to</h1>
        <h1 className="font-black text-9xl text-orange-800 ">Blogg.</h1>
        </div>
        <div>
        <SignUp />
        </div>
        
    </div>
  )
}