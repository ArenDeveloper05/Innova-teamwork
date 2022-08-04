import React from 'react'
import './Main.scss'
import FirstMainSide from './first-main-side/FirstMainSide'
import SecondMainSide from './second-main-side/SecondMainSide'
import ThirdMainSide from './third-main-side/ThirdMainSide'
import FourthMainSide from './fourth-main-side/FourthMainSide'


const Main = () => {
  return (
    <main>
        <FirstMainSide/>
        <SecondMainSide/>
        <ThirdMainSide/>
        <FourthMainSide/>
    </main>
  )
}

export default Main