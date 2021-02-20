import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import {Navbar} from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        
      <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
