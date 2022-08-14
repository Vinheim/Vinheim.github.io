import React from 'react'
import './portfolio.css'
import ActionCall from './ActionCall'
import IMG1 from '../../assets/Tutor Dash.png'
import IMG2 from '../../assets/Grad Frontal.jpg'
import IMG3 from '../../assets/Plat2.png'
import IMG4 from '../../assets/Tank Game.png'
import IMG5 from '../../assets/Filament MemTracer.png'
import IMG6 from '../../assets/UCSF Chimera.png'
import IMG7 from '../../assets/Recurrent-Neural-Networks.jpg'

const data = [
  {
    id: 1,
    image: IMG6,
    title: 'Protein Data Bank Parser',
    github: 'https://github.com/Vinheim/PDB-Python-Parser',
    demo: 'https://github.com/Vinheim/PDB-Python-Parser/blob/master/PDBParser.py'
  },
  {
    id: 2,
    image: IMG1,
    title: "College Tutor App",
    github: 'https://trello.com/b/sZngmD1w/tutor-dash-prototype',
    demo: 'https://www.cs.odu.edu/~cpi/old/411/goldf19/index.php'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Actin Filament Tracing',
    github: 'https://github.com/Vinheim/Chimera-MRC-Filament-Tracer',
    demo: 'https://github.com/Vinheim/Chimera-MRC-Filament-Tracer/blob/master/John%20Hessefort%20Computational%20Biology%20Research%20Grant%20Paper.pdf'
  },
  {
    id: 4,
    image: IMG3,
    title: '2D Platformer',
    github: 'https://github.com/Vinheim/MarioClone',
    demo: 'https://youtu.be/Zsvrl8r6okE'
  },
  {
    id: 5,
    image: IMG7,
    title: 'Artificial Intelligence Coursework',
    github: 'https://github.com/Vinheim/Artificial-Intelligence-Coursework',
    demo: 'https://youtu.be/_C7rw5UnKkM'

  },
  {
    id: 6,
    image: IMG4,
    title: 'Tank Game',
    github: 'https://github.com/Vinheim/TankGame',
    demo: 'https://youtu.be/G0B3orJPDE8'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container"> 
      {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-CTA">
                  <a href={github} target='_blank' className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio