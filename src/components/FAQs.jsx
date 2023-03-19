import SectionHead from './SectionHead'
import FAQ from './FAQ'
import {FaQuestion} from 'react-icons/fa'
import { faqs } from '../data'


const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion/>} title="FAQs"/>
        <div className="faqs__wrapper">
          {faqs.map(({question ,answer,id})=>{
            return(
              <FAQ question={question} answer={answer} key={id}></FAQ>
            )
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default FAQs