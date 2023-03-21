import React from 'react'
import imgs from "../../../assets/constants/imgs";
import styles from './index.module.scss'
import { Container, Typography } from '@mui/material';
import Link from 'next/link';


const Safty = () => {
  const { OurSafetyStandards00, OurSafterStanders01, left01,
    right01,
    right02,
    middle, left02, OurSafetyStandards002 } = imgs;

  return (
    <section id={styles.safty}>

      <Container sx={{ maxWidth: '1239px' }} maxWidth={false}>
        <div className={styles.section_container}>
          <div className={styles.title}>
            <Typography variant='h2'>Our Safety Standards</Typography>
          </div>

          <div className={styles.sec_desc}>
            <Typography>Apart From Good Medical Results, We Highly Rate General Safety. Our Patient`S Have To Be Lifted Through The Various Downs That Come With Medical Care. It Is Important That The Patient Is Fully Aware Of All The Factors That Will Collectively Ensure They Receive Satisfactory Treatment In And Out Of Hospital. By Emphasizing On All Aspects Concerning Safety, We Leave No Space For Substandard Treatment And Outside Care. Get Full Benefits Of Your Medical Trip Through Our Safety Standards Structure That Entails:</Typography>

          </div>


          <div className={styles.content}>



            <div className={styles.text_container}>
              <div className={styles.right_side}>
                <Typography>
                  Satisfactory Patient Feedback
                  <img src={left01.src} className={styles.left1} alt="" />
                </Typography>
                <Typography>
                  Affordable Treatment Charges

                  <img src={left02.src} className={styles.left2} alt="" />
                </Typography>
                <Typography>
                  Clarity Concerning All Matters
                </Typography>
              </div>

              <div className={styles.images_container}>
                <img src={OurSafterStanders01.src} className={styles.logo} alt="" />
                <img src={OurSafetyStandards00.src} className={styles.ground} alt="" />

                <div className={styles.hovered}>
                  <img src={OurSafetyStandards002.src} alt="" />
                </div>
              </div>


              <div className={styles.left_side}>
                <Typography>
                  <img src={right01.src} className={styles.right1} alt="" />

                  Highly Reviewed Experts
                </Typography>
                <Typography>
                  <img src={right02.src} className={styles.right2} alt="" />
                  Modern Healthcare Facilities
                </Typography>
                <Typography>
                  <img src={middle.src} className={styles.middle} alt="" />
                  First-Class Medical Services
                </Typography>
              </div>
            </div>

            <div className={styles.desc}>
              <Typography>Apart from good medical results, we highly rate general safety. our patient`s have to be lifted through the various downs that come with medical care. it is important that the patient is fully aware of all the factors that will collectively ensure they receive satisfactory treatment in and out of hospital. by emphasizing on all aspects concerning safety, we leave no space for substandard treatment and outside care. get full benefits of your medical trip through our safety standards structure that entails:</Typography>


              <div className={styles.list}>
                <ul>
                  <li>Satisfactory patient feedback</li>
                  <li>Affordable treatment charges</li>
                  <li>Clarity concerning all matters </li>
                  <li>Modern healthcare facilities </li>
                  <li>First-class medical services</li>
                  <li>Highly reviewed experts</li>
                </ul>
              </div>
            </div>

            <div className={styles.btn_container}>
              <Link href='/safety-standards'>
                <button>Explore Our Safety Standards</button>
              </Link>
            </div>
          </div>


        </div>
      </Container>


    </section >
  )
}

export default Safty