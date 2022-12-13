import * as React from "react";
import { useState } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const CopyURL = () => {
  const currentUrl = window.location.href;
  const [copied, setCopied] = useState(false);
  function CopyLink() {
    // using the Clipboard API to copy the current page's link to the clipboard
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
  }
  return (
    <>
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
      {/* <div>
        {copied ? "Link copied to clipboard!" : "Copy link to clipboard"}
      </div> */}
    </>
  );
};

export default CopyURL;
