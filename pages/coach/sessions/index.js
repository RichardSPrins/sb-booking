import * as React from 'react'
import CoachLayout from '../../../layouts/CoachLayout'
import SessionList from '../../../components/CoachDashboard/Sessions/SessionLIst'
import {
  Container,
  Heading
} from '@chakra-ui/react'

const CoachDashboardHome = () => {
  return (
    <CoachLayout>
      <Container maxW="7xl">
        <Heading>Sessions</Heading>
        <SessionList />
      </Container>
    </CoachLayout>
  )
}

export default CoachDashboardHome