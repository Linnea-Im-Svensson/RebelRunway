/* eslint-disable @typescript-eslint/no-floating-promises */
import { signIn } from "next-auth/react";

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <a
        href="api/auth/signin"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Du måste vara inloggad för att se den här sidan
      </a>
    </>
  );
}
