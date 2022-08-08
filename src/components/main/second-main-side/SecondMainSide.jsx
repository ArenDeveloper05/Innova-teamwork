import React from 'react'
import './SecondMainSide.scss'
import { secondData } from '../../../data/Second-data'
import see from '../../../assets/images/see.png'


const SecondMainSide = () => {
  return (
    <div className="second-main-side-wrapper">
      <div className='second-main-side-titles'>
        <p className='second-main-side-expertise-title'>Our Expertise</p>
        <p className='second-main-side-expertise-info'>By partnering with Datalite you will receive professional services in the following technologies.</p>
        <button className='second-main-side-estimation'>Free Estimation</button>
      </div>

      <div className='second-main-side-mini-dives'>
        {
          secondData.map((Obj) => {
            return (
              <div className='dives' key={Obj.id}>
                <img src={Obj.image.src} alt={Obj.image.alt} />
                <p>{Obj.text}</p>
              </div>
            )
          })
        }
      </div>
      <div className='second-main-side-seebtn'><p>See all</p><img src={see} alt="see" /> </div>
    </div>
  )
}

export default SecondMainSide