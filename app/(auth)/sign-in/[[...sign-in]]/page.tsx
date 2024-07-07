import { SignIn } from "@clerk/nextjs";

export default function Page(){
    return(
    <section className="flex flex-col gap-2 justify-center items-center h-dvh">
        <h1 className="text-white text-heading1-bold">Welcome to Threads</h1>
        <p className="text-slate-100 text-heading3-bold">Please sign in to continue.</p>
        <SignIn/>
    </section>
    )
}