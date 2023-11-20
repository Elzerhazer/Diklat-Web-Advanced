import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS 
    theme={{
      colorScheme: 'light',}}
      >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
