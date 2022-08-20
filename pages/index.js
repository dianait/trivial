import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";
import Index from "../components/index";
import { useAuth } from "../utils/auth";

export default function Home() {
  const { user, signIn } = useAuth();
  const router = useRouter();

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
