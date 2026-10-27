import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes";
import { Provider } from "jotai"
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
  <SessionProvider session={session}>
    <Provider>
      <ThemeProvider attribute="class">
        <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Provider>
  </SessionProvider>
  )
}