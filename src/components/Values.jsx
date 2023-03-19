import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'
import Imge from '../images/values.jpg'


const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Imge} alt="Values Image" />
          </div>
        </div>
        <div className=" values__right">
          <SectionHead icon={<GiCutDiamond/>}title="Values"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam praesentium reiciendis laboriosam culpa magni veritatis similique recusandae.</p>
          <div className="values__wrapper">
            {
            values.map(({icon,id,title,desc})=>{
              return(
                  <Card className="values__value" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
              
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values