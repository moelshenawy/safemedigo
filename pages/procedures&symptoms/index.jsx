import { MostPopular } from '@/components/Home'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import imgs from "../../assets/constants/imgs";
import styles from './index.module.scss';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProceduresSymptoms = () => {
  const [result, setResult] = useState(null)
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1.7, itemPosition: consts.START, width: 'fit-content', itemsToScroll: 1 },
    { width: 550, pagination: true, showArrows: false, itemsToShow: 1.9, itemPosition: consts.START, width: 'fit-content', itemsToScroll: 1 },
    { width: 850, pagination: true, showArrows: false, itemsToShow: 3, itemPosition: consts.START, width: 'fit-content', itemsToScroll: 1 },
    { width: 1150, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
    { width: 1450, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },
    { width: 1750, pagination: false, itemsToShow: 4.1, itemsToScroll: 4, },


  ])


  const { Dermatology, Dermatology_1, Knee, } = imgs;

  const cards = [
    { title: 'Gastroenterology & Hepatology', img: Knee.src, sec_img: Dermatology_1.src, id: 1 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 2 },
    { title: 'Hair Transplant', img: Dermatology.src, sec_img: Dermatology_1.src, id: 3 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 4 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 5 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 6 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 7 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 8 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 9 },
    { title: 'Gastroenterology & Hepatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 10 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 11 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 12 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 13 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 14 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 15 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 16 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 17 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 18 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 19 },
    { title: 'Dermatology', img: Dermatology.src, sec_img: Dermatology_1.src, id: 20 },
  ]




  // Change Arrow in react-elastic-carousel Lirbrary
  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ?
      <div className='left_arrow'>
        <HiChevronLeft />
      </div>

      :
      <div className='right_arrow'>
        <  HiChevronRight />
      </div>

      ;
    return (
      <button className='main_btn' onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }

  const handleResult = (card) => {
    const filterResult = cards.find((item) => item.id === card.id)

    if (filterResult) {
      setResult(filterResult)
    }

  }


  return (
    <>
      <MostPopular />

      <section id={styles.medical_department}>
        <div className={styles.section_container}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.sec_header}>
              <div className={styles.title}>
                <div className="header">
                  <Typography variant='h3'>All Medical Department</Typography>
                  <Typography sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'none',
                      lg: 'block'
                    }
                  }} variant='h6'>Sorted By Popularity</Typography>
                </div>

                <div className={styles.procedures_num}>
                  <Typography sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'block',
                      lg: 'none'
                    }
                  }} variant='h6'>Sorted By Popularity</Typography>
                  <Typography>10.500 Procedures</Typography>
                </div>
              </div>



            </div>
          </Container>

          <Container className='mycontainer' sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.slider_container}>
              <Carousel enableSwipe={true} breakPoints={breakPoints}
                transitionMs={1000}
                onResize={currentBreakPoint => console.log(currentBreakPoint)}
                renderArrow={myArrow}
              >

                {cards.map((card, index) => (
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, justifyContent: 'center' }} key={index}>

                    <Link href='#proceduresSymptoms' onClick={() => handleResult(card)} className={styles.box} >

                      <div className={styles.img_container}>

                        <img className={styles.main_img} src={card.img} alt="" />

                        <img className={styles.sec_img} src={card.sec_img} alt="" />

                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.title}</Typography>
                      </div>

                    </Link>

                    <Link href='#proceduresSymptoms' onClick={() => handleResult(card)} className={styles.box} key={index}>

                      <div className={styles.img_container}>

                        <img className={styles.main_img} src={card.img} alt="" />

                        <img className={styles.sec_img} src={card.sec_img} alt="" />

                      </div>

                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.title}</Typography>
                      </div>

                    </Link>

                    <div className={styles.mobile_slider}>
                      <Link href='#proceduresSymptoms' onClick={() => handleResult(card)} className={styles.box} key={index}>

                        <div className={styles.img_container}>

                          {
                            result !== null &&
                              result.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />

                          }

                        </div>

                        <div className={styles.box_title}>
                          <Typography variant="h6">{card.title}</Typography>
                        </div>

                      </Link >
                    </div>

                    <div className={styles.mobile_slider}>
                      <Link href='#proceduresSymptoms' onClick={() => handleResult(card)} className={styles.box} key={index}>

                        <div className={styles.img_container}>

                          {
                            result !== null &&
                              result.id === card.id ? <img className={styles.sec_img} src={card.sec_img} alt="" /> : <img className={styles.main_img} src={card.img} alt="" />

                          }

                        </div>

                        <div className={styles.box_title}>
                          <Typography variant="h6">{card.title}</Typography>
                        </div>

                      </Link>
                    </div>

                  </Box>
                ))}






              </Carousel>

            </div>
          </Container>


        </div>
      </section>

      <section id={'proceduresSymptoms'} className={styles.proceduresSymptoms}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} className={styles.card_title}>
            <Typography variant='h3'>
              Procedures & Symptoms
            </Typography>
          </Box>

          <motion.div
            animate={{
              y: [-40, 0],
              opacity: 1
            }}
            transition={{ duration: 0.80, ease: "easeOut" }}

            className={styles.section_container}>

            <div className={styles.filter_section}>

              <div className={styles.card_title}>
                <Typography sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} variant='h3'>
                  Procedures & Symptoms
                </Typography>
              </div>

              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary

                  sx={expanded !== 'panel1' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel1d-content" id="panel1d-header"                >
                  <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    Select medical symptoms

                  </Typography>
                </AccordionSummary>

                <AccordionDetails >

                  <List sx={{
                    listStyleType: 'disc',
                    padding: '0px',

                    '& .MuiListItem-root': {
                      display: 'list-item',
                      listStylePosition: 'inside',
                      padding: '0px',
                      cursor: 'pointer'
                    },
                  }}
                  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >
                    <ListItem variant='li' sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                      Hair Transplant
                    </ListItem  >


                  </List>
                </AccordionDetails>

              </Accordion>

              <Box sx={{ paddingLeft: '5px', paddingRight: '5px', marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  All Procedures
                </Typography>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  6 Procedures
                </Typography>
                <Typography sx={{ fontSize: { xs: '13px', sm: '13px', md: '13px', lg: '18px' }, fontWeight: 'var(--font-medium)', fontFamily: 'var(--quickstand-font)' }}>
                  Sorted By Popularity
                </Typography>
              </Box>

              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#c5dfdc',
                        transform: 'scale: 1.2',
                        'svg': { marginLeft: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href={`/procedures&symptoms/hair-loss`} style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>
              </Accordion>


              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#c5dfdc',
                        transform: 'scale: 1.2',
                        'svg': { marginLeft: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href={`/procedures&symptoms/hair-loss`} style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>
              </Accordion>


              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#c5dfdc',
                        transform: 'scale: 1.2',
                        'svg': { marginLeft: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href={`/procedures&symptoms/hair-loss`} style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>
              </Accordion>


              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#c5dfdc',
                        transform: 'scale: 1.2',
                        'svg': { marginLeft: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href={`/procedures&symptoms/hair-loss`} style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>
              </Accordion>


              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#c5dfdc',
                        transform: 'scale: 1.2',
                        'svg': { marginLeft: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href={`/procedures&symptoms/hair-loss`} style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>
              </Accordion>


              <Accordion
                elevation={0}
                expanded={true}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  },
                  marginTop: "20px"
                }}
              >

                <AccordionSummary

                  sx={
                    {
                      backgroundColor: '#E7EDEC', color: '#000000', borderRadius: '5px', height: '55px', transition: 'all 0.3s ease-in-out', '&:hover': {
                        backgroundColor: '#c5dfdc',
                        transform: 'scale: 1.2',
                        'svg': { marginLeft: '-10px' }
                      }

                      ,
                      'a': { fontSize: { sm: '16px', md: '16px', lg: '18px', }, fontWeight: 'bold', color: '#000000', fontFamily: 'var(--quickstand-font)' }
                    }
                  }
                  expandIcon={<ExpandMoreIcon sx={{
                    color: '#000000', width: '30px', height: "30px", transform: 'rotate(90deg)', transition: 'all 0.3s ease-in-out',
                  }} />}
                >
                  <Link href={`/procedures&symptoms/hair-loss`} style={{ width: '100%' }}>
                    Hair Loss
                    <Typography sx={{ fontSize: '14px' }}>80% success rate • cost starts: $6,525</Typography>
                  </Link>
                </AccordionSummary>
              </Accordion>


              <div className={styles.btn_container}>
                <button>Load More</button>
              </div>

            </div >

            <div className={styles.info}>
              <div className={styles.info_inner}>
                <div className={styles.info_header}>
                  <div className={styles.img_container}>
                    {result === null ?
                      <img src={cards[0]?.img} alt="" />

                      : <img src={result?.img} alt="" />
                    }
                  </div>

                  <div className={styles.title}>
                    <Typography variant='h3'>
                      {result === null ?
                        cards[0]?.title
                        :
                        result?.title

                      }
                    </Typography>

                  </div>
                </div>
                <div className={styles.desc}>
                  <Typography>

                    Dermatology Is The Branch Of Medicine Dealing With The Skin. It Is A Speciality With Both Medical And Surgical Aspects Related To Skin, Hair, Nails, And Some Cosmetic Problems.
                  </Typography>
                </div>
              </div>
            </div>
          </motion.div >
        </Container >


      </section >
    </>
  )
}

export default ProceduresSymptoms