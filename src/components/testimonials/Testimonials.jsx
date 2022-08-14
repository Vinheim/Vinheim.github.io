import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/metzger.jpeg'
import AVTR2 from '../../assets/brunelle.jpeg'
import AVTR3 from '../../assets/stephen.jpeg'

// Import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'David Metzger',
    title: 'ODU Perry Honors College Dean',
    review: 'It is a  true pleasure for me to write in support of John Hessefort. I have enjoyed seeing how his interest in computer science has developed and matured over the years as a result of his participation in undergraduate research. John is clearly an example that the College of Sciences wishes other students would emulate. Mr. Hessefort has been an excellent representative for the Perry Honors College, the College of Sciences, and the computer science department. His intelligence, good will, and excellent scientific and interpersonal skills provide every indication of his future success as a STEM leader.'
  },
  {
    avatar: AVTR2,
    name: 'Janet Brunelle',
    title: 'CS Master Lecturer and Chief Departmental Advisor',
    review: 'The department faculty members highly respect John\'s work ethic, motivation for learning, and support of others in our academic setting. He also works with the Math and Science Resource Center for the College of Sciences as a tutor in multiple disciplines. Due to his skills of communication, collaboration, and leadership, he has excelled in these roles.'
  },
  {
    avatar: AVTR3,
    name: 'Andrea Stephen',
    title: 'ODU Math and Science Resource Center Manager',
    review: 'John is a very driven, energetic, dependable, organized and responsible individual. As manager of the MSRC, I have been able to gain insight on how John carefully attends to the needs of his peers by helping them to analyze, think critically and understand abstract concepts. He is an amazing team leader who is always willing to go the extra mile to ensure that the resources we provide help to meet the needs of our student population.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>ODU Faculty Testimonials</h5>
      <h2>Recommendations</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1} 
        pagination={{ clickable: true}}
      >
        {
          data.map(({avatar, name, title, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="recommender__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='recommender__name'>{name}</h5>
                <small className="recommender__title">{title}</small>
                <small className="recommender__review">{review}</small>
              </SwiperSlide>
            )
          })  
        }
      </Swiper>
    </section>
  )
}

export default Testimonials