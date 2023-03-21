import React from "react";
import styles from "./index.module.scss";
import imgs from "../../assets/constants/imgs";
import { Container, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";

const PageHeader = () => {
  const router = useRouter();
  const { pathname } = router;

  const { design, designMobile, author } = imgs;
  return (

    <>
      {pathname !== '/' &&
        <Box sx={
          pathname.includes('/blogs/') && {
            display: {
              xs: "none",
              sm: "none",
              lg: "block"
            }
          }} id={styles.blogs} >
          <div className={styles.header_container}>

            <Container
              className={styles.sec_container}
              sx={{ maxWidth: "1239px" }}
              maxWidth={false}
            >
              <div className={styles.text_container}>
                <div className={styles.guide}>
                  {pathname === ('/') &&
                    <Typography variant='h4'>Home</Typography>
                  }

                  {pathname.includes('/blogs/') &&
                    <Typography variant='h4' >
                      acibadem Hospital (blog category)
                    </Typography>
                  }

                </div>

                <div className={styles.title}>
                  {pathname === ('/blogs') | pathname.includes('/blogs/page') ?
                    <>
                      <Typography variant='h4' >
                        Safemedigo Blogs
                      </Typography>
                      <Typography variant='h2'>
                        All Of The Latest Medical Travel And Healthcare Developments
                        In One Place.
                      </Typography>
                    </>
                    : <></>}

                  {pathname === '/how-it-works' &&
                    <>
                      <Typography variant='h4'>How It Works</Typography>
                      <Typography variant='h2'>Get a breakdown of how we go through the complex process of matching the patient with the best suited healthcare facility for them.</Typography>
                    </>
                  }

                  {pathname === '/about-us' &&
                    <>
                      <Typography variant='h4'>About Us</Typography>
                      <Typography variant='h2'>We are your preferred healthcare partner. Get one on one assistance before, during and after your medical journey. Sourcing information on medical care has been simplified to give you a better experience.</Typography>
                    </>
                  }

                  {pathname === '/safety-standards' &&
                    <>
                      <Typography variant='h4'>Safety Standards</Typography>
                      <Typography variant='h2'>We strictly work with healthcare facilities which are fully compliant with the international health providers standards. A step by step vetting process is conducted every year by our experienced team.</Typography>
                    </>
                  }

                  {pathname === '/procedures&symptoms' &&
                    <>
                      <Typography variant='h2'>All Medical Department</Typography>
                      <Typography variant='h4'>Procedures & Symptoms</Typography>
                    </>
                  }


                  {pathname.includes('/procedures&symptoms/') &&
                    <>
                      <Typography variant='h2'>TREATMENT GUIDE</Typography>
                      <Typography variant='h4'>Hair Transplantation</Typography>
                    </>
                  }

                  {pathname.includes('/blogs/hair') &&
                    <Typography variant='h4' >
                      I Was Suffuring From Gas Issues For 3 Years! (Blog Title)
                    </Typography>
                  }

                </div>




                {pathname.includes('/blogs/hair') &&

                  <Box display='flex' className={styles.review_by}>
                    <div className={styles.author_img}>
                      <img src={author.src} alt="" />
                    </div>
                    <div className={styles.info}>
                      <p>Andrew Mackay, Medical Content Writer</p>
                      <p className={styles.date}> Posted Apr 28, 2021,</p>
                    </div>
                  </Box>
                }

              </div>

              <div className={styles.img_container}>
                <div className={styles.desk_top}>
                  <img src={design.src} alt="" />
                </div>

                <div className={styles.mobile}>
                  <img src={designMobile.src} alt="" />
                </div>
              </div>
            </Container>
          </div>
        </Box >
      }

    </>

  );
};

export default PageHeader;
