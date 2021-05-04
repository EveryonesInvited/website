import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

interface MyAppProps {
  Component: React.FC;
  pageProps: any;
}
const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
