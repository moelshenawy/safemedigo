import React from 'react'
import styles from './index.module.scss'
import { Container, Typography, } from '@mui/material';
import imgs from "../../../assets/constants/imgs";
import { OurSafetyStanders, RealReviewsPatientStories, PatientSupport, BestTreatmentPackages } from "../../../assets/svgs/HoverIcons"
import Link from 'next/link';
import { useRouter } from "next/router";

const WhySafemedigo = () => {
  const { } = imgs;


  const cards = [
    { title: 'Real Reviews & Patient Stories', desc: 'Explore The Successful Journey Of The Patients Chose Us To Be With Them In Their Treatment Process', img: <RealReviewsPatientStories /> },
    { title: 'Best Treatment Packages', desc: 'Check And Compare Treatment Packages, Or Share Your Treatment And Your Budget With Us To Find A Treatment Package Suits You', img: <BestTreatmentPackages /> },
    { title: '24 Hours Patient Support', desc: 'Our Communication Desk Will Respond To Your Quires Within Minutes', img: <PatientSupport /> },
    { title: 'Our Safety Standards', desc: "By Emphasizing On All Aspects Concerning Safety, We Leave No Space For Substandard Treatment And Outside Care", img: <OurSafetyStanders /> },
  ]


  const router = useRouter();
  const { pathname } = router;

  return (
    <section id={styles.why_safemedigo}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>
          <div className={styles.sec_title}>
            <Typography variant='h2'>Why Safemedigo</Typography>
          </div>
          <div className={styles.boxes_container}>
            {cards.map((card, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.img_container}>
                  {card.img}
                </div>
                <div className={styles.title}>
                  <Typography variant='h6'>{card.title}</Typography>
                </div>
                <div className={styles.desc}>
                  <Typography >{card.desc}</Typography>

                </div>

              </div>
            ))}
          </div>

          {pathname !== '/about-us' &&
            <div className={styles.btn_contianer}>
              <Link href='/about-us'>
                <button>Find Out More</button>
              </Link>
            </div>

          }
        </div>
      </Container>

    </section >)
}

export default WhySafemedigo