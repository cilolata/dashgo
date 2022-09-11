import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";


//controlled components - componentes que a gente controla o estado através de states

//uncontrolled = acessamos o valor do input só quando precisamos - não armazena o valor do input em um estado - nós acessamos o valor no momento em que precisamos

//realizamos o acesso do uncontrolled component através de uma ref 

// interface imperativa vs declarativa

//imperativa: quando dizemos o que queremos fazer para o código - estamos dizendo exatamente a instrução para o código
//declarativa: quando eu digo o que eu espero através de uma ação e aquilo acontece de forma automática (tipo através de uma condição)

//debounce - não faz a busca em cada caractere. só faz a chamada quando ela parar de digitar

export function SearchBox() {

    const searchInputRef = useRef<HTMLInputElement>(null)

    return (
        <Flex
            as={'label'}
            flex={'1'}
            padding={'4'}
            px={'8'}
            ml={'6'}
            maxWidth={488}
            alignSelf={'center'}
            color={'gray.200'}
            position={'relative'}
            bg={'gray.800'}
            borderRadius={'full'}
        >
            <Input
                color={'gray.500'}
                variant={'unstyled'}
                paddingX={'4'}
                mr={'4'}
                placeholder={'Buscar pela plataforma'}
                _placeholder={{
                    color: 'gray.400'
                }}
                ref={searchInputRef}
            />
            <Icon as={RiSearchLine} fontSize={'20'} />

        </Flex>
    )
}