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
import { v4 as uuidv4 } from "uuid";

const Attribution = ({ attr }) => {
  return (
    <Box fontFamily="heading" color="gray.400" fontSize="xs">
      <Divider mt={12} borderColor="gray.300" />
      <Text fontSize="inherit" fontWeight="bold" mb={2}>
        Images used on the page:
      </Text>
      <List variant="attr">
        {attr.map((c, i) => {
          return (
            <ListItem key={i + uuidv4} fontSize="inherit">
              <HStack spacing={2}>
                <Link color="inherit" fontSize="inherit" href={"#attr-" + c.id}>
                  {c.id}
                </Link>
                <Link
                  href={c.href}
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="inherit"
                  fontSize="inherit"
                >
                  {c.text}
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
  attr: PropTypes.array.isRequired,
};

Attribution.defaultProps = {
  attr: null,
};
