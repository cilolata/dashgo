import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../context/sideBarContext";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
    const { onOpen } = useSideBarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return(
        <Flex
          as={'header'}
          w={'100%'}
          minW={1400}
          h='28'
          mx={'auto'}
          px={'6'}
          align={'center'}
        >
        { !isWideVersion && (
            <IconButton 
            aria-label="open nav"
            icon={<Icon as={RiMenuLine}/>}
            fontSize={'24'}
            variant={'unstyled'}
            onClick={onOpen}
            mr={'2'}
            >

            </IconButton>
        )}
        <Logo/>
        {isWideVersion && <SearchBox />}
        <Flex
        align={'center'}
        ml={'auto'}
        >
            <Notification/>
            <Profile showProfileData={isWideVersion} />
        </Flex>
    </Flex>
    )
}