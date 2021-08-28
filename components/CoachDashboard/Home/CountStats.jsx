import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import {
  FaUserGraduate,
  FaUserClock,
  FaMoneyBillAlt
} from 'react-icons/fa'

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
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
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 4, md: 17 }}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Students  '}
          stat={'5,000'}
          icon={<FaUserGraduate size={'3em'} />}
        />
        <StatsCard
          title={'Sessions'}
          stat={'1,000'}
          icon={<FaUserClock size={'3em'} />}
        />
        <StatsCard
          title={'Earnings'}
          stat={`$${Math.floor(Math.random() * 100000)}`}
          icon={<FaMoneyBillAlt size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}