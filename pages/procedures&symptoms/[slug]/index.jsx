import Carousel, { consts } from 'react-elastic-carousel';
import React, { useState } from 'react'
import { Container, Typography, Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import styles from './index.module.scss';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const TreatmentName = ({ blogs }) => {
  console.log(blogs)

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false, itemsToShow: 1, },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1, itemsToScroll: 1, showArrows: false },

    { width: 800, pagination: false, itemsToShow: 3, itemsToScroll: 3, },

  ])

  const [breakPointsSteps] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1, itemsToScroll: 1.1, showArrows: false },
    { width: 800, pagination: false, itemsToShow: 4, itemsToScroll: 4, transitionMs: 1000 },

  ])

  const [surgerySteps] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.5, itemsToScroll: 1 },
    { width: 400, pagination: true, itemsToShow: 1.5, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: false, itemsToShow: 5, itemsToScroll: 5 },

  ])

  const [breakPointsOperation] = useState([
    { width: 1, pagination: false, showArrows: false, itemsToShow: 1.1 },
    { width: 300, pagination: false, showArrows: false, itemsToShow: 1.5, itemsToScroll: 1 },
    { width: 400, pagination: false, itemsToShow: 1.5, itemsToScroll: 1, showArrows: false },
    { width: 600, pagination: false, itemsToShow: 3, itemsToScroll: 3 },

  ])


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


  const { treatmentVideo, preparing, Hair_Transplant_after,
    Hair_Transplant_before, aircraft,
    plane,
    ReasonsRetention_Feature, patient_plan } = imgs;

  const beforeAfterCards = [
    { id: 1, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 2, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 3, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 4, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 5, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 6, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 7, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 8, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 9, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
    { id: 10, title: 'FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op', before_img: Hair_Transplant_before.src, after_img: Hair_Transplant_after.src },
  ]

  const stepsCards = [
    { id: 1, title: 'Preparing', img: preparing.src, },
    { id: 2, title: 'Preparing', img: preparing.src, },
    { id: 3, title: 'Preparing', img: preparing.src, },
    { id: 4, title: 'Preparing', img: preparing.src, },
    { id: 5, title: 'Preparing', img: preparing.src, },
    { id: 6, title: 'Preparing', img: preparing.src, },
    { id: 7, title: 'Preparing', img: preparing.src, },
    { id: 8, title: 'Preparing', img: preparing.src, },
    { id: 9, title: 'Preparing', img: preparing.src, },
    { id: 10, title: 'Preparing', img: preparing.src, },
  ]


  const OperationCards = [
    { id: 1, title: 'Preparing', img: preparing.src, },
    { id: 2, title: 'Preparing', img: preparing.src, },
    { id: 3, title: 'Preparing', img: preparing.src, },
    { id: 4, title: 'Preparing', img: preparing.src, },
    { id: 5, title: 'Preparing', img: preparing.src, },
    { id: 6, title: 'Preparing', img: preparing.src, },
    { id: 7, title: 'Preparing', img: preparing.src, },
    { id: 8, title: 'Preparing', img: preparing.src, },
    { id: 9, title: 'Preparing', img: preparing.src, },
    { id: 10, title: 'Preparing', img: preparing.src, },
  ]


  const treatment_desc = [
    { id: 1, title: 'Day 1 - Arrival', list: ['Pickup from İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)', 'Transfer to your hotel'], img: aircraft.src, },
    { id: 2, title: 'Day 2 - Treatment', list: ['Pre-op consultation and blood tests', 'Hair transplant surgery'], img: patient_plan.src, },
    { id: 3, title: 'Day 3 - Healing', list: ['Tour trip & Shopping or Rest in your hotel',], img: ReasonsRetention_Feature.src, },
    { id: 4, title: 'Day 4 - Post-Op Check And Departure', list: ['Post-op check-up and PRP treatment', 'Transfer to the airport for departure flight at 2 pm or after'], img: plane.src, },
    { id: 5, title: 'Day 1 - Arrival', list: ['Pickup from İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)', 'Transfer to your hotel'], img: aircraft.src, },
    { id: 6, title: 'Day 2 - Treatment', list: ['Pre-op consultation and blood tests', 'Hair transplant surgery'], img: patient_plan.src, },
    { id: 7, title: 'Day 3 - Healing', list: ['Tour trip & Shopping or Rest in your hotel',], img: ReasonsRetention_Feature.src, },
    { id: 8, title: 'Day 4 - Post-Op Check And Departure', list: ['Post-op check-up and PRP treatment', 'Transfer to the airport for departure flight at 2 pm or after'], img: plane.src, },
    { id: 9, title: 'Day 1 - Arrival', list: ['Pickup from İstanbul Airport (IST) or Sabiha Gökçen Airport (SAW)', 'Transfer to your hotel'], img: aircraft.src, },
    { id: 10, title: 'Day 2 - Treatment', list: ['Pre-op consultation and blood tests', 'Hair transplant surgery'], img: patient_plan.src, },
    { id: 11, title: 'Day 3 - Healing', list: ['Tour trip & Shopping or Rest in your hotel',], img: ReasonsRetention_Feature.src, },
    { id: 12, title: 'Day 4 - Post-Op Check And Departure', list: ['Post-op check-up and PRP treatment', 'Transfer to the airport for departure flight at 2 pm or after'], img: plane.src, },
  ]



  // Styling 
  const sxParagraph = {
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    marginTop: '16px'
  }
  const sxParagraph2 = {
    color: '#000000',
    fontSize: '16px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    marginTop: '16px'
  }
  const paragrahp3 =
  {
    fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)'
    ,
    display: 'flex',
    alignItems: 'center',
    'span': { backgroundColor: '#ffffff', color: '#004747', marginRight: '16px', width: '31px', borderRadius: '50%', height: '31px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }
  }


  const sxBox = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '27px',
    flexWrap: 'wrap',
    'img': {
      width: '101.84px',
      height: '132.4px'
    },
    '.card': {
      marginBottom: { xs: '10px', sm: '10px', md: '10px', lg: '0' }
    }
  }
  const sxTitle = {
    marginTop: '24px',
    marginBottom: '24px',
    color: '#000000',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Open Sans, sans-serif'
  }

  const sxTitle2 = {
    marginTop: '24px',
    marginBottom: '24px',
    marginLeft: '50px',
    color: '#000000',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Open Sans, sans-serif'
  }


  return (
    <>
      <header id={styles.treatment}>
        <nav>

          <div className={styles.links_container}>
            <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
              <List sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', width: { sx: '100%', sm: '100%', md: '100%', lg: '700px' } }}>
                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='#overview'>
                    Overview
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='#price'>
                    Prices
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='#q&a'>
                    Q&A
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='/'>
                    Reviews
                  </Link>
                </ListItem>

                <ListItem sx={{ width: 'fit-content', paddingLeft: '0px' }}>
                  <Link href='/'>Doctors</Link>
                </ListItem>


              </List>
            </Container>

          </div>

        </nav >
      </header >
      <article id={'overview'} className={styles.overview}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.details_container}>
            <article className={styles.details}>
              <div className={styles.title}>
                <Typography variant='h3'>
                  What Is A Hair Transplant?
                </Typography>
              </div>

              <div className={styles.desc}>
                <Typography>
                  Hair Transplant Surgery Is A Cosmetic Procedure That Involves Taking Donor Hairs From One Or More Areas Of Your Body—Most Commonly The Back Or Sides Of Your Scalp, Or Even Your Beard, Back, Or Chest—And Moving Them To An Area Where You've Had Hair Loss. The Healthy Hair Follicles Are Transplanted As “Grafts” That Each Contain One, Two, Or Three Hairs. Hair Grafting Was Once Done Almost Exclusively On The Scalp, And That’s Still The Most Common Procedure. However, Hair Restoration Surgeons Are Now Doing Beard Transplants, Eyebrow Transplants, And Even Eyelash Transplants, According To Dr. Jeffrey Epstein, A Facial Plastic And Hair Restoration Surgeon In Miami. According To The American Academy Of Dermatology, More Than 80 Million Men And Women Experience Hair Loss. It’s Normal To Lose 50–100 Hairs A Day, But Bald Spots, A Thinning Part, And A Receding Hairline May Indicate A Bigger Issue That Warrants Hair Transplants. For Most People, The Causes Of Hair Loss Are Genetic. Androgenic Alopecia, Also Called Female Or Male Pattern Baldness, Commonly Begins In Men As A Receding Hairline Or Thinning In The Crown, While Women Usually Experience Recession Near The Temples And A Widening Part. Some People Also Develop An Autoimmune Disorder Called Alopecia Areata, Which Can Lead To Patchy Hair Loss Anywhere On The Body. If Your Hair Loss Hasn't Progressed Too Far, And Any Underlying Medical Conditions Can Be Successfully Treated, A Hair Transplant Can Usually Restore Most Of What You’ve Lost—And Deliver A Boost To Your Self-Confidence.
                </Typography>
              </div>

            </article>

            <article className={styles.quick_details}>
              <div className={styles.title}>
                <Typography variant='h3'>Quick Details</Typography>
              </div>

              <div className={styles.details_container}>
                <div className={styles.boxes_container}>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>Operation duration:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {
                        display: 'list-item',
                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>4-8 hours</ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>Type of anesthesia:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {
                        display: 'list-item',
                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>topical</ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>Cost starts from:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {
                        display: 'list-item',
                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>$1200</ListItem>
                    </List>
                  </div>
                </div>

                <div className={styles.boxes_container}>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>Max success rate:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {
                        display: 'list-item',
                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>97%</ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>Procedure type::</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {
                        display: 'list-item',
                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>simple (outpatient)</ListItem>
                    </List>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>Duration of the results:</Typography>
                    </div>
                    <List sx={{
                      listStyleType: 'disc',
                      padding: '0px',

                      '& .MuiListItem-root': {
                        display: 'list-item',
                        listStylePosition: 'inside',
                        padding: '0px',
                        cursor: 'pointer'
                      },
                    }}>
                      <ListItem>Lifetime</ListItem>
                    </List>
                  </div>
                </div>

              </div>
            </article>
          </div>
          <div className={styles.menu_container}>
            <Accordion disableGutters elevation={0}
              square={false} sx={{
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                sx={expanded !== 'panel1' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel1' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel1d-content" id="panel1d-header">
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  Benefits

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



                </List>
              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',

                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary

                sx={expanded !== 'panel3' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel3' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel3d-content" id="panel3d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  Possible Side Effects

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



                </List>
              </AccordionDetails>

            </Accordion>


            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary

                sx={expanded !== 'panel2' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel2' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel2d-content" id="panel2d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  What Makes A Good Candidate

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

                </List>
              </AccordionDetails>

            </Accordion>





            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '9px',

                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary

                sx={expanded !== 'panel4' ? { '&:hover': { backgroundColor: '#C5DFDC' }, transition: 'all 0.3s ease', height: '55px', borderRadius: '5px', backgroundColor: '#E7EDEC ', color: '#000000' }
                  : { backgroundColor: '#004747', color: '#FFFFFF', height: '55px', borderRadius: '5px' }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel4' ? { color: ' #000000', width: '30px', height: "30px" } : { color: '#FFFFFF', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel4d-content" id="panel4d-header"                >
                <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  Procedure Duration & Hospitalization

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

                </List>
              </AccordionDetails>

            </Accordion>
          </div>

        </Container >



      </article>



      <section id={styles.before_after}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.title}>
            <Typography variant='h3'>
              FUE Hair Transplant Before & After Photos
            </Typography>
          </div>

          <div className={styles.menu_container}>
            <div className={styles.menu}>
              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary

                  sx={expanded !== 'panel5' ? { height: '55px', borderRadius: '5px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', borderRadius: '5px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel5' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel5d-content" id="panel5d-header"                >
                  <Typography sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                    FUE Hair Transplant

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
            </div>

            <div className={styles.btn_container}>
              <Link href='/'>
                <button>View All Photo</button>
              </Link>
            </div>
          </div>

          <div className={styles.slider_container}>
            <Carousel
              breakPoints={breakPoints}
              itemsToScroll={1} renderArrow={myArrow} transitionMs={1000}>
              {beforeAfterCards.map((bcard, index) => (
                <div className={styles.box} key={index}>
                  <div className={styles.imgs_container}>
                    <img src={bcard.before_img} alt="" />
                    <img src={bcard.after_img} alt="" />
                  </div>
                  <div className={styles.box_title}>
                    <Typography variant='h5'>Before</Typography>
                    <Typography variant='h5'>After</Typography>
                  </div>
                  <div className={styles.desc}>
                    <Typography>
                      FUE Hair Transplant - 4500 Grafts - 10 Month Post-Op
                    </Typography>
                  </div>
                </div>
              ))}

            </Carousel>
          </div>
        </Container >

      </section>


      <section id={styles.steps}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>

          <div className={styles.sec_title}>
            <Typography variant='h3'>
              Hair Transplant Surgery Steps
            </Typography>
          </div>
        </Container >

        <Container className='mycontainer' sx={{ maxWidth: "1239px" }} maxWidth={false}>

          <div
            className={styles.slider_container}>
            <Carousel
              breakPoints={surgerySteps}
              renderArrow={myArrow}
              transitionMs={1000}
            >
              {stepsCards.map((stepCard, index) => (
                <>
                  <div className={styles.steps_container}>
                    <div className={styles.step}>
                      <span>{stepCard.id}</span>
                    </div>
                  </div>

                  <div className={styles.box} key={index}>
                    <div className={styles.box_title}>
                      <Typography variant="h6"> {stepCard.title}</Typography>
                    </div>
                    <div className={styles.img_container}>
                      <img src={stepCard.img} alt="" />
                    </div>
                  </div>

                </>
              ))}

            </Carousel>
          </div>
        </Container >

      </section>

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <section id={styles.what_you_need}>
          <div className={styles.title}>
            <Typography variant='h3'>FUE Hair Transplant: What You Need To Know</Typography>
          </div>
          <div className={styles.menu_container}>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary

                sx={expanded !== 'panel6' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                  : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel6' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel6d-content" id="panel6d-header"                >
                <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  1- Pre-Operation

                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ background: '#F4F9F8' }}>

                <Typography sx={sxTitle} variant='h5'>Before Visiting The Hospital:</Typography>

                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>

                <Box sx={sxBox}>
                  <div className="card">
                    <div className="img_container">
                      <img src={preparing.src} alt="" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="img_container">
                      <img src={preparing.src} alt="" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="img_container">
                      <img src={preparing.src} alt="" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="img_container">
                      <img src={preparing.src} alt="" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="img_container">
                      <img src={preparing.src} alt="" />
                    </div>
                  </div>
                </Box>

                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>



                <Typography sx={sxTitle} variant='h5'>First Day:</Typography>

                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>







                <div className={styles.box}>
                  <div className={styles.box_title}>
                    <Typography variant="h6">Markings</Typography>
                  </div>
                  <div className={styles.img_container}>
                    <img src={preparing.src} alt="" />
                  </div>
                </div>

              </AccordionDetails>

            </Accordion>


            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '8px',
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary

                sx={expanded !== 'panel7' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                  : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel7' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel7d-content" id="panel7d-header"                >
                <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  2- During Operation

                </Typography>
              </AccordionSummary>


              <AccordionDetails sx={{ background: '#F4F9F8' }}>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>




                <Carousel pagination={false} breakPoints={breakPointsOperation} showArrows={false}
                  transitionMs={1000}
                >
                  {OperationCards.map((operation, index) => (
                    <>
                      <div className={styles.box} key={index}>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{operation.title}</Typography>
                        </div>
                        <div className={styles.img_container}>
                          <img src={operation.img} alt="" />
                        </div>
                      </div>

                    </>
                  ))}

                </Carousel>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>





                <Carousel pagination={false} breakPoints={breakPointsOperation} showArrows={false}
                  transitionMs={1000}
                >
                  {OperationCards.map((operation, index) => (
                    <>
                      <div className={styles.box} key={index}>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{operation.title}</Typography>
                        </div>
                        <div className={styles.img_container}>
                          <img src={operation.img} alt="" />
                        </div>
                      </div>
                    </>
                  ))}

                </Carousel>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>

                <div className={styles.box}>
                  <div className={styles.box_title}>
                    <Typography variant="h6">Markings</Typography>
                  </div>
                  <div className={styles.img_container}>
                    <img src={preparing.src} alt="" />
                  </div>
                </div>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


                <Carousel pagination={false} breakPoints={breakPointsOperation} showArrows={false}
                  transitionMs={1000}
                >
                  {OperationCards.map((operation, index) => (
                    <>

                      <div className={styles.box} key={index}>
                        <div className={styles.box_title}>
                          <Typography variant="h6">{operation.title}</Typography>
                        </div>
                        <div className={styles.img_container}>
                          <img src={operation.img} alt="" />
                        </div>
                      </div>

                    </>
                  ))}

                </Carousel>

              </AccordionDetails>

            </Accordion>

            <Accordion disableGutters elevation={0}
              square={false} sx={{
                marginTop: '8px',
                '&:before': {
                  display: 'none',
                }
              }}
              expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary

                sx={expanded !== 'panel8' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                  : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                }
                expandIcon={<ExpandMoreIcon sx={expanded !== 'panel8' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                aria-controls="panel8d-content" id="panel8d-header"                >
                <Typography sx={{ fontSize: { sm: '16px', md: '16px', lg: '18px' }, fontWeight: 'bold', fontFamily: 'var(--quickstand-font)' }}>
                  3- After Operation

                </Typography>
              </AccordionSummary>

              <AccordionDetails >

                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>

                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


                <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


              </AccordionDetails>

            </Accordion>


          </div>

        </section>
      </Container >


      <article id={styles.video}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.video_container}>

            <div className={styles.title}>
              <Typography variant='h3'>
                Everything About FUE Hair Transplant In Video
              </Typography>
            </div>
            <div className={styles.video_container}>
              <img src={treatmentVideo.src} alt="" />
            </div>
          </div>

        </Container >
      </article>

      <section id={styles.howToGetTreatment}>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.howToGetTreatment_container}>
            <div className={styles.sec_title}>
              <Typography variant='h3' sx={sxTitle2}>How Can I Get The Hair Transplant Treatment In Turkey?</Typography>
            </div>

            <div className={styles.menu_container}>

              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>


                <AccordionSummary
                  sx={expanded !== 'panel9' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel9' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel9d-content" id="panel9d-header">
                  <Typography sx={paragrahp3}>

                    <span>
                      1
                    </span>

                    Send Your Pictures

                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ background: '#F4F9F8' }}>

                  <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


                </AccordionDetails>

              </Accordion>


              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  marginTop: '8px',

                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>


                <AccordionSummary
                  sx={expanded !== 'panel10' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel10' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel10d-content" id="panel10d-header">
                  <Typography sx={paragrahp3}>

                    <span>
                      2
                    </span>

                    Send Your Pictures

                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ background: '#F4F9F8' }}>

                  <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


                </AccordionDetails>

              </Accordion>


              <Accordion disableGutters elevation={0}
                square={false} sx={{
                  marginTop: '8px',
                  '&:before': {
                    display: 'none',
                  }
                }}
                expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>


                <AccordionSummary
                  sx={expanded !== 'panel11' ? { height: '55px', backgroundColor: '#004747', color: '#FFFFFF' }
                    : { backgroundColor: '#C5DFDC', color: '#004747', height: '55px', }
                  }
                  expandIcon={<ExpandMoreIcon sx={expanded !== 'panel11' ? { color: '#FFFFFF', width: '30px', height: "30px" } : { color: '#004747', width: '30px', height: "30px", marginBottom: '5px', }} />}
                  aria-controls="panel11d-content" id="panel11d-header">
                  <Typography sx={paragrahp3}>

                    <span>
                      3
                    </span>

                    Send Your Pictures

                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ background: '#F4F9F8' }}>

                  <Typography sx={sxParagraph}>If You Have Concerns About Doing A Medical Procedure, You Should Take A Simple Practical Step That Helps You To Get A Clearer Sense Of What You Want And Answers For Your Questions. In Other Words, Seek Counseling. Guide Through Of Consultation Process:</Typography>


                </AccordionDetails>

              </Accordion>




            </div>

          </div>
        </Container >

      </section>

      <section id={styles.treatment_desc}>
        <Container className='mycontainer' sx={{ maxWidth: "1239px" }} maxWidth={false}>

          <div className={styles.sec_title}>
            <Typography variant='h3'>
              Hair Transplant Surgery Steps
            </Typography>
          </div>

          <div className={styles.slider_container}>
            <Carousel
              breakPoints={breakPointsSteps}
              renderArrow={myArrow}
              transitionMs={1000}
            >
              {treatment_desc.map((card, index) => (
                <>
                  <div className={styles.steps_container} key={index}>
                    <div className={styles.step}>
                      <span>{card.id}</span>
                    </div>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.title}>
                      <Typography variant='h6'>
                        {card.title}
                      </Typography>
                    </div>
                    <div className={styles.img_container}>
                      <img src={card.img} alt="" />
                    </div>

                    <div className={styles.list}>
                      <ul>
                        {card.list.map((li, idx) => (
                          <li key={idx}>
                            {li}
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>

                </>
              ))}

            </Carousel>
          </div>
        </Container >
      </section>


      <section id={'price'} className={styles.price}>
        <div className={styles.section_container}>
          <div className={styles.title}>
            <Typography variant='h3'>
              Hair Transplant Cost Starts From$1200
            </Typography>
          </div>

          <div className={styles.btn_container}>
            <div className={styles.qoute}>
              <Link href='/qoute'>
                <button>
                  Get A Qoute
                </button>
              </Link>
            </div>

            <div className={styles.discover}>
              <Link href='/discover'>
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default TreatmentName


export async function getServerSideProps(context) {
  const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'ar',
      "blogCategoryId": 0,
      "currentPage": 2
    })
  })
  const data = await res.json()

  return {
    props: {
      blogs: data
    }
  }
}