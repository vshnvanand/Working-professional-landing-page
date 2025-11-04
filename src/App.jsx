import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const users =[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1610387694365-19fafcc86d86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
      intro:'',
      tag:'Undertaker'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
