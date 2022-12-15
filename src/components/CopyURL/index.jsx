import * as React from "react";
import { IconButton, Tooltip, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Toast from "../Toast";

const CopyURL = ({ currentUrl }) => {
  const toast = useToast();
  const toastIdRef = React.useRef();
  function closeToast() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }
  function copyLink() {
    // using the Clipboard API to copy the current page's link to the clipboard
    navigator.clipboard.writeText(currentUrl);
    // generate Toast with IdRef
    toastIdRef.current = toast({
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
