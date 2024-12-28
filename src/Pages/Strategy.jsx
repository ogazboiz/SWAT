import React from 'react'
import Header from '../Components/Header/Header'
import bg from "../Assets/Images/strat.png"
import Consulting from '../Components/strategycomponents/Consulting'
import Service from '../Components/strategycomponents/Service'
import BenefitsForBusiness from '../Components/strategycomponents/BenefitsForBusiness '
import ServicesSection from '../Components/strategycomponents/ServicesSection'

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
        <ServicesSection/>
        <BenefitsForBusiness/>
    </div>
  )
}

export default Strategy