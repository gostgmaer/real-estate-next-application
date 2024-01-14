import { AppProvider } from "@/context/globalContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        enableSystem={true}
        enableColorScheme={true}
        defaultTheme="light"
        attribute="class"
      >
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
