import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
  }

export function PaginationItem ({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
    if(isCurrent) {
    return(
        <Button
            size={'sm'}
            fontSize={'xs'}
            width={'4'}
            colorScheme={isCurrent ? " pink": ""}
            disabled
            _disabled={{
                bgColor: ' pink.500',
                cursor: 'default'
            }}
        >
            {number}
        </Button>
     )
    }

    return (
        <Button
        size={'sm'}
        fontSize={'xs'}
        width={'4'}
        colorScheme={'pink'}
        disabled
        _disabled={{
            bgColor: ' gray.400',
            cursor: 'default'
        }}
        _hover={{
            bgColor:'gray.500'
        }}
        onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}