import * as React from "react";
import PropTypes from "prop-types";
import { Flex, Box, Grid } from "@chakra-ui/react";
import { pageGutter, pageWidth } from "../../theme";

const Wrapper = ({
  children,
  id,
  as,
  color,
  bg,
  gutters,
  fluid,
  pt,
  pb,
  grid,
  templateColumns,
  gap,
  rowGap,
  columnGap,
  ...rest
}) => {
  return (
    <Box id={id} as={as} color={color} bg={bg} {...rest}>
      <Flex justify="center" px={!gutters ? 0 : pageGutter}>
        <Box w={fluid ? "full" : pageWidth} pt={pt} pb={pb} pos="relative">
          {grid ? (
            <Grid
              templateColumns={templateColumns}
              gap={gap}
              rowGap={rowGap}
              columnGap={columnGap}
            >
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
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  grid: PropTypes.bool,
  templateColumns: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  rowGap: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  columnGap: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  id: undefined,
  as: "div",
  color: "inherit",
  bg: "none",
  gutters: true,
  fluid: false,
  pt: { base: 16, md: 32 },
  pb: { base: 16, md: 32 },
  grid: false,
  templateColumns: "repeat(3, 1fr)",
  gap: { base: 6, md: 12 },
  rowGap: undefined,
  columnGap: undefined,
  children: null,
};
