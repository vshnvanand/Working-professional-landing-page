import React from 'react'
import {MoveRight} from 'lucide-react' 
import RightCard from './RightCard'

const RightContent = (props) => {

    console.log(props.users)

  return (
    <div id='right' className='h-full p-6 w-2/3 flex  rounded-4xl flex-nowrap gap-10 overflow-x-auto'>
        {props.users.map(function(element, idx){
            return <RightCard  keys={idx} id={idx} img={element.img} tag={element.tag}/>
        })}
    </div>
  )
}

export default RightContent
