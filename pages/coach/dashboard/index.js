import * as React from 'react'
import CoachLayout from '../../../layouts/CoachLayout'
import CountStats from '../../../components/CoachDashboard/Home/CountStats'
import RecentSessionList from '../../../components/CoachDashboard/Home/RecentSessionsList'
import {
  Heading,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Avatar,
  Flex,
  Text
} from '@chakra-ui/react'

const CoachDashboardHome = () => {
  return (
    <CoachLayout>
      <Container maxW="7xl">
        <Heading>Dashboard</Heading>
        <CountStats />
        <Heading size="lg" mt="12">Recent Sessions</Heading>
        <RecentSessionList />
      </Container>
    </CoachLayout>
  )
}

export default CoachDashboardHome