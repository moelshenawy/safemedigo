
import Navbar from "../Navbar";
import Footer from "../Footer";
import PageHeader from '../PageHeader/';
import { useRouter } from "next/router";

export default function Layout({ children }) {

  // Get routes to make dynamic data
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {pathname !== '/search' ?
        <>
          <Navbar />
          <PageHeader />
          <main>{children}</main>
          <Footer />
        </> : <>
          <main>
            {children}
          </main>
        </>

      }
    </>
  )
}