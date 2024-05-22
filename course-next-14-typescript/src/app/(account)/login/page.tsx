"use client";

import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleClick}>Regresar al home</button>
    </div>
  );
}

export default LoginPage;
