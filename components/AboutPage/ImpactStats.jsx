import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Heading,
  Text
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson,  } from 'react-icons/bs';
import { FiServer, FiUsers } from 'react-icons/fi';
import {FaUserGraduate, FaUserTie, FaUsers} from 'react-icons/fa'
import { GoLocation } from 'react-icons/go';


function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      bg="gray.700"
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box mb="28" maxW="7xl" mx={'auto'} pt={5}>
      <Heading
        fontSize={'4xl'}
        fontWeight={'bold'}>
        See how we've been doing.
      </Heading>
      <Text fontSize="lg">See our comunity has been growing, and join to be a part of a new movement in esports.</Text>
      <SimpleGrid mt="8" columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Coaches'}
          stat={'20'}
          icon={<FaUserTie size={'3em'} />}
        />
        <StatsCard
          title={'Students'}
          stat={'200'}
          icon={<FaUserGraduate size={'3em'} />}
        />
        <StatsCard
          title={'Teams'}
          stat={'5'}
          icon={<FaUsers size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}