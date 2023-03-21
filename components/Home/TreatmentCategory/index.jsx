import React from 'react'
import styles from './index.module.scss'
import { Container, Typography, } from '@mui/material';
import imgs from "../../../assets/constants/imgs";


const TreatmentCategory = () => {
  const {
    Alternative,
    Bone_Marrow,
    Cardiology,
    Dentistry,
    Dont_See_What,
    Hair_Transplant,
    Ivf_ICSI,
    Laser_Eye_Surgery,
    Lung,
    Medical_Check,
    Neurology,
    OncologySurgeries,
    Orthopedics,
    Pediatrics,
    Plastic_Surgeries,
    Rhinoplasty,
    Tooth_Implants,
    Urology,
    Weight_Loss, Knee,


    Knee_1,
    Alternative_1,
    Bone_Marrow_1,
    Cardiology_1,
    Dentistry_1,
    Dont_See_What_1,
    Hair_Transplant_1,
    Ivf_ICSI_1,
    Laser_Eye_Surgery_1,
    Lung_1,
    Medical_Check_1,
    Neurology_1,
    Oncology_Surgeries_1,
    Orthopedics_1,

    Pediatrics_1,
    Plastic_Surgeries_1,

    Rhinoplasty_1,

    Tooth_Implants_1,
    Urology_1,
    Weight_Loss_1,

  } = imgs;


  const cards = [
    { title: 'Plastic Surgeries', img: Plastic_Surgeries.src, hover_icon: Plastic_Surgeries_1.src },
    { title: 'Hair Transplant', img: Hair_Transplant.src, hover_icon: Hair_Transplant_1.src },
    { title: 'Medical Check Up', img: Medical_Check.src, hover_icon: Medical_Check_1.src },
    { title: 'Laser Eye Surgery', img: Laser_Eye_Surgery.src, hover_icon: Laser_Eye_Surgery_1.src },
    { title: 'Dentistry', img: Dentistry.src, hover_icon: Dentistry_1.src },
    { title: 'Tooth Implants', img: Tooth_Implants.src, hover_icon: Tooth_Implants_1.src },
    { title: 'IVF (ICSI)', img: Ivf_ICSI.src, hover_icon: Ivf_ICSI_1.src },
    { title: 'Knee Replacement', img: Knee.src, hover_icon: Knee_1.src },
    { title: 'Weight Loss Treatments', img: Weight_Loss.src, hover_icon: Weight_Loss_1.src },
    { title: 'Orthopedics', img: Orthopedics.src, hover_icon: Orthopedics_1.src },
    { title: 'Rhinoplasty', img: Rhinoplasty.src, hover_icon: Rhinoplasty_1.src },
    { title: 'Cardiology', img: Cardiology.src, hover_icon: Cardiology_1.src },
    { title: 'Urology', img: Urology.src, hover_icon: Urology_1.src },
    { title: 'Oncology', img: OncologySurgeries.src, hover_icon: Oncology_Surgeries_1.src },
    { title: 'Pediatric', img: Pediatrics.src, hover_icon: Pediatrics_1.src },
    { title: 'Bone Marrow Transplant', img: Bone_Marrow.src, hover_icon: Bone_Marrow_1.src },
    { title: 'Lung Surgeries', img: Lung.src, hover_icon: Lung_1.src },
    { title: 'Neurology', img: Neurology.src, hover_icon: Neurology_1.src },
    { title: 'Alternative Medicine', img: Alternative.src, hover_icon: Alternative_1.src },
    { title: "Don't See What You Need?", img: Dont_See_What.src, hover_icon: Dont_See_What_1.src },

  ]

  return (
    <section id={styles.treatment_category}>
      <Container sx={{ maxWidth: '1239px' }} maxWidth={false} >
        <div className={styles.section_container}>
          <div className={styles.sec_title}>
            <Typography variant='h2'>Treatment Category</Typography>
          </div>

          <div className={styles.desc}>
            <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </Typography>
          </div>

          <div className={styles.boxes_container}>
            {cards.map((card, index) => (
              <div className={styles.box} key={index}>
                <div className={styles.img_container}>
                  <img className={styles.default_icon} src={card.img} alt="" />
                  <img className={styles.hovered_icon} src={card.hover_icon} alt="" />
                </div>
                <div className={styles.title}>
                  <Typography variant='h6'>{card.title}</Typography>
                </div>


              </div>
            ))}
          </div>
          <div className={styles.btn_contianer}>
            <button>Start Searching</button>
          </div>
        </div>
      </Container>

    </section >)
}

export default TreatmentCategory 