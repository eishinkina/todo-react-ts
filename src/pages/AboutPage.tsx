import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage: React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam
        eaque deserunt nesciunt porro nulla beatae inventore recusandae quod
        asperiores!
      </p>
      <button className='btn' onClick={() => navigate('/')}>Обратно к списку дел</button>
    </>
  )
}

export default AboutPage
