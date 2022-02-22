import { Flex, Icon, Input } from '@chakra-ui/react';
import { useRef } from 'react';
// import { RiSearchLine } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';

interface SearchBoxProps {
    isWideVersion?: boolean;
}

export function SearchBox({isWideVersion = true }: SearchBoxProps) {

    const searchInputRef = useRef<HTMLInputElement>(null);

    // console.log(searchInputRef.current.value)

    return (
        <Flex
            as="label"
            flex="1"
            py={isWideVersion ? '4' : '2'}
            px={isWideVersion ? '8' : '4'}
            ml={isWideVersion ? '6' : '0'}
            maxWidth={isWideVersion ? 400 : 200}
            alignSelf={isWideVersion ? 'center' : 'left'}
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
        >
            <Input
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na plataforma"
                _placeholder={{ color: 'gray.400' }}
                ref={searchInputRef}
            />
            <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
    );
}