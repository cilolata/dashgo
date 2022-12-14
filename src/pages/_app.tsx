import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { SideBarDrawerProvider } from "../context/sideBarContext"
import { makeServer } from "../services/mirage"
import { theme } from "../styles/theme"
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from "../services/queryClient"


if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
