import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MarketingLayout from '../layouts/MarketingLayout'
import Hero from '../components/HomePage/Hero'
import Features from '../components/HomePage/Features'
import Testimonials from '../components/HomePage/Testimonials'

import {
  Box,
  Heading,
  Container,
  Text,
  SimpleGrid,
  Wrap
} from '@chakra-ui/react'

export default function Home() {
  return (
    <MarketingLayout>
      <Hero />
      <Container maxW="7xl">
        <Box mt="4">
          <Heading size="xl">
            Find Coaches By Game
          </Heading>
          <Text fontSize="large">
            We offer support across many popular titles!
          </Text>
          <Wrap my="12" spacing="7">
            <Box>
              <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Game Title</Heading>
              <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
            </Box>
            <Box>
              <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Game Title</Heading>
              <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
            </Box>
            <Box>
              <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Game Title</Heading>
              <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
            </Box>
            <Box>
              <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Game Title</Heading>
              <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
            </Box>
            <Box>
              <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Game Title</Heading>
              <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
            </Box>
          </Wrap>
        </Box>
        <Features />
        <Testimonials />
      </Container>
    </MarketingLayout>
  )
}
