import React from 'react'
import Header from '../Components/Header/Header'
import bg from "../Assets/Images/strat.png"
import Consulting from '../section/Consulting'
import Service from '../section/Service'

function Strategy() {
  return (
    <div>
        <Header
        title="Strategic Innovation"
        subtitle="SWAT is a proven way to transform your brand"
        backgroundImage={bg}
        />
        <Consulting/>
        <Service/>
    </div>
  )
}

export default Strategy