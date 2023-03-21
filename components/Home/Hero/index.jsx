import React, { Children, useState } from 'react';
import styles from './index.module.scss';
import { Container, Typography, Rating, Box, } from '@mui/material';
import { BsCheckLg } from 'react-icons/bs';
import { HiPlay } from 'react-icons/hi';
import Link from 'next/link';
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { consts } from 'react-elastic-carousel';
import Search from '../Search/index'

const Hero = () => {
  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false },
    { width: 400, pagination: false },

  ])

  const { author, } = imgs;

  const cards = [
    { title: 'Patient name', img: author.src, id: '1', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },
    { title: 'Patient name', img: author.src, id: '2', desc: ' Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Consetetur Sadipscing Elitr, Sed Diam Nonumy  ' },

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

  return (
    <section id={styles.hero}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.hero_container}>
          <div className={styles.text_container}>

            <div className={styles.title}>
              <Typography variant='h1'>Find The Right & Safe <br /> Treatment For You In Turkey</Typography>
            </div>

            <div className={styles.advantages}>
              <div className={styles.advantage}>
                <BsCheckLg />
                <Typography>
                  24 Hours PATIENT SUPPORT
                </Typography>
              </div>
              <div className={styles.advantage}>
                <BsCheckLg />
                <Typography>
                  Lorem ipsum dolor sit amet
                </Typography>
              </div>
              <div className={styles.advantage}>
                <BsCheckLg />
                <Typography>
                  Lorem ipsum dolor sit amet
                </Typography>
              </div>
            </div>


            <Box sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start' }, justifyContent: 'space-between', flexDirection: { xs: 'row', sm: 'row', md: 'row', lg: 'column' } }}>

              <div className={styles.more}>
                <Link href='/'>
                  <HiPlay />
                  <button>Watch Video</button>
                </Link>
              </div>

              <div className={styles.start}>
                <div className={styles.get_started_btn}>
                  <Link href='/'>
                    <button>Get Started   </button>
                  </Link>
                </div>

                <div className={styles.explore_btn}>
                  <Link href='/procedures&symptoms'>
                    <button>Explore Our Procedures</button>
                  </Link>

                </div>
              </div>

            </Box>

          </div>

          <div className={styles.slider_container}>

            <Carousel
              breakPoints={breakPoints}
              itemsToScroll={1}
              renderArrow={myArrow}
            >
              {cards.map((card, index) => (
                <>
                  <div
                    className={styles.box} key={index}>
                    <div className={styles.box_header}>
                      <div className={styles.img_container}>
                        <img src={card.img} alt="" />
                      </div>

                      <div className={styles.tite}>
                        <Typography variant="h6"> {card.title}</Typography>

                        <div className={styles.rating}>
                          <Rating name="size-small" defaultValue={4} size="small" />
                          <span className={styles.reviews_num}>90 Reviews</span>
                        </div>

                        <div className={styles.link}>
                          <Link href='/'>Knee Replacement</Link>
                        </div>
                      </div>


                    </div>





                    <div className={styles.desc}>
                      <Typography>
                        {card.desc}
                      </Typography>
                    </div>

                  </div>

                </>
              ))}

            </Carousel>



          </div>
        </div>
      </Container>

      <Search />
    </section >
  )
}

export default Hero