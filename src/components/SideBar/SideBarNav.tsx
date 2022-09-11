import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";



const SideBarNav = () => {
    return (
        <Stack spacing={'12'} align={'flex-start'}>
            <NavSection title={"Geral"}>
                <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
            </NavSection>
            <NavSection title={"Automação"}>
                <NavLink icon={RiInputMethodLine}>Formulário</NavLink>
                <NavLink icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>
        </Stack>
    )
}

export default SideBarNav