import * as React from "react";
import { Box, Stack, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Toast = ({ title, description, closeFunc }) => {
  return (
    <Box
      color="white"
      bg="green.400"
      py={2}
      px={4}
      fontFamily="heading"
      borderRadius="md"
    >
      <Stack direction="row" spacing={3}>
        <Box>
          <Text fontSize="xs" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="xs">{description}</Text>
        </Box>
        <IconButton
          onClick={closeFunc}
          aria-label="Close"
          icon={<CloseIcon />}
          size="xs"
          variant="unstyled"
        />
      </Stack>
    </Box>
  );
};

export default Toast;
