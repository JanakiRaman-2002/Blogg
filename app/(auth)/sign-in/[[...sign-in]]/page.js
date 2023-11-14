import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="flex gap-5">
        <div className="items-center justify-center">
        <h1 className="font-black text-3xl text-orange-950 ">Sign-in to</h1>
        <h1 className="font-black text-9xl text-orange-800 ">Blogg.</h1>
        </div>
        <div>
        <SignIn />
        </div>
        
    </div>
    
  );
}