import * as React from 'react'
import MarketingLayout from '../layouts/MarketingLayout'
import PricingTiers from '../components/CoachingPage/Pricing'
import CoachingHero from '../components/CoachingPage/CoachingHero'
import {
  Heading,
  Text,
  Container,
  Flex
} from '@chakra-ui/react'

const PricingPage = () => {
  return (
    <MarketingLayout>
      <CoachingHero />
      <PricingTiers />
    </MarketingLayout>
  )
}

export default PricingPage