import * as React from 'react'
import MarketingLayout from '../layouts/MarketingLayout'
import PricingTiers from '../components/PricingPage/Pricing'
import {
  Heading,
  Text
} from '@chakra-ui/react'

const PricingPage = () => {
  return (
    <MarketingLayout>
      <PricingTiers />
    </MarketingLayout>
  )
}

export default PricingPage