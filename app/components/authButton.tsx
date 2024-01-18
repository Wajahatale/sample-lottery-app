import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import googleLogo from "@/public/google.png";

export function GoogleSignInButton() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button onClick={handleClick}>
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span>Continue with Google</span>
    </button>
  );
}

export function GoogleSignOutButton() {
  const handleClick = () => {
    signOut();
  };

  return (
    <button onClick={handleClick}>
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span>Logout</span>
    </button>
  );
}
