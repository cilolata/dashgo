import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import SideBar from "../components/SideBar"
import { theme } from "../styles/theme";


const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18',
      '2021-03-19',
      '2021-03-20',
      '2021-03-21',
      '2021-03-22',
      '2021-03-23',
      '2021-03-24',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }

  }
}

const series = [
  {
    name: 'series1', data: [31, 21, 32, 10, 9, 10, 23]
  }
]

export default function Dashboard() {
  return (
    <Flex direction={'column'} h={'100vh'}>
      <Header />

      <Flex w={'100%'} my={'6'} maxWidth={1400} mx={'auto'} px={'6'}>
        <SideBar />
        <SimpleGrid flex={'1'} gap='4' minChildWidth={'320px'} alignItems='flex-start'>
          <Box
            p={['6','8']}
            bg={'gray.800'}
            borderRadius={8}
            pb={'4'}
          >
            <Text fontSize={'lg'} mb={'4'}>Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={168} />
          </Box>
          <Box
            p={'8'}
            bg={'gray.800'}
            borderRadius={8}
          >
            <Text fontSize={'lg'} mb={'4'}>Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={168} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}