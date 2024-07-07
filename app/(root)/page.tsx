import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div>
        <UserButton afterSwitchSessionUrl="/"/>
      </div>
    </main>
  );
}
