// import "@/styles/globals.css";
import "../styles/globals.css";
import "../styles/slidecar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel"
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
