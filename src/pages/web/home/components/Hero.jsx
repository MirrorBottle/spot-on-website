import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.white,
    minHeight: "90vh"
  },

  inner: {
    paddingTop: rem(230),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontSize: rem(90),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },
}));

export default function HomeHero() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner} size="76rem">
        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'brand', to: 'blue' }} inherit>
            #BisnisAkurat
          </Text> Terpecaya,<br/>Sukses Bisnis Menanti di <Text component="span" variant="gradient" gradient={{ from: 'brand', to: 'blue' }} inherit>
            SpotOn
          </Text>
        </h1>

        <Text className={classes.description} mt={30} mb={40}>
        Bisnis yang sukses dimulai dari akurasi. Dengan SpotOn, Anda memiliki kendali penuh atas penjualan, stok, dan laporan. Jadikan bisnis Anda lebih baik dengan #BisnisAkurat.
        </Text>

        <Group mt="xl">
          <Button
            size="xl"
            variant="gradient"
            gradient={{ from: 'brand', to: 'blue' }}
          >
            Cobain, yuk!
          </Button>
        </Group>
      </Container>
    </div>
  );
}