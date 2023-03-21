import React from 'react'
import styles from './index.module.scss'
import { Container, Typography, Box } from '@mui/material';
import imgs from "../../../assets/constants/imgs";

const Help = () => {
  const { QualityGuarantee, OnGuide, GetQuote, TravelAssist } = imgs;

  const cards = [
    { title: 'Get Quote', desc: 'Receive more than one free quote for price comparison for any medical procedure from best healthcare suppliers', img: GetQuote.src },
    { title: 'Travel Assist', desc: 'Visa, flight and hotel bookings, transportation', img: TravelAssist.src },
    { title: '1 On 1 Guide', desc: 'Have a medical guide by your side through the whole experience', img: OnGuide.src },
    { title: 'Quality Guarantee', desc: "We promise best service and unlimited support; if not, we'll cover the cost of a follow-up procedure or provide a full refund.", img: QualityGuarantee.src },
  ]


  return (
    <Box id={styles.help}
      sx={window.location.pathname === '/' ? { marginTop: { xs: "127px", md: "127px" }, paddingTop: { xs: "22px", sm: "22px", md: "22px", }, } : { paddingTop: "0px", marginTop: "0px" }}

    >
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>
          <div className={styles.sec_title}>
            <Typography variant='h2'>We Help You To</Typography>
          </div>
          <div className={styles.boxes_container}>
            {cards.map((card, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.img_container}>
                  <img src={card.img} alt="" />
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

        </div>
      </Container>

    </Box >
  )
}

export default Help