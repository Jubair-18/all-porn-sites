import "../styles/globals.css";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const ContextProvider = Component.provider || Noop;
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;