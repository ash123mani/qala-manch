import "@/styles/globals.css";
import "@/styles/_style.module.scss";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { wrapper } from "@/store";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
