import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Text,
  Divider,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";

const Attribution = ({ imageAttributions }) => {
  return (
    <Box fontFamily="heading" color="gray.400" fontSize="xs">
      <Divider mt={8} borderColor="gray.300" />
      <Text fontSize="inherit" fontWeight="bold" mb={2}>
        Image attributions:
      </Text>
      <List variant="attr">
        {imageAttributions.map((attribution) => {
          return (
            <ListItem key={attribution.id} fontSize="inherit">
              <HStack spacing={2}>
                <Link
                  color="inherit"
                  fontSize="inherit"
                  href={"#attr-" + attribution.id}
                >
                  {attribution.id}
                </Link>
                <Link
                  href={attribution.href}
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="inherit"
                  fontSize="inherit"
                >
                  {attribution.text}
                  <Icon as={MdOpenInNew} ml={1} />
                </Link>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Attribution;

Attribution.propTypes = {
  imageAttributions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
