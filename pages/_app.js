import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import SingleColumn from "../components/SingleColumn";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  single_column: SingleColumn,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
