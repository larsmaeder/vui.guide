import * as React from "react";
import { IconButton, Tooltip, useToast, Text } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Toast from "../Toast";

const CopyURL = ({ currentUrl }) => {
  const toast = useToast();
  function CopyLink() {
    // using the Clipboard API to copy the current page's link to the clipboard
    navigator.clipboard.writeText(currentUrl);
    // toast feedback
    toast({
      position: "top-right",
      render: () => (
        <Toast
          title="Ready to share!"
          description="We’ve copied the page link to your clipboard."
        />
      ),
    });
  }
  return (
    <Tooltip
      aria-label="Click to copy page link"
      label="Copy page link"
      placement="bottom-start"
    >
      <IconButton
        aria-label="Search database"
        icon={<CopyIcon />}
        color="sundial.500"
        background="sundial.100"
        _hover={{ background: "sundial.200 " }}
        size="lg"
        onClick={CopyLink}
      />
    </Tooltip>
  );
};

export default CopyURL;
