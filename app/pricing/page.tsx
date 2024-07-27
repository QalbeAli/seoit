import FAQ from '@/components/FAQ'
import PricingCard from '@/components/PricingCard'
import PricingPlans from '@/components/PricingPlans'
import Reviews from '@/components/Review'
import React from 'react'

const Pricing = () => {
  return (
    <>
    <PricingPlans />
    <PricingCard />
    {/* <Reviews /> */}
    <FAQ />
    </>
  )
}

export default Pricing