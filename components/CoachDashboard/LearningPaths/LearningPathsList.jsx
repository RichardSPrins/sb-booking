import * as React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  Flex,
  Text,
  Box
} from '@chakra-ui/react'
import Link from 'next/link'

const LearningPathsList = () => {
  const [status, _setStatus] = React.useState(['Active', 'Inactive', 'Complete'])
  const [game, _setGame] = React.useState(['Apex Legends', 'Warzone', 'League of Legends', 'Rocket League', 'Splitgate'])
  return (
    <Box overflowX="scroll">
      <Table mt="4" variant="simple">
        <Thead>
          <Tr>
            <Th>Learning Path</Th>
            <Th>Next Session</Th>
            <Th>Game</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex align="center">
                <Box>
                  <Link href="/coach/learning-paths/1">
                    <Text ml="4" cursor="pointer" fontWeight="bold">Learning Path Name</Text>
                  </Link>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Box>
                  <Link href="/coach/learning-paths/1">
                    <Text ml="4" cursor="pointer" fontWeight="bold">Learning Path Name</Text>
                  </Link>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Box>
                  <Link href="/coach/learning-paths/1">
                    <Text ml="4" cursor="pointer" fontWeight="bold">Learning Path Name</Text>
                  </Link>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Box>
                  <Link href="/coach/learning-paths/1">
                    <Text ml="4" cursor="pointer" fontWeight="bold">Learning Path Name</Text>
                  </Link>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}
export default LearningPathsList