import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Arima_Madurai } from "@next/font/google";

const arima_madurai = Arima_Madurai({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-arima-madurai",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${arima_madurai.variable} font-primary`}>
      <Component {...pageProps} />;
    </div>
  );
}
