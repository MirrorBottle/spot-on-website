import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
  Container,
} from '@mantine/core';
import { IconBook,
  IconBuildingWarehouse,
  IconCoin,
  IconReportAnalytics} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconBook,
    title: 'Jurnal',
    description: 'Catat transaksi dengan akurat menggunakan jurnal SpotOn. Pantau aktivitas keuangan dengan mudah dan tepat.',
  },
  {
    icon: IconCoin,
    title: 'Penjualan',
    description: 'Mudah kelola penjualan dan pendapatan. SpotOn memastikan manajemen penjualan lancar dan akurat untuk pertumbuhan bisnis.',
  },
  {
    icon: IconBuildingWarehouse,
    title: 'Gudang',
    description:
      'Pertahankan stok optimal dengan manajemen gudang SpotOn. Hindari kelebihan atau kekurangan stok untuk operasi yang mulus',
  },
  {
    icon: IconReportAnalytics,
    title: 'Laporan',
    description:
      'Buat laporan komprehensif yang memberikan wawasan berharga. Laporan rinci SpotOn memperkuat strategi bisnis Anda.',
  },
];

export default function HomeFeatures() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={76}
        radius="md"
        variant="gradient"
        gradient={{ from: 'brand', to: 'blue' }}
      >
        <feature.icon size={rem(50)} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" fw={500} fz="xl">
        {feature.title}
      </Text>
      <Text c="dimmed" fz="lg">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container size="76rem" mb="xl" mt={120}>
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
            Fitur Keren, Bikin Bisnismu Makin Oke
            </Title>
            <Text c="dimmed" fz="xl">
              Stok terkelola baik, penjualan lancar, laporan komprehensif, pemesanan praktis. SpotOn, solusi terlengkap untuk sukses bisnismu
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'brand', to: 'blue' }}
              size="xl"
              mt="xl"
            >
              Lihat Semua
            </Button>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    </Container>
  );
}