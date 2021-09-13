
import * as React from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import FeaturedCoach from './FeaturedCoachPreviewCard'

const FeaturedCoachesSection = () => {
  return (
    <Box mb="32" bg="gray.700" p="12" rounded="lg">
      <Heading>Featured Coaches</Heading>
      <Text fontSize="lg">Check out our top performing coaches, and link up with one today!</Text>
      <SimpleGrid mt="12" columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing="6">
        <FeaturedCoach />
        <FeaturedCoach />
        <FeaturedCoach />
        <FeaturedCoach />
        <FeaturedCoach />
        <FeaturedCoach />
        <FeaturedCoach />
        <FeaturedCoach />
      </SimpleGrid>
    </Box>
  )
}

export default FeaturedCoachesSection
