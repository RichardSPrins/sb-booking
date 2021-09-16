import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              >
              About SquadPerks 👋
            </Text>
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            We strive to make the lives of esports professionals better in every way. It's no surprise that in a budding industry such as esports, that there is a glaringly obvious lack of tools built for you, so we are changing the status quo and providing software built for gaming professionals, by gaming professionals.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'data:image/jpeg;base64,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'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
