import * as React from "react"
import { defineStyle, defineStyleConfig, IconButton } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const copy = defineStyle({
    background: "blue.400",
    borderColor: "blue.400",
    borderRadius: "full",
    _hover: {
        background: "blue.500",
        borderColor: "blue.500"
    },
    _active: {
        background: "blue.500",
        borderColor: "blue.500"
    }
});

export const buttonTheme = defineStyleConfig({
    variants: { copy }
})

const CopyURL = () => {
    return (
        <>
            <IconButton
                aria-label='Search database'
                icon={<CopyIcon />}
                variant="copy"
            />
        </>
    )
}

export default CopyURL