import React from 'react'
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import Link from 'next/link';
import { Typography, AppBar, Container } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { HiArrowSmRight } from 'react-icons/hi'
import { FiChevronLeft } from 'react-icons/fi'

const Search = () => {
  const { logo, NavSearch, en, arrowDown, user, search, notifications, notificationsActive, burger } = imgs;


  const mostSearches = [
    {
      title: 'Treatment', menuNames: [
        { name: "Treatment Name", link: "/" },
        { name: "Treatment Name", link: "/" },
        { name: "Treatment Name", link: "/" },
        { name: "Treatment Name", link: "/" },
      ],
    },
    {
      title: 'Doctors', menuNames: [
        { name: "Doctor Name", link: "/" },
        { name: "Doctor Name", link: "/" },
        { name: "Doctor Name", link: "/" },
        { name: "Doctor Name", link: "/" },
      ],
    },
    {
      title: 'Clinics & Hospitals', menuNames: [
        { name: "Hospitals Name", link: "/" },
        { name: "Hospitals Name", link: "/" },
        { name: "Hospitals Name", link: "/" },
        { name: "Hospitals Name", link: "/" },
      ],
    },
    {
      title: 'Blogs', menuNames: [
        { name: "Blog title", link: "/" },
        { name: "Blog title", link: "/" },
        { name: "Blog title", link: "/" },
        { name: "Blog title", link: "/" },
      ],
    },
  ]


  return (
    <>
      <AppBar position={'static'}
        sx={{
          background: {
            xs: "transparent",
            sm: "transparent",
            md: "transparent",
            lg: "#00f3bb"
          }
        }}>

        <Container sx={{
          maxWidth: "1239px",

        }} maxWidth={false}>
          <nav id={styles.navbar_search}>
            <div className={styles.logo}>
              <Link href='/'>
                <img src={logo.src} alt="" />
                <Typography variant='h1'>Safemedigo</Typography>
              </Link>
            </div>

            <div className={styles.back_btn}>
              <a href="/" >
                <FiChevronLeft />
              </a>
            </div>

            <div className={styles.input_container}>
              <input type="text" placeholder='Treatment, Doctor, Clinic, Diseases' />
              <Link href={'/'} className={styles.close_icon}>
                <CloseIcon />
              </Link>
            </div>

          </nav>
        </Container>
      </AppBar>

      <div className={styles.search_bg}>
        <Container sx={{
          maxWidth: "1239px",
          padding: {
            xs: '0',
            sm: '0',

          }
        }} maxWidth={false}>
          <div id={styles.search_wrapper}>

            {/* <div className={styles.text_container}>
              <Typography>
                Find <br /> The Right & Safe <br /> Treatment <br /> For You In Turkey
              </Typography>
            </div> */}

            <div className={styles.results_card}>
              <div className={styles.card_header}>
                <Typography>Most Treatment Searched Right Now</Typography>
              </div>
              <div className={styles.card_inner}>
                {mostSearches.map((search, index) =>
                  <>
                    <div className={styles.box} key={index}>
                      <div className={styles.title}>
                        <Typography variant='h4'>{search.title}</Typography>
                      </div>

                      {search.menuNames.map((links, idx) => (
                        <Link href={'/'} key={idx}>

                          <div className={styles.name} key={idx}>
                            <Typography>
                              {links.name}
                            </Typography>
                            <div className={styles.page}>
                              <Typography>
                                Condition
                              </Typography>
                              <div className={styles.icon_container}>
                                <HiArrowSmRight />
                              </div>
                            </div>
                          </div>

                        </Link>

                      ))}
                    </div>


                  </>
                )}
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>

  )
}

export default Search