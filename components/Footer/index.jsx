import { Container } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import imgs from '../../assets/constants/imgs'
import styles from './index.module.scss'
import { Box, Grid, Typography } from '@mui/material';

const Footer = () => {
  const { logoFooter,
    facebook,
    instagram,
    youtube,
    twitter,
    author
  } = imgs

  const socialLinks = [
    { link: '/twitter', img: twitter },
    { link: '/facebook', img: facebook },
    { link: '/instagram', img: instagram },
    { link: '/youtube', img: youtube },
  ]

  const contactLinks = [
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },

  ]
  return (
    <>
      <footer id={styles.footer}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
          <div className={styles.logo_footer}>
            <Link href='/'>
              <img
                src={logoFooter.src}
                alt="Safemedigo"
                width="58.3px"
                height="50.18px"
              />
              <Typography variant='h4' >Safemedigo</Typography>
            </Link>
          </div>

          <section className={styles.info_section}>
            <div className={styles.links_container}>
              <div className={styles.boxes}>
                {contactLinks.map((contactLink, idx) => (
                  <>
                    <div className={styles.box} key={idx}>
                      <div className={styles.box_title}>
                        <Typography variant='h6'>{contactLink.title}</Typography>
                      </div>
                      <div className={styles.box_link}>
                        <ul>
                          <li>
                            <Link href={contactLink.link0}>

                              {contactLink.link0}
                            </Link>
                          </li>
                          <li>
                            <Link href={contactLink.link0}>
                              {contactLink.link1}
                            </Link>
                          </li>
                          <li>
                            <Link href={contactLink.link0}>

                              {contactLink.link2}
                            </Link>

                          </li>
                          <li>
                            <Link href={contactLink.link0}>

                              {contactLink.link3}
                            </Link>

                          </li>
                          <li>
                            <Link href={contactLink.link0}>

                              {contactLink.link4}
                            </Link>

                          </li>
                          <li>
                            <Link href={contactLink.link0}>

                              {contactLink.link5}
                            </Link>

                          </li>
                          <li>
                            <Link href={contactLink.link0}>

                              {contactLink.link6}
                            </Link>

                          </li>
                          <li>
                            <Link href={contactLink.link0}>

                              {contactLink.link7}
                            </Link>

                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className={styles.form_container}>
              <div className={styles.title}>
                <Typography variant='h6'>Subscribe to Our Newsletter</Typography>
              </div>
              <form action="">
                <input type="email" placeholder='Email@test.com' />
                <button type='submit'>Send</button>
              </form>
            </div>
          </section>

          <hr />

          <section className={styles.about_section}>
            <div className={styles.about_us}>
              <Typography variant="h6">
                Medical Travel Specialist <br />
                Certified Online Security
              </Typography>
            </div>

            <div className={styles.social_links}>
              {socialLinks.map((link, idx) => (
                <>
                  <div className={styles.link} key={idx}>
                    <Link href={link.link}>
                      <img
                        src={link.img.src}
                        alt={link.link}
                        width="28.79px"
                        height="23.38px"
                      />
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </section>
        </Container>
      </footer>


      <Grid id={styles.footer_nav}>
        <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Box display='flex' className={styles.patient}>
              <div className={styles.img_container}>
                <img src={author.src} alt="" />
              </div>

              <div className={styles.doc_data}>
                <div className={styles.doc_job}>
                  <Link href='/'>
                    <Typography variant='h6'>Patient Manager</Typography>
                  </Link>

                </div>
                <div className={styles.doc_name}>
                  <Link href='/'>

                    <Typography variant='h6'>name</Typography>
                  </Link>

                </div>
              </div>
            </Box>


            <Box display='flex'
              className={styles.btns_container}>

              <div className={styles.contact}>
                <Link href='/'>
                  <button>Contact us</button>
                </Link>
              </div>

              <div className={styles.quote}>
                <Link href='/'>
                  <button>Get A Quote</button>
                </Link>
              </div>

            </Box>
          </Box>
        </Container>
      </Grid>
    </>

  )
}

export default Footer
