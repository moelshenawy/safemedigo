import React, { useEffect, useState } from "react";
import { Link } from "next/link";
import imgs from "../../assets/constants/imgs";
import { Tags } from "../../components";
import styles from "./[title].module.scss";
import { Container, Typography, Rating, Box } from "@mui/material";
import { BsLink45Deg, BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go'
import Carousel from 'react-elastic-carousel'
import axios from "axios";



export default function BolgDetails({ post }) {
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1, },
    // { width: 1, itemsToShow: 2, pagination: false },
    { width: 337, itemsToShow: 1, },

    { width: 450, itemsToShow: 2, },
    { width: 550, itemsToShow: 3, },
    { width: 850, itemsToShow: 3, },
    { width: 1150, itemsToShow: 3, },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ])




  const { art_vid, preparing, Result, Extraction, blog_detail, openingChannel, Transplanting, author, post3, blog_bg } = imgs;

  const cards = [
    { title: 'Preparing', img: preparing.src, id: '1' },
    { title: 'Extraction', img: Extraction.src, id: '2' },
    { title: 'Opening Channels', img: openingChannel.src, id: '3' },
    { title: 'Transplanting', img: Transplanting.src, id: '4' },
    { title: 'Results', img: Result.src, id: '5' },
  ]





  return (
    <>

      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            lg: "none"
          }
        }}
        id={styles.signle_blog_header}>
        <div className={styles.img_container}>
          <img src={blog_bg.src} alt="" />
        </div>

        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.title}>
            <Typography variant="h1">
              I Was Suffuring From Gas Issues For 3 Years! (Blog Title)
            </Typography>
          </div>

          <div className={styles.writer_info}>
            <div className={styles.writer_img}>
              <img src={author.src} alt="" />
            </div>

            <div className={styles.name}>
              <a href="#">
                writer name

              </a>
              - medical content writer
            </div>


          </div>
          <div className={styles.date}>
            November 4, 2020
          </div>
        </Container>
      </Box>

      <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
        <div id={styles.blog_details}>

          <div className={styles.headline}>

            <div className={styles.headline_inner}>
              <div className={styles.img_container}>
                <img src={blog_detail.src} alt="Blog Name" />
              </div>
              <div className={styles.title}>
                <Typography variant="h2">Headline</Typography>
                <Typography >
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                  Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
                  Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea
                  Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                  Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
                  Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea
                  Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum{" "}
                </Typography>
              </div>
            </div>

            <div className={styles.blog_treatment_box}>
              <div className={styles.box}>
                <div className={styles.img_container}>
                  <img src={post3.src} alt="" />
                </div>

                <div className={styles.text_container}>

                  <div className={styles.treatment_title}>
                    <Typography variant="h5">Treatment Name</Typography>
                  </div>
                  <div className={styles.price}>
                    <p>Cost Start From <span>1200 	&euro;</span></p>
                  </div>
                  <div className={styles.starts}>
                    <Rating name="size-medium" defaultValue={4} />
                    <span className={styles.reviews_num}>90 Reviews</span>
                  </div>
                  <div className={styles.desc}>
                    <Typography >
                      Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd
                    </Typography>
                  </div>

                  <div className={styles.more_btn}>
                    <a href='/'>
                      <button>More</button>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <article>
            <div className={styles.title}>
              <Typography variant="h2">Article Subline</Typography>
            </div>

            <div className={styles.article_container}>
              <div className={styles.video_container}>
                <img src={art_vid.src} alt="" />
              </div>

              <div className={styles.text_container}>
                <Typography >
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                  Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                  Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
                  Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No
                  Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem
                  Ipsum Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                  Sed Diam Nonumy
                </Typography>

                <div className={styles.links}>
                  <a href="#">Go To Treatment Page Link</a>
                  <a href="#">Doctor Category</a>
                </div>
              </div>

            </div>
            <div className={styles.boxes_container}>
              <Carousel breakPoints={breakPoints} showArrows={false}
                pagination={false}
                itemsToScroll={1}
              >
                {cards.map((card, index) => (
                  <>
                    <div className={styles.box} key={index}>
                      <div className={styles.box_title}>
                        <Typography variant="h6">{card.id} {card.title}</Typography>
                      </div>
                      <div className={styles.img_container}>
                        <img src={card.img} alt="" />
                      </div>
                    </div>

                  </>
                ))}

              </Carousel>
            </div>

          </article>

          <div className={styles.highlight}>
            <div className={styles.title}>
              <Typography variant='h2'>
                Highlighted Text
              </Typography>
              <Typography >
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
              </Typography>


            </div>

          </div>


          <div className={styles.share}>
            <Typography>
              <span>Helpful?</span>
              Share it.
            </Typography>
            <div className={styles.icons_container}>
              <BsTwitter />
              <FaFacebookSquare />
              <HiOutlineMail />
              <BsLink45Deg />
            </div>
            <hr />
          </div>
        </div>






        <div id={styles.related_tags}>
          <Tags />
        </div>

        <div id={styles.cards_container}>
          <div className={styles.comments_card}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Typography >
                  Comments <span>(12)</span>
                </Typography>
                <hr />
              </div>
              <div className={styles.card_body}>

                <div className={styles.user_comment}>
                  <div className={styles.user_data}>
                    <div className={styles.img_container}>
                      <img src={author.src} alt="" />
                    </div>
                    <div className={styles.name}>
                      <span>Sammer Mt,</span>
                    </div>



                  </div>
                  <div className={styles.comment}>

                    <Typography>
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nam Viverra Euismod Odio,
                    </Typography>


                    <div className={styles.date}>
                      Dec 6, 2017 - 18:55
                    </div>
                  </div>
                </div>

                <div className={styles.admin_comment}>
                  <div className={styles.admin_data}>
                    <div className={styles.img_container}>
                      <img src={author.src} alt="" />
                    </div>
                    <div className={styles.name}>
                      <span>Admin</span>
                    </div>
                  </div>

                  <div className={styles.comment}>
                    <Typography>

                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nam Viverra Euismod

                    </Typography>

                    <div className={styles.date}>
                      Dec 6, 2017 - 18:55
                    </div>
                  </div>
                </div>

                <div className={styles.load_more_btn}>
                  <button>Load More</button>
                </div>
              </div>
            </div>


          </div>

          <div className={styles.leave_comment}>
            <div className={styles.card}>
              <div className={styles.header}>
                <Typography >
                  Leave Comment
                </Typography>
                <hr />
              </div>

              <form action="">
                <div className={styles.name}>
                  <label htmlFor="">Name <span>*</span></label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>

                <div className={styles.email}>
                  <label htmlFor="">Email <span>*</span></label>
                  <input type="emal" placeholder="Enter Your Email" />
                </div>

                <div className={styles.comment}>
                  <label htmlFor="">Comments <span>*</span></label>
                  <textarea placeholder="Enter Your Comment" name="" rows="4" cols="50">

                  </textarea>
                </div>


                <div className={styles.add_comment_btn}>
                  <button type="submit">
                    <GoPlus />
                    Add Your Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

// Every time that user click on the post it will call  API Request





// export async function getServerSideProps() {


//   return {
//     props: {
//       post: data
//     }
//   }
// }

// Error: getStaticPaths is required for dynamic SSG pages and is missing for
// it will get all Posts Id and save it as an id => if i have 10 posts and all i want is id's of the 10 posts it will get  all id's at once

// export async function getStaticProps(context) {
//   const res = await fetch(
//     `https://safemedigo.vercel.app/api/blogs/${context.params.id}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       post: data,
//     },
//   };
// }

{
  /*
  here to get all paths id's =>
   paths: [  
    {params : { id : 1 }},
    {params : { id : 2 }},
    {params : { id : 3 }},
    {params : { id : 4 }},
    {params : { id : 5 }},
   ]

*/
}

// export async function getStaticPaths() {
//   const res = await fetch(`https://safemedigo.vercel.app/api/blogs`);
//   const data = await res.json();

//   // here to get all paths id dynamic
//   const paths = data.map((path) => {
//     return { params: { id: `${path.id}` } };
//   });
//   return {
//     paths: paths,

//     // fallback used for => if we don't have id = 50 it will throw an error
//     fallback: false,
//   };
// }
