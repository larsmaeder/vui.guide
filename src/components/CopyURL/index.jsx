import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { IconButton, Tooltip, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Toast from "../Toast";

const CopyURL = ({ currentUrl }) => {
  // hooks
  const toast = useToast();
  // generate unique Id
  let id = uuidv4();
  // check Id and close Toast if matching
  function closeToast() {
    if (id) {
      toast.close(id);
    }
  }
  function copyLink() {
    // using the Clipboard API to copy the current page's link to the clipboard
    navigator.clipboard.writeText(currentUrl);
    // generate Toast with unique IdRef
    if (!toast.isActive(id)) {
      toast({
        id,
        position: "top-right",
        duration: 4000,
        render: () => (
          <Toast
            title="Ready to share!"
            description="We’ve copied the page link to your clipboard."
            closeFunc={closeToast}
          />
        ),
      });
    }
  }
  return (
    <Tooltip
      aria-label="Click to copy page link"
      label="Copy page link"
      placement="bottom-start"
    >
      <IconButton
        aria-label="Copy page link"
        icon={<CopyIcon />}
        color="sundial.500"
        background="sundial.100"
        _hover={{ background: "sundial.200 " }}
        size="lg"
        onClick={copyLink}
      />
    </Tooltip>
  );
};

export default CopyURL;
