import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import imgs from "../../assets/constants/imgs";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import styles from "./index.module.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { BiChevronDown, } from 'react-icons/bi'
import { HiArrowSmRight } from 'react-icons/hi'
import { useRouter } from "next/router";


import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


// Hide navbar on scroll (to bottom)
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}




const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLinks, setShowMenuLinks] = useState(false);
  const menuLniks = [
    {
      category: "Procedures & Symptoms",
      cateLink: '/procedures&symptoms',
      links: [
        {
          title: "Patients Reviews",
          link: "/Reviews",
        },
        {
          title: "Patients Stories",
          link: "/stories",
        },

        {
          title: "Before & After",
          link: "/before&after",
        },
        {
          title: "Doctor Q&A",
          link: "q&a",
        },
        {
          title: "Prices",
          link: "/prices",
        },

        {
          title: "Blogs",
          link: "/blogs",
        },

      ],
    },
    {
      category: "About Safemedigo",
      links: [
        {
          title: "Safety Standards",
          link: "/safety-standards",
        },
        {
          title: "How It Works",
          link: "/how-it-works",

        },
        {
          title: "About Us",
          link: "/about-us",
        },
        {

          title: "Contact Us",
          link: "/contact-us",

        },
      ],
    },


  ];

  const navbarLinks = [
    { title: "Procedures & Symptoms", link: "/procedures&symptoms", menuLink: null },
    {
      title: "Reviews & Photos",
      link: "/",
      menuLink: [
        { title: "Patients Reviews", link: "/reviews" },
        { title: "Before & After", link: "/before-after" },
        { title: "Patients Stories", link: "/stories" },
        { title: "Doctor Q&A", link: "/Q&A" },
        { title: "Ask A Doctor", link: "/Q&A" },
        { title: "Start Your Review", link: "/reviews" },
      ],
    },
    { title: "Prices", link: "/", menuLink: null },
    { title: "Blogs", link: "/blogs", menuLink: null },
    {
      title: "About Us ",
      menuLink: [
        { title: "Safety Standards", link: "/safety-standards" },
        { title: "How It Works", link: "/how-it-works" },
        { title: "About Us", link: "/about-us" },
        { title: "Contact Us", link: "/contact-us" },
      ],
    },
  ];

  const { logo, NavSearch, en, arrowDown, user, search, notificationsActive, burger } = imgs;


  // Toggle outside to close menu
  const menuRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [showMenu]);

  // Get routes to make dynamic data
  const router = useRouter();
  const { pathname } = router;




  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>


        <AppBar style={{ background: 'transparent' }} >
          <div className={styles.navbar}>
            <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
              <Grid
                container
                alignItems="center"
                className={styles.grid__container}
              >
                <Grid item xs={2} sx={2}>
                  <Link href="/" className={styles.navbar__logo}>
                    <Box display="flex" alignItems="center">
                      <img
                        src={logo.src}
                        alt="Picture of the author"
                        width="51.34px"
                        height="45px"
                      />
                      <h1>Safemedigo</h1>
                    </Box>
                  </Link>
                </Grid>

                <Grid item xs={10} className={styles.navbar__links}>
                  <Box>
                    <Box className={styles.links__container}>
                      <div className={styles.links}>
                        <ul>
                          {navbarLinks.map((link, index) => (
                            // ${styles.active}
                            <li
                              key={index}
                              className={`${styles.link__item} ${styles.active}`}
                            >
                              <Link href={`${link.link}`}>{link.title}</Link>

                              {link.menuLink != null &&
                                <div className={styles.menuLinks__container}>
                                  <ul
                                  >
                                    {link.menuLink.map((links, index) => (
                                      <li
                                        key={index}>
                                        <Link href={`${links.link}`}>
                                          {links.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              }



                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.auth_methods}>
                        <div className={styles.search_btn}>
                          <Link href="/search">
                            <div className={styles.icon_container}>
                              <img
                                src={NavSearch.src}
                                alt="Picture of the author"
                                width="18.89px"
                                height="19px"
                              />
                            </div>
                            <button>Search</button>
                          </Link>
                        </div>

                        <div className={styles.lang}>
                          <div className={styles.img_container}>
                            <img
                              src={en.src}
                              alt="Picture of the author"
                              width="20.7px"
                              height="12.88px"
                            />
                          </div>

                          <div className={styles.lang_type}>
                            <span>EN</span>
                          </div>

                          <div className={styles.icon_container}>
                            <img
                              src={arrowDown.src}
                              alt="Picture of the author"
                              width="14.84px"
                              height="8.49px"
                            />
                          </div>
                        </div>



                        <div className={styles.login_btn}>
                          <Link href="/login">
                            <div className={styles.icon_container}>
                              <img
                                src={user.src}
                                alt="Picture of the author"
                                width="18.13px"
                                height="19.5px"
                              />
                            </div>
                            <button>Sign In</button>
                          </Link>
                        </div>
                      </div>
                    </Box>
                  </Box>
                </Grid>

                <div className={styles.icons_container} ref={menuRef}>
                  <Link href={'/search'} className={styles.search} >
                    <div className={styles.icon_container}>
                      <img src={search.src} alt="" />
                    </div>
                  </Link>

                  <div className={styles.notifications} >
                    <div className={styles.icon_container}>
                      <img src={notificationsActive.src} alt="" />
                      {/* <div className={styles.notify} /> */}
                    </div>
                  </div>

                  <div className={styles.menu} onClick={() => setShowMenu(true)}>
                    <div className={styles.icon_container}>
                      <img src={burger.src} alt="" />
                    </div>
                  </div>


                  {showMenu && (
                    <motion.div
                      animate={{ x: [300, 0] }}
                      transition={{ duration: 0.85, ease: "easeOut" }}
                      className={styles.side_bar}
                    >
                      <div className={styles.side_bar_container}>
                        <div
                          className={styles.close}
                          onClick={() => setShowMenu(false)}
                        >
                          <CloseIcon />
                        </div>

                        <div className={styles.links_container}>

                          <Link onClick={() => setShowMenu(false)} className="link" href="/login">
                            <div className={styles.icon_container}>
                              <PersonRoundedIcon />
                            </div>
                            <div className={styles.btn_container}>
                              <Typography>Sign In</Typography>
                            </div>
                          </Link>

                          <div className={styles.categories_container}>
                            <div className={styles.category}>
                              <div className={styles.title}>
                                <Typography variant="h4">
                                  <Link onClick={() => setShowMenu(false)} href={menuLniks[0].cateLink}>
                                    {menuLniks[0].category}
                                  </Link>
                                </Typography>
                              </div>

                              <div className={styles.category_links}>
                                {menuLniks[0].links.map((link, idx) => (
                                  <>
                                    <Link
                                      className={window.location.pathname === link.link && styles.active}
                                      key={idx}
                                      href={link.link}
                                      onClick={() => setShowMenu(false)}
                                    >
                                      {link.title}
                                    </Link>
                                  </>
                                ))}

                                <div className={styles.special_links}>
                                  <a href="/reveiw">Start Your Review
                                    <HiArrowSmRight />
                                  </a>
                                  <a href="q&a">Ask A Doctor
                                    <HiArrowSmRight />
                                  </a>
                                </div>

                                <Box className={styles.lang} display='flex'>
                                  <div className={styles.img_container}>
                                    <img
                                      src={en.src}
                                      alt="Picture of the author"
                                      width="20.7px"
                                      height="12.88px"
                                    />
                                  </div>
                                  <div className={styles.lang_type}>
                                    <span>EN</span>
                                  </div>

                                  <div className={styles.icon_container}>
                                    <BiChevronDown />
                                  </div>
                                </Box>


                              </div>

                              <div className={`${styles.title}`} onClick={() => setShowMenuLinks((prev) => !prev)}>
                                <Typography variant="h4">
                                  {menuLniks[1].category}
                                </Typography>
                                <div className={`${styles.icon_container} ${showMenuLinks && styles.active}`} >
                                  <ExpandMoreOutlinedIcon color="red" />
                                </div>
                              </div>

                              {showMenuLinks &&
                                <motion.div
                                  animate={{
                                    y: [-40, 0],
                                    opacity: 1
                                  }}
                                  transition={{ duration: 0.80, ease: "easeOut" }}


                                  initial={{ opacity: 0 }}

                                  className={styles.category_links}>
                                  {menuLniks[1].links.map((link, idx) => (
                                    <>
                                      <Link onClick={() => setShowMenu(false)} key={idx} className={pathname === link.link && styles.active}
                                        href={link.link}>
                                        {link.title}
                                      </Link >
                                    </>
                                  ))}
                                </motion.div>

                              }
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </div>
              </Grid>
            </Container>
          </div>
        </AppBar>

      </HideOnScroll>
      <Toolbar />





      {pathname !== '/' &&
        <nav id={styles.sec_nav}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            {pathname === ('/blogs') | pathname.includes('/blogs/page') ?
              <h2>Home / All Blogs</h2> : <></>
            }
            {pathname.includes('/blogs/hair') &&
              <h2>Home / Blog / I Was Suffuring From Gas Issues For 3 Years!</h2>
            }

            {pathname === '/how-it-works' &&
              <h2>Home / How It Works</h2>
            }

            {pathname === '/about-us' &&
              <h2>Home / About Us</h2>
            }

            {pathname === '/safety-standards' &&
              <h2>Home / Safety Standards</h2>
            }

            {pathname === '/procedures&symptoms' &&
              <h2>Home / Procedures & Symptoms</h2>
            }
            {pathname.includes('/procedures&symptoms/') &&
              <h2>Home / Hair Transplantation</h2>
            }
          </Container>
        </nav>
      }
    </>
  );
};

export default Navbar;
