import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Text,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  useBreakpointValue,
  Spinner,
  Link,
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import SideBar from '../../components/SideBar'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'
import NextLink from 'next/link';
import { getUsers, useUsers } from '../../services/hooks/useUsers'

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface UserListProps {
  users: User[];
}

const UsersList = ({ users }: UserListProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error, isFetching } = useUsers(currentPage, {
    initialData: users,
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ['users', userId],
      async () => {
        const { data } = await api.get(`users/${userId}`);

        return data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      }
    );
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Listagem de usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text fontWeight="bold">Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>Usuário</Th>

                    {isWideVersion && <Th>Data de cadastro</Th>}

                    <Th w="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data.users.map((user) => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>

                      <Td>
                      <Box>
                            <Link
                            color="purple.400"
                            onMouseEnter={() => handlePrefetchUser(user.id)} 
                            href={''}                            >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>

                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>

                      {isWideVersion && <Td>{user.createdAt}</Td>}

                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={
                            <Icon
                              as={RiPencilLine}
                              fontSize="16"
                              marginInlineEnd={isWideVersion ? 0 : -2}
                            />
                          }
                        >
                          {isWideVersion && 'Editar'}
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default UsersList