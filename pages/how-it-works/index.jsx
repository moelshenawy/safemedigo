import React from 'react'
import { Container, Typography, Box } from "@mui/material";
import { PageHeader } from '@/components';
import { ContactDetails } from '@/components/Home';
import imgs from "../../assets/constants/imgs";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
// import '../../styles/'

const HowItWorks = () => {

  const { checkAfterTreatment,
    getInTouch,
    iDidIt,
    readyToGo,
    reaserch,
    safteyTreatment, dash_1,
    dash_2,
    dash_3,
    dash_4,
    dash_5, } = imgs;

  const howItWorksData = [
    { id: 1, title: 'Research', desc: 'Having done extensive research, our database contains information on the leading healthcare facilities, doctors and treatment methods available in Turkey. Gain access to doctors in Turkey, all carefully vetted and judged to have achieved our safety standards. Making a choice has never been easy but thanks to our system, you will at least find it less stressful.', img: reaserch.src, icon: dash_1.src },
    { id: 2, title: 'Get In Touch', desc: 'Are you still in doubt about treatment? Hesitant on which healthcare provider to pick? Not sure whether the procedure is covered by insurance or not? Worry not. As your healthcare partner, we will break down all this information to the simplest form and leave you with a clear picture to make a choice. Not to mention, no charges will be applied. See before and after pictures for cosmetic procedures, read reviews, get treatment or doctor information and later proceed to get a treatment appointment through our people.', img: getInTouch.src, icon: dash_2.src },
    { id: 3, title: 'Ready To Go', desc: 'Found a doctor in your area? Prefer traveling elsewhere? We cater for all. We will coordinate your departure plans. Our team will be on stand by and are well equipped to deal with any bump you may experience along the ride. Call or message us through the various platforms Tel, WhatsApp, Instagram, Twitter, Email, or Facebook for enquiries. We are available 24/7.', img: readyToGo.src, icon: dash_3.src },
    { id: 4, title: 'Safety Treatment', desc: 'Its D day! We`ll be next to you throughout the process to limit any misunderstandings. Leaving you to focus on your treatment and recovery process to come.', img: safteyTreatment.src, icon: dash_4.src },
    { id: 5, title: 'Check After Treatmen', desc: 'The same urgency we put during your treatment period is the same we will put during your recovery. We will be constantly checking up to support and encourage you.', img: iDidIt.src, icon: dash_5.src },
    { id: 6, title: 'I Did It', desc: 'Results. Achieving this fate is always our goal and we thrive on patient satisfaction. Your feedback will be crucial at this and any point of the process. For safer, better, and affordable healthcare and reconstructive surgeries.', img: checkAfterTreatment.src },
  ]


  const research = howItWorksData.filter((item) => item.title === 'Research')
  const GetInTouch = howItWorksData.filter((item) => item.title === 'Get In Touch')
  const ReadyToGo = howItWorksData.filter((item) => item.title === 'Ready To Go')
  const SafetyTreatment = howItWorksData.filter((item) => item.title === 'Safety Treatment')
  const CheckAfterTreatmen = howItWorksData.filter((item) => item.title === 'Check After Treatmen')
  const IDidIt = howItWorksData.filter((item) => item.title === 'I Did It')

  return (
    <>

      <section id={styles.how_it_works}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.boxes_container}>
            <div className={styles.research}>

              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.num}>
                    <span>
                      {research[0].id}
                    </span>
                  </div>
                  <Typography variant='h3'>
                    {research[0].title}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {research[0].desc}
                  </Typography>
                </div>
              </div>

              <div className={styles.img_container}>
                <img src={research[0].img} alt="" />

                <div className={styles.icon_container}>
                  <img src={research[0].icon} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.GetInTouch}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.num}><span>
                    {GetInTouch[0].id}

                  </span></div>
                  <Typography variant='h3'>
                    {GetInTouch[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {GetInTouch[0].desc}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={GetInTouch[0].img} alt="" />

                <div className={styles.icon_container}>
                  <img src={GetInTouch[0].icon} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.ReadyToGo}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.num}><span>
                    {ReadyToGo[0].id}

                  </span></div>
                  <Typography variant='h3'>
                    {ReadyToGo[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {ReadyToGo[0].desc}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={ReadyToGo[0].img} alt="" />
                <div className={styles.icon_container}>
                  <img src={ReadyToGo[0].icon} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.SafetyTreatment}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.num}><span>
                    {SafetyTreatment[0].id}

                  </span></div>
                  <Typography variant='h3'>
                    {SafetyTreatment[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {SafetyTreatment[0].desc}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={SafetyTreatment[0].img} alt="" />

                <div className={styles.icon_container}>
                  <img src={SafetyTreatment[0].icon} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.CheckAfterTreatmen}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.num}>
                    <span>
                      {CheckAfterTreatmen[0].id}

                    </span>
                  </div>
                  <Typography variant='h3'>
                    {CheckAfterTreatmen[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {CheckAfterTreatmen[0].desc}
                  </Typography>
                </div>
              </div>

              <div className={styles.img_container}>
                <img src={CheckAfterTreatmen[0].img} alt="" />
                <div className={styles.icon_container}>
                  <img src={CheckAfterTreatmen[0].icon} alt="" />

                </div>
              </div>
            </div>

            <div className={styles.IDidIt}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <div className={styles.num}>
                    <span>
                      {IDidIt[0].id}

                    </span>
                  </div>
                  <Typography variant='h3'>
                    {IDidIt[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {IDidIt[0].desc}
                  </Typography>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={IDidIt[0].img} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ContactDetails />

    </>
  )
}

export default HowItWorks