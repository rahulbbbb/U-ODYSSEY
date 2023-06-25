import { useState } from 'react'
import styles from './Gallery.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import galleryImages from '../API/GalleryApi'



const Gallery = ({}) => {
  const[galleryImagess, setgalleryImagess]=useState(galleryImages);
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>
      <h1 className={styles.galleryheadline}>From Canvas to Mountains:<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Uttarakhand's Artistic Journey Revealed</h1>

      {openModal && 
        <div className={styles.sliderWrap}>
          <FontAwesomeIcon icon={faCircleXmark} className={styles.btnClose} onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.btnPrev} onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className={styles.btnNext} onClick={nextSlide} />
          <div className={styles.fullScreenImage}>
            
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className={styles.galleryWrap}>
        {
          galleryImages && galleryImagess.map((slide, index) => {
            return(
              <div 
                className={styles.single} 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery;

