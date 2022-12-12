import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const CopyURL = () => {
  return (
    <IconButton
      aria-label="Search database"
      icon={<CopyIcon />}
      variant="sundial"
    />
  );
};

export default CopyURL;
