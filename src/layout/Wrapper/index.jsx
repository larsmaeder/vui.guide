import * as React from "react";
import PropTypes from "prop-types";
import { Flex, Box, Grid } from "@chakra-ui/react";
import { pageGutter, pageWidth } from "../../theme";

const Wrapper = ({ children, ...props }) => {
  return (
    <Box id={props.id} as={props.as} color={props.color} bg={props.bg}>
      <Flex justify="center" paddingX={!props.gutters ? 0 : pageGutter}>
        <Box w={props.fluid ? "full" : pageWidth} py={props.py} pos="relative">
          {props.grid ? (
            <Grid templateColumns={props.templateColumns} gap={props.gap}>
              {children}
            </Grid>
          ) : (
            children
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  id: PropTypes.string,
  as: PropTypes.string,
  color: PropTypes.string,
  bg: PropTypes.string,
  gutters: PropTypes.bool,
  fluid: PropTypes.bool,
  py: PropTypes.object,
  grid: PropTypes.bool,
  templateColumns: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  id: undefined,
  as: "div",
  color: "inherit",
  bg: "none",
  gutters: true,
  fluid: false,
  py: { base: 16, md: 32 },
  grid: false,
  templateColumns: "repeat(3, 1fr)",
  gap: 12,
  children: null,
};
