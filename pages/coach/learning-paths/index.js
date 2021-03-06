import * as React from 'react'
import CoachLayout from '../../../layouts/CoachLayout'
import LearningPathsList from '../../../components/CoachDashboard/LearningPaths/LearningPathsList'
import {
  Container,
  Heading
} from '@chakra-ui/react'

const CoachDashboardHome = () => {
  return (
    <CoachLayout>
      <Container maxW="7xl">
        <Heading>Learning Paths</Heading>
        <LearningPathsList />
      </Container>
    </CoachLayout>
  )
}

export default CoachDashboardHome