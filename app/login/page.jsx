"use client";
import { useSession } from "next-auth/react";
import {
  GoogleSignInButton,
  GoogleSignOutButton,
} from "../components/authButton";

const Login = () => {
  const session = useSession();
  console.log(session);
  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "authenticated") {
    return (
      <p>
        <GoogleSignOutButton />
      </p>
    );
  }
  // if (session.status === "unauthenticated") {
  //   return <p>user unauthenticated</p>;
  // }
  return (
    <div>
      <GoogleSignInButton />
    </div>
  );
};

export default Login;
