import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subcribes to get Updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              colorScheme="purple"
              p={'0'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderRight={['none', '1px solid white']}
          borderLeft={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Video hub
          </Heading>
          <Text>All rights are reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a
              href="https://www.linkedin.com/in/salman-khan-265687224/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://github.com/salman-khan1" target="_blank">
              Github
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              href="https://www.facebook.com/people/Salman-Khan/100007262290354/?mibextid=ZbWKwL"
              target="_blank"
            >
              Facebook
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
