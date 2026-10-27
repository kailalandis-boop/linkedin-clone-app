import "../app/globals.css";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes";
import { JotaiProvider } from "jotai"

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
  <SessionProvider session={session}>
    <JotaiProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />;
      </ThemeProvider>
    </JotaiProvider>
  </SessionProvider>
  )
}