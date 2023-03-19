import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
const FAQ = ({id,question,answer,className}) => {
  const [isAnswerShowimg,setIsAnswerShowing]=useState(false);
  return (
    <article className= "faq" onClick={()=> setIsAnswerShowing(priv => !priv)}>
      <div>
        <h4>{question}</h4>
        <button className='faq__icon'>
          {isAnswerShowimg?<AiOutlineMinus/> :<AiOutlinePlus/>}
        </button>
        
      </div>
      {isAnswerShowimg && <p>{answer}</p>}
    </article>
  )
}

export default FAQ