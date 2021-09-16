import * as React from 'react'
import MarketingLayout from '../layouts/MarketingLayout'
import PricingTiers from '../components/CoachingPage/Pricing'
import CoachingHero from '../components/CoachingPage/CoachingHero'
import FeaturesList from '../components/CoachingPage/FeaturesList'
import {
  Heading,
  Text,
  Container,
  Flex,
  Box,
  Img
} from '@chakra-ui/react'

const PricingPage = () => {
  return (
    <MarketingLayout>
      <Container maxW="7xl">
        <CoachingHero />
          
        <Flex my={{base: '28', lg: '48'}} flexDir={{base: 'column', lg: 'row'}} align={{base: 'center', lg: 'flex-start'}} justify="center">
          <Box p={{base: 0, md: 12}} pt="0">
            <Heading size="xl" textAlign={{base: 'center', md: 'left'}}>Manage students with ease.</Heading>
            <Text mt="8" textAlign={{base: 'center', md: 'left'}} fontSize="lg" color="gray.500">
              All of your students are well organized by session, or game. Find any student and view their individual success with ease.
            </Text>
          </Box>
          <Img width={{base: '100%', sm: '80%', lg: '50%'}}  bg="white" src="/coach-dash-4.jpeg"/>
        </Flex>
        <Flex my={{base: '28', lg: '48'}} flexDir={{base: 'column-reverse', lg: 'row'}} align={{base: 'center', lg: 'flex-start'}} justify="center">
          <Img width={{base: '100%', sm: '80%', lg: '50%'}} bg="white" src="/coach-dash-3.jpeg"/>
          <Box p={{base: 0, md: 12}} pt="0">
            <Heading size="xl" textAlign={{base: 'center', md: 'left'}}>Create Custom Learning Paths.</Heading>
            <Text mt="8" textAlign={{base: 'center', md: 'left'}} fontSize="lg" color="gray.500">
              Create a custom learning path for your teams, complete with detailed steps and goals for students to reach. Launch live sessions instantly and start coaching.
            </Text>
          </Box>
        </Flex>
        <Flex my={{base: '28', lg: '48'}} flexDir={{base: 'column', lg: 'row'}} align={{base: 'center', lg: 'flex-start'}} justify="center">
          <Box p={{base: 0, md: 12}} pt="0">
            <Heading size="xl" textAlign={{base: 'center', md: 'left'}}>Measure student success in real time.</Heading>
            <Text mt="8" textAlign={{base: 'center', md: 'left'}} fontSize="lg" color="gray.500">
              As a coach, the success of your students is everything. Measure their success with an in depth dashboard, and see in real time when a student is falling behind.
            </Text>
          </Box>
          <Img width={{base: '100%', sm: '80%', lg: '50%'}} bg="white" src="/coach-dash-2.jpeg"/>
        </Flex>
        <FeaturesList />
        <PricingTiers />
      </Container>
    </MarketingLayout>
  )
}

export default PricingPage