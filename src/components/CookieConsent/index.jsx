// Importing necessary libraries and components
import React from "react";
import { Box, ButtonGroup, Button, Text, Icon, HStack } from "@chakra-ui/react";
import { MdCookie } from "react-icons/md";
import { useCookieConsent } from "../../hooks/useCookieConsent";

// CookieConsent Component
const CookieConsent = () => {
  const { hasOptedIn, optIn, optOut, choiceMade } = useCookieConsent();

  const RenderConsent = () => {
    if (!choiceMade) {
      return (
        <Box
          width={{ base: "auto", md: "sm" }}
          // border="1px"
          // borderColor="blackAlpha.100"
          position="fixed"
          bottom="4"
          left="4"
          right={{ base: "4", md: "auto" }}
          p="4"
          bg="whiteAlpha.800"
          borderRadius="md"
          boxShadow="outline"
          zIndex="modal"
          backdropFilter="auto"
          backdropBlur="8px"
        >
          <HStack spacing={1}>
            <Icon boxSize={6} as={MdCookie} />
            <Text
              fontSize="md"
              mt={0}
              mb={1}
              fontFamily="heading"
              fontWeight="bold"
            >
              We use cookies
            </Text>
          </HStack>
          <Text fontSize="sm" mt={0} mb={6} fontFamily="heading">
            We use cookies to improve your experience, analyze website traffic
            and performance. We never collect personal information from you. Do
            you accept our use of cookies?
          </Text>
          <ButtonGroup colorScheme="gray" size={{ base: "sm", sm: "md" }}>
            <Button onClick={optIn}>Accept all</Button>
            <Button variant="outline" onClick={optOut}>
              Decline all
            </Button>
          </ButtonGroup>
        </Box>
      );
    }
    if (choiceMade && hasOptedIn) {
      return <div>Choice made and opt in</div>;
    }
    return null;
  };

  return <RenderConsent />;
};

export default CookieConsent;
