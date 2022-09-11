import { 
    Box, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerHeader, 
    DrawerOverlay, 
    useBreakpointValue 
} from "@chakra-ui/react";
import { useSideBarDrawer } from "../../context/sideBarContext";
import SideBarNav from "./SIdeBarNav";


export default function SideBar() {
    const { isOpen, onClose } = useSideBarDrawer()
    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isDrawerSideBar) {
        return (
            <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg={'gray.800'} p={'4'}>
                        <DrawerCloseButton mt={'6'}>
                            <DrawerHeader>
                                Navegação
                            </DrawerHeader>
                            <DrawerBody>
                                <SideBarNav />
                            </DrawerBody>
                        </DrawerCloseButton>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as={'aside'} w={'64'} mr={'8'}>
            <SideBarNav />
        </Box>
    )
}