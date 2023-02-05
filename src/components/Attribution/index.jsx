import * as React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../../layout";
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
    <Wrapper>
      <Divider mb={4} />
      <Box fontFamily="heading" fontSize="sm" color="gray.400">
        <Text fontWeight="bold">Attribution</Text>
        <List>
          {attr.map((c, i) => {
            return (
              <ListItem key={i + uuidv4}>
                <HStack spacing={2}>
                  <Link href={"#attr-" + c.id}>{c.id}</Link>
                  <Link
                    href={c.href}
                    isExternal
                    display="flex"
                    alignItems="center"
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
    </Wrapper>
  );
};

export default Attribution;

Attribution.propTypes = {
  attr: PropTypes.array.isRequired,
};

Attribution.defaultProps = {
  attr: null,
};
