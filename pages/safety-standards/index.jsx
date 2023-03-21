import { PageHeader } from '@/components'
import React from 'react'
import imgs from "../../assets/constants/imgs";
import styles from "./index.module.scss";
import { Container, Typography } from "@mui/material";
import { ContactDetails } from '@/components/Home';

const SafetyStandards = () => {
  const { patientFeedback_img,
    clarityConcerning_img,
    firstClassMedical_img,
    modernHealthcare_img,
    reviewedExperts_img,
    treatmentCharges_img,

    dash_safety_1,
    dash_safety_2,
    dash_safety_3,
    dash_safety_4,
    dash_safety_5,

  } = imgs;

  const safetyStandards = [


    { id: 1, title: 'Highly Reviewed Experts', desc: 'Our team has worked from ground up in the medical field. This is important as we have all the required information when it comes to picking a health care facility for our esteemed patients. A minimum obligation we expect from a health care provider is that it has attained all the required international accreditation:', list: ['Joint Commission International (JCI)', 'Care Quality Commission (CQC)', ' International Standards Organization (ISO)', ' National Committee For Quality Assurance (NCQA)'], list2: [' Success Rates', ' Certification And Awards', '   Years Of Operations', 'Terms And Conditions, They Offer'], img: reviewedExperts_img.src, icon: dash_safety_1.src },

    { id: 2, title: 'Modern Healthcare Facilities', desc: 'Technological advancement has given a big boost to the medical field. Top healthcare providers invest in the latest and most reliable healthcare equipment as well as the most advanced methods for treatment. ', list: ['How Well Equipped Are Their Laboratories ', 'Availability Of Diagnostic Equipment(X - Rays, CT - Scans, MR, Etci)', 'Other Amenities(Accessibility, Wi-Fi)'], img: modernHealthcare_img.src, icon: dash_safety_2.src },

    { id: 3, title: 'First-Class Medical Services', desc: '  Apart from assuring your successful treatment, we also seek to guarantee your treatment at the healthcare facility is enjoyable and comfortable.', list: ['The Availability Of A Patient Guardian', " The Transparency Of The Clinic's Policy, Pricing And Documentation", ' Any Support Regarding Travelling To The Clinic', 'Any Free Extra Services(Consultation, Food, Diagnostics)', 'Flexible Visiting Hours', 'Communication Services Such As The Clinics Website & Social Media Accounts.'], img: firstClassMedical_img.src, icon: dash_safety_3.src },

    {
      id: 4, title: 'Satisfactory Patient Feedback', desc: 'For Every Healthcare Institution We Settle For, A Proper Background Check Has Been Conducted By Our Team To Ensure They Have A Good Track Record When It Comes To Administering Healthcare Related Services. Apart From Being Side By Side With Our Patients Throughout The Whole Experience, We Also Make Sure They Give Us Their Honest Feedback On The General Experience They Undergo In The Various Hospitals And Clinics We Refer. Through Our Personalized Survey Program, We Issue Information Back To The Various Hospitals And Clinics With The Aim Of Bettering Them In Order To Serve You Better In The Future. With The Use Of Some Online Platforms, We Can Get Feedback From Other Patients Also. What Is Important With Using This Tool Is To Ensure We Filter The Genuine From The Forged Information Some `Fake` Reviewers Might Have Posted. Where', list: [' Safemedigo Surveys',
        "Open Forums", 'Facebook', ' Yelp', 'Flexible Visiting Hours', 'Google', 'Independent Medical Clinic Rating Sites.'], img: patientFeedback_img.src, icon: dash_safety_4.src
    },
    { id: 5, title: 'Affordable Treatment Charges', desc: 'Health Care Is Not Cheap. Quality Health Care Is Even More Expensive, But With Us As Your Entrusted Healthcare Guider, We Will Find You The Most Affordable And Flexible Rate To Your Fondness. We Are Aware With The Many Exploitation Schemes Going On In The Healthcare Provision Field And Would Want Our Patients To Avoid Getting Duped Into Either Paying False Figures Or Getting Below Par Treatment', list: ['We deal directly with the healthcare providers. no third party', ' We provide a comprehensive breakdown of the charges by the hospital ', 'No extra hidden charges', 'No payment required until final decision on treatment is made', 'Value for money(with traveling and accommodation expenses already on your plate, we coordinate with the hospitals and clinics to give you a treatment coupon.by going through us, the healthcare facilities we collaborate with will give you affordable / considerate prices for any procedure.)', 'Offer guarantee pay back for some unsuccessful plastic surgeries(the hospitals and clinics we work with have a guaranteed payback policy in case of an unsuccessful plastic surgery.if such a case is to occur, we will do the follow up on your behalf)'], img: treatmentCharges_img.src, icon: dash_safety_5.src },
    {
      id: 6, title: 'Clarity Concerning All Matters', desc: 'Every step you take through the journey will be carefully and well detailed. Our team believes that transparency is key when it comes to procedures, prices and options,', list: ['Contractual Agreements',
        "  Price Quotation", 'Treatment Plan'], img: clarityConcerning_img.src
    },


  ]

  const treatmentCharges = safetyStandards.filter((item) => item.title === 'Affordable Treatment Charges')
  const reviewedExperts = safetyStandards.filter((item) => item.title === 'Highly Reviewed Experts')
  const modernHealthcare = safetyStandards.filter((item) => item.title === 'Modern Healthcare Facilities')
  const firstClassMedicalServices = safetyStandards.filter((item) => item.title === 'First-Class Medical Services')
  const patientFeedback = safetyStandards.filter((item) => item.title === 'Satisfactory Patient Feedback')
  const clarityConcerning = safetyStandards.filter((item) => item.title === 'Clarity Concerning All Matters')



  return (
    <>

      <section id={styles.safetyStandards}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
          <div className={styles.boxes_container}>


            <div className={styles.reviewedExperts}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {reviewedExperts[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {reviewedExperts[0].desc}
                  </Typography>
                </div>

                <div className={styles.list}>
                  <ul>
                    {reviewedExperts[0].list.map((li, idx) => (
                      <li key={idx}>
                        {li}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.list_title}>
                    <Typography>
                      What we look for in healthcare facilities:
                    </Typography>
                  </div>
                  <ul>
                    {reviewedExperts[0].list2.map((li, idx) => (
                      <li key={idx}>
                        {li}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

              <div className={styles.img_container}>
                <img src={reviewedExperts[0].img} alt="" />

                <div className={styles.icon_container}>
                  <img src={reviewedExperts[0].icon} alt="" />
                </div>
              </div>
            </div>


            <div className={styles.modernHealthcare}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {modernHealthcare[0].title}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {modernHealthcare[0].desc}
                  </Typography>
                </div>

                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      What we look for in healthcare facilities:
                    </Typography>
                  </div>
                  <ul>
                    {modernHealthcare[0].list.map((li, idx) => (
                      <li key={idx}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className={styles.img_container}>
                <img src={modernHealthcare[0].img} alt="" />
                <div className={styles.icon_container}>
                  <img src={modernHealthcare[0].icon} alt="" />
                </div>
              </div>
            </div>




            <div className={styles.firstClassMedicalServices}>
              <div className={styles.text_container}>
                <div className={styles.title}>

                  <Typography variant='h3'>
                    {firstClassMedicalServices[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {firstClassMedicalServices[0].desc}
                  </Typography>
                </div>
                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      What we look for in healthcare service:
                    </Typography>
                  </div>
                  <ul>
                    {firstClassMedicalServices[0].list.map((li, idx) => (
                      <li key={idx}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={firstClassMedicalServices[0].img} alt="" />
                <div className={styles.icon_container}>
                  <img src={firstClassMedicalServices[0].icon} alt="" />
                </div>
              </div>
            </div>


            <div className={styles.patientFeedback}>
              <div className={styles.text_container}>
                <div className={styles.title}>

                  <Typography variant='h3'>
                    {patientFeedback[0].title}
                  </Typography>
                </div>
                <div className={styles.desc}>
                  <Typography>
                    {patientFeedback[0].desc}
                  </Typography>
                </div>
                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      Where We Get Feedback About Healthcare Facilities From
                    </Typography>
                  </div>
                  <ul>
                    {patientFeedback[0].list.map((li, idx) => (
                      <li key={idx}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.img_container}>
                <img src={patientFeedback[0].img} alt="" />
                <div className={styles.icon_container}>
                  <img src={patientFeedback[0].icon} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.treatmentCharges}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {treatmentCharges[0].title}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {treatmentCharges[0].desc}
                  </Typography>
                </div>

                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      How Do We Achieve This?
                    </Typography>
                  </div>
                  <ul>
                    {treatmentCharges[0].list.map((li, idx) =>
                      <li key={idx}>
                        {li}
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className={styles.img_container}>
                <img src={treatmentCharges[0].img} alt="" />

                <div className={styles.icon_container}>
                  <img src={treatmentCharges[0].icon} alt="" />
                </div>
              </div>
            </div>


            <div className={styles.clarityConcerning}>
              <div className={styles.text_container}>
                <div className={styles.title}>
                  <Typography variant='h3'>
                    {clarityConcerning[0].title}
                  </Typography>
                </div>

                <div className={styles.desc}>
                  <Typography>
                    {clarityConcerning[0].desc}
                  </Typography>
                </div>

                <div className={styles.list}>
                  <div className={styles.list_title}>
                    <Typography>
                      All this will be available first hand:
                    </Typography>
                  </div>

                  <ul>
                    {clarityConcerning[0].list.map((li, idx) =>
                      <li key={idx}>
                        {li}
                      </li>
                    )}
                  </ul>
                </div>

              </div>

              <div className={styles.img_container}>
                <img src={clarityConcerning[0].img} alt="" />
              </div>
            </div>








          </div>
        </Container>
      </section>

      <ContactDetails />
    </>
  )
}

export default SafetyStandards