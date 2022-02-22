import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Marco Lima</Text>
                    <Text color="gray.300" fontSize="small">
                        maurelima@gmail.com
                    </Text>
                </Box>
            )}


            <Avatar size="md" name="Marco Lima" src="https://www.github.com/Maurelima.png" />
        </Flex>
    );
}