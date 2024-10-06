import { AppProps } from "next/app";

import "../assets/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
