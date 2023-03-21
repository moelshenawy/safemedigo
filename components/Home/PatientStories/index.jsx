import React, { useState } from 'react'
import styles from './index.module.scss'
import Carousel from 'react-elastic-carousel';
import imgs from "../../../assets/constants/imgs";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { consts } from 'react-elastic-carousel';
import { Container, Typography, Rating, } from '@mui/material';
import Link from 'next/link';

const PatientStories = () => {
  const { post1, post2, post3, post4, post5, author } = imgs;

  const [breakPoints] = useState([
    { width: 1, pagination: true, showArrows: false },
    { width: 300, pagination: true, showArrows: false, itemsToShow: 1.1, itemsToScroll: 1 },
    { width: 400, pagination: false, itemsToShow: 1.1, itemsToScroll: 1, showArrows: false },
    { width: 800, pagination: false, itemsToShow: 2.5, itemsToScroll: 1, transitionMs: 1000 },

  ])




  const posts = [
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post1.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "6 Months Since Freddy Had A Hair Transplant In Tij6 Months Since Freddy Had A Hair Transplant In Tij6 Months Since Freddy Had A Hair Transplant In Tij6 Months Since Freddy Had A Hair Transplant In Tij",
      id: 1,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post1.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico.",
      id: 1,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post2.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 2,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post3.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 3,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post4.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 4,
    },

    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 5,
    },
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 5,
    },
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels  Like And How He His Head Looks Like And How He Feels  Like And How He Feels His Head Looks Like And How He Feels  Like And How He Feels Feels  6 Months After Surgery.",
      id: 5,
    },
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 5,
    },
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 5,
    },
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 5,
    },
    {
      authorName: "Majd Khaled",
      authorJob: "Medical Content Writer",
      authorImg: author.src,
      img: post5.src,
      title: "It Was A Good Reason To Cancel My Hair Transplant!",
      desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery.",
      id: 5,
    },
  ];



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
    <section id={styles.patient_stories}>
      <Container className='mycontainer' sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>

          <div className={styles.text_container}>
            <div className={styles.title}>
              <Typography variant='h2'>Patient Stories</Typography>
            </div>

            <div className={styles.desc}>
              <Typography>We Are An Independent Organisation And Only Ever Provide Fully Honest And Unbiased Information About Doctors That Have Been Thoroughly And Professionally Vetted.</Typography>
            </div>

            <div className={styles.btn_container}>

              <Link href='/'>
                <button>
                  Read Our Stories
                </button>
              </Link>
            </div>
          </div>


          <div className={styles.slider_container}>
            <div className={styles.shadow_box} />

            <Carousel
              breakPoints={breakPoints}
              itemsToScroll={2}
              renderArrow={myArrow}
              transition={{ duration: 0.95, ease: "easeOut" }}
            >
              {posts.map((post, index) => (
                <Link href={`/blogs/${post.id}`} className={styles.box} key={index}>
                  <div className={styles.img_container}>
                    <img
                      src={post.img}
                      alt="Picture of the author"
                      width="width: 344px"
                    />
                  </div>
                  <div className={styles.box_title}>
                    <Typography variant="h5">{post.title}</Typography>
                  </div>

                  <div className={styles.desc}>
                    <p>{post.desc}</p>
                  </div>

                  <div className={styles.author_container}>
                    <div className={styles.img_container}>
                      <img src={post.authorImg} alt="" />
                    </div>

                    <div className={styles.author_data}>
                      <div className={styles.user_name}>
                        {post.authorName}
                      </div>
                      <div className={styles.user_job}>{post.authorJob}</div>
                    </div>
                  </div>

                  <div className={styles.btns_container}>
                    <div className={styles.trans_btn}>
                      <button>Tag Name</button>
                    </div>

                  </div>
                </Link>
              ))}
            </Carousel>

          </div>




        </div>
      </Container>

    </section >
  )
}

export default PatientStories