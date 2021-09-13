import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MarketingLayout from '../layouts/MarketingLayout'
import Hero from '../components/HomePage/Hero'
import Features from '../components/HomePage/Features'
import Testimonials from '../components/HomePage/Testimonials'
import FeaturedCoach from '../components/HomePage/FeaturedCoachPreviewCard'

import {
  Box,
  Heading,
  Container,
  Text,
  SimpleGrid,
  Wrap
} from '@chakra-ui/react'
import FeaturedCoachesSection from '../components/HomePage/FeaturedCoachesSection'
import FindCoachByFeaturedGameSection from '../components/HomePage/FindCoachByFeaturedGameSection'
import NewsletterForm from '../components/shared/NewsletterForm'

export default function Home() {
  return (
    <MarketingLayout>
      <Hero />
      <Container maxW="7xl">
        <FindCoachByFeaturedGameSection />
        <Features />
        <FeaturedCoachesSection />
        <Testimonials />
        <Box>
          <NewsletterForm />
        </Box>
      </Container>
    </MarketingLayout>
  )
}
