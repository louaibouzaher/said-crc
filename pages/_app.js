import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="layout" style={{ padding: 0, margin: 0 }}>
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
