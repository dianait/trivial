import { useRouter } from "next/router";
import { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Index from "../components/index";
import { useAuth } from "../utils/auth";

export default function Home() {
  const { user, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/trivial");
    }
  });

  const handleSignIn = () => {
    signIn();
    router.push("/trivial");
  };

  return (
    <>
      <AppLayout>
        <Index handle={handleSignIn} />
      </AppLayout>
    </>
  );
}
