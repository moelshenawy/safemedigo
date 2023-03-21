import { appContext } from "@/context/store";
import "@/styles/globals.scss";
// import NoSSRWrapper from "../components/NoSSRWrapper";
import NoSsr from "@mui/base/NoSsr";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  // const [name, setName] = useState("second");

  return (
    <NoSsr>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NoSsr>
  );
}
