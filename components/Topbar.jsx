"use client"
import Link from "next/link";
import Image from "next/image";
import { dark } from "@clerk/themes";
import '../app/globals.css'
import { SignedIn, SignOutButton,OrganizationSwitcher,UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
function handleButton() {
    console.log("briiiiiii");
    redirect ("/Add")
}
function Topbar () {
    return (
        <>
        <nav className="topbar bg-stone-900">
            <Link href="/" className="flex items-center gap-4">
                <p className="font-black text-orange-800 text-3xl">Blogg.</p>
            </Link>

            <div className='flex items-center gap-1'>
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in"/>
                    <Link showAnchorIcon className="mx-2 text-xl text-center text-orange-800 font-black" href="/Add" >New</Link>
                </SignedIn>
            </div>

        </nav>
        </>
    )
}

export default Topbar;