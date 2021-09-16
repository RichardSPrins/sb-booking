import * as React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Wrap,
  Text,
  Img
} from '@chakra-ui/react'
import MarketingLayout from '../layouts/MarketingLayout'
import AboutHero from '../components/AboutPage/AboutHero'
import NewsletterForm from '../components/shared/NewsletterForm'
import ImpactStats from  '../components/AboutPage/ImpactStats'
import GiantTestimonial from '../components/AboutPage/GiantTestimonial'

const AboutPage = () => {
  return (
    <MarketingLayout>
      <Container maxW="7xl">
        <AboutHero />
        <Box mb="28">
          <Heading>Our Founders</Heading>
          <Wrap my="12" spacing="4" justify={{base: 'center', lg: 'flex-start'}} >
            <Box>
              <Box mb="4" h="320px" w="300px" bg="gray.700" rounded="lg">
                <Img src="scott-prins.jpeg" height="100%" rounded="inherit" />
              </Box>
              <Heading size="md">Scott Prins</Heading>
              <Text>{`Founder/CEO`}</Text>
            </Box>
            {/* <Box>
              <Box mb="4" h="320px" w="300px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Founder 2</Heading>
              <Text>{`Position`}</Text>
            </Box>
            <Box>
              <Box mb="4" h="320px" w="300px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Founder 3</Heading>
              <Text>{`Position`}</Text>
            </Box>
            <Box>
              <Box mb="4" h="320px" w="300px" bg="gray.700" rounded="lg"/>
              <Heading size="md">Founder 4</Heading>
              <Text>{`Position`}</Text>
            </Box> */}
          </Wrap>
        </Box>
        <GiantTestimonial />
        <ImpactStats />
        <NewsletterForm />
      </Container>
    </MarketingLayout>
  )
}

export default AboutPage