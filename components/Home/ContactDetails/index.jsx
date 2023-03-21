import React from 'react'
import styles from './index.module.scss'
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaShieldAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { consts } from 'react-elastic-carousel';
import { Container, Typography, } from '@mui/material';
import Link from 'next/link';
import { Phone } from '../../../assets/svgs/HoverIcons'
const ContactDetails = () => {
  const { majd } = imgs;

  return (
    <section id={styles.contact_details}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false}>
        <div className={styles.section_container}>
          <div className={styles.talk}>
            <div className={styles.title}>
              <Typography variant='h3'>
                Do You Still Have Question? Please Contact Us</Typography >
            </div>
            <div className={styles.sec_title}>
              <Link href='/contact-us'>Let’s Talk</Link>
            </div>

            <div className={styles.desc}>
              <Typography>Our highly efficient health care coordinating team will be at your disposal full time. Contact us through the various platforms which we are part of.</Typography>
            </div>

            <div className={styles.buttons_container}>
              <div className={styles.btn}>
                <a href="tel:(+90) 552 502 6000">
                  <button>
                    <Phone />
                    +90 552 502 6000
                  </button>
                </a>
              </div>
              <div className={styles.btn}>
                <a href="https://en.wh.ms/201100791315" target="_blank">
                  <button>Whatsapp</button>
                </a>
              </div>
              <div className={styles.btn}>
                <a href="www.facebook.com" target="_blank"><button>Facebook</button></a>
              </div>
              <div className={styles.btn}>
                <a href="mailto:info@safemedigo.com" >
                  <button>Email</button>
                </a>
              </div>
            </div>
          </div>


          <div className={styles.personal_manger}>
            <div className={styles.box}>
              <div className={styles.img_container}>
                <img src={majd.src} alt="" />
              </div>


              <div className={styles.text_container}>

                <div className={styles.job}>
                  <Typography>
                    Your Personal Patient Manager
                  </Typography>
                </div>

                <div className={styles.name}>
                  <Typography>
                    Majd
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    have you settled on a location for your treatment? worries doesn't let you choose? Speaking with a live person provide you a real advice and assurance you require.
                  </Typography>
                </div>

                <div className={styles.btn}>
                  <Link href='/q&a'>
                    <button>Ask a question</button>
                  </Link>
                </div>

              </div>

            </div>
          </div>


          <div className={styles.contacts}>
            <div className={styles.contact}>
              <Typography>Whatsapp</Typography>
              <Typography>+90 552 502 6000</Typography>
            </div>
            <div className={styles.contact}>
              <Typography>Call Us</Typography>
              <Typography>+90 552 502 6000</Typography>
            </div>
            <div className={styles.contact}>
              <Typography>Email</Typography>
              <Typography>info@safemedigo.com</Typography>
            </div>
            <div className={styles.address}>
              <Typography>Address</Typography>

              <Typography>Fulya, Öztürk Sk.
                Sima Apartmanı, No 4B, 3Rd Floor, Office N10
                34394 <br /> Şişli/İstanbul</Typography>
            </div>
          </div>
        </div>
      </Container>

    </section>
  )
}

export default ContactDetails