import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'



const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad ab rerum exercitationem deserunt. Quam modi expedita at laboriosam. Iste.
    </Header>
    
    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium nam, inventore autem tempora laboriosam quis excepturi numquam sapiente vel ullam perferendis doloribus vero fuga nostrum explicabo similique consequatur! Nobis consequatur ducimus laborum, cumque libero doloremque quod nam fuga dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro odio possimus. Iste distinctio ut natus fugiat sit ea, quod quam itaque soluta laborum ab ducimus, atque eos sed aperiam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque, sit cumque praesentium voluptatibus iste voluptas hic adipisci laborum quos.
          </p>
        </div>

      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium nam, inventore autem tempora laboriosam quis excepturi numquam sapiente vel ullam perferendis doloribus vero fuga nostrum explicabo similique consequatur! Nobis consequatur ducimus laborum, cumque libero doloremque quod nam fuga dignissimos.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque, sit cumque praesentium voluptatibus iste voluptas hic adipisci laborum quos.
          </p>
        </div>

        <div className="about__section-image">
          <img src={VisionImage }
 alt="Our Story Image" />
        </div>

      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium nam, inventore autem tempora laboriosam quis excepturi numquam sapiente vel ullam perferendis doloribus vero fuga nostrum explicabo similique consequatur! Nobis consequatur ducimus laborum, cumque libero doloremque quod nam fuga dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro odio possimus. Iste distinctio ut natus fugiat sit ea, quod quam itaque soluta laborum ab ducimus, atque eos sed aperiam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque, sit cumque praesentium voluptatibus iste voluptas hic adipisci laborum quos.
          </p>
        </div>

      </div>
    </section>

    </>
  )
}

export default About