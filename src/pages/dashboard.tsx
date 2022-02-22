import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
// import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

export default function Dashboard() {
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[500]
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            axisBorder: {
                color: theme.colors.gray[600],
            },
            axisTicks: {
                color: theme.colors.gray[600]
            },
            categories: [
                '2022-01-01T00:00:00.000Z',
                '2022-01-02T00:00:00.000Z',
                '2022-01-03T00:00:00.000Z',
                '2022-01-04T00:00:00.000Z',
                '2022-01-05T00:00:00.000Z',
                '2022-01-06T00:00:00.000Z',
                '2022-01-07T00:00:00.000Z',
            ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3,
            }
        }
    };
    const series = [
        { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }
    ];
    const series2 = [
        { name: 'series2', data: [82, 49, 78, 21, 44, 75, 90] }
    ];

    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid pleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                        <Chart options={options} series={series2} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>

    )
}