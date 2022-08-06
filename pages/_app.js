import "../styles/globals.css";
import { supabase } from "../utils/supabase";
import { AuthProvider } from "../utils/auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabase={supabase}>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
