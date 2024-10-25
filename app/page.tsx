import { isAuthenticated } from "@/lib/isAuthenticated";
import SignOutButton from "@/components/ui/signOutButton";

export default async function Home() {
  
  const isAuth = await isAuthenticated();
  console.log(isAuth);

  return (
    <div>
      <h1>Home</h1>
      <SignOutButton />
    </div>
  );
}
