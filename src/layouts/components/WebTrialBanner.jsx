import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';


function Dots({ size = 185, radius = 2.5, ...others }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      fill="blue"
      viewBox="0 0 185 185"
      width={size}
      height={size}
      {...others}
    >
      <rect width="5" height="5" rx={radius} />
      <rect width="5" height="5" x="60" rx={radius} />
      <rect width="5" height="5" x="120" rx={radius} />
      <rect width="5" height="5" x="20" rx={radius} />
      <rect width="5" height="5" x="80" rx={radius} />
      <rect width="5" height="5" x="140" rx={radius} />
      <rect width="5" height="5" x="40" rx={radius} />
      <rect width="5" height="5" x="100" rx={radius} />
      <rect width="5" height="5" x="160" rx={radius} />
      <rect width="5" height="5" x="180" rx={radius} />
      <rect width="5" height="5" y="20" rx={radius} />
      <rect width="5" height="5" x="60" y="20" rx={radius} />
      <rect width="5" height="5" x="120" y="20" rx={radius} />
      <rect width="5" height="5" x="20" y="20" rx={radius} />
      <rect width="5" height="5" x="80" y="20" rx={radius} />
      <rect width="5" height="5" x="140" y="20" rx={radius} />
      <rect width="5" height="5" x="40" y="20" rx={radius} />
      <rect width="5" height="5" x="100" y="20" rx={radius} />
      <rect width="5" height="5" x="160" y="20" rx={radius} />
      <rect width="5" height="5" x="180" y="20" rx={radius} />
      <rect width="5" height="5" y="40" rx={radius} />
      <rect width="5" height="5" x="60" y="40" rx={radius} />
      <rect width="5" height="5" x="120" y="40" rx={radius} />
      <rect width="5" height="5" x="20" y="40" rx={radius} />
      <rect width="5" height="5" x="80" y="40" rx={radius} />
      <rect width="5" height="5" x="140" y="40" rx={radius} />
      <rect width="5" height="5" x="40" y="40" rx={radius} />
      <rect width="5" height="5" x="100" y="40" rx={radius} />
      <rect width="5" height="5" x="160" y="40" rx={radius} />
      <rect width="5" height="5" x="180" y="40" rx={radius} />
      <rect width="5" height="5" y="60" rx={radius} />
      <rect width="5" height="5" x="60" y="60" rx={radius} />
      <rect width="5" height="5" x="120" y="60" rx={radius} />
      <rect width="5" height="5" x="20" y="60" rx={radius} />
      <rect width="5" height="5" x="80" y="60" rx={radius} />
      <rect width="5" height="5" x="140" y="60" rx={radius} />
      <rect width="5" height="5" x="40" y="60" rx={radius} />
      <rect width="5" height="5" x="100" y="60" rx={radius} />
      <rect width="5" height="5" x="160" y="60" rx={radius} />
      <rect width="5" height="5" x="180" y="60" rx={radius} />
      <rect width="5" height="5" y="80" rx={radius} />
      <rect width="5" height="5" x="60" y="80" rx={radius} />
      <rect width="5" height="5" x="120" y="80" rx={radius} />
      <rect width="5" height="5" x="20" y="80" rx={radius} />
      <rect width="5" height="5" x="80" y="80" rx={radius} />
      <rect width="5" height="5" x="140" y="80" rx={radius} />
      <rect width="5" height="5" x="40" y="80" rx={radius} />
      <rect width="5" height="5" x="100" y="80" rx={radius} />
      <rect width="5" height="5" x="160" y="80" rx={radius} />
      <rect width="5" height="5" x="180" y="80" rx={radius} />
      <rect width="5" height="5" y="100" rx={radius} />
      <rect width="5" height="5" x="60" y="100" rx={radius} />
      <rect width="5" height="5" x="120" y="100" rx={radius} />
      <rect width="5" height="5" x="20" y="100" rx={radius} />
      <rect width="5" height="5" x="80" y="100" rx={radius} />
      <rect width="5" height="5" x="140" y="100" rx={radius} />
      <rect width="5" height="5" x="40" y="100" rx={radius} />
      <rect width="5" height="5" x="100" y="100" rx={radius} />
      <rect width="5" height="5" x="160" y="100" rx={radius} />
      <rect width="5" height="5" x="180" y="100" rx={radius} />
      <rect width="5" height="5" y="120" rx={radius} />
      <rect width="5" height="5" x="60" y="120" rx={radius} />
      <rect width="5" height="5" x="120" y="120" rx={radius} />
      <rect width="5" height="5" x="20" y="120" rx={radius} />
      <rect width="5" height="5" x="80" y="120" rx={radius} />
      <rect width="5" height="5" x="140" y="120" rx={radius} />
      <rect width="5" height="5" x="40" y="120" rx={radius} />
      <rect width="5" height="5" x="100" y="120" rx={radius} />
      <rect width="5" height="5" x="160" y="120" rx={radius} />
      <rect width="5" height="5" x="180" y="120" rx={radius} />
      <rect width="5" height="5" y="140" rx={radius} />
      <rect width="5" height="5" x="60" y="140" rx={radius} />
      <rect width="5" height="5" x="120" y="140" rx={radius} />
      <rect width="5" height="5" x="20" y="140" rx={radius} />
      <rect width="5" height="5" x="80" y="140" rx={radius} />
      <rect width="5" height="5" x="140" y="140" rx={radius} />
      <rect width="5" height="5" x="40" y="140" rx={radius} />
      <rect width="5" height="5" x="100" y="140" rx={radius} />
      <rect width="5" height="5" x="160" y="140" rx={radius} />
      <rect width="5" height="5" x="180" y="140" rx={radius} />
      <rect width="5" height="5" y="160" rx={radius} />
      <rect width="5" height="5" x="60" y="160" rx={radius} />
      <rect width="5" height="5" x="120" y="160" rx={radius} />
      <rect width="5" height="5" x="20" y="160" rx={radius} />
      <rect width="5" height="5" x="80" y="160" rx={radius} />
      <rect width="5" height="5" x="140" y="160" rx={radius} />
      <rect width="5" height="5" x="40" y="160" rx={radius} />
      <rect width="5" height="5" x="100" y="160" rx={radius} />
      <rect width="5" height="5" x="160" y="160" rx={radius} />
      <rect width="5" height="5" x="180" y="160" rx={radius} />
      <rect width="5" height="5" y="180" rx={radius} />
      <rect width="5" height="5" x="60" y="180" rx={radius} />
      <rect width="5" height="5" x="120" y="180" rx={radius} />
      <rect width="5" height="5" x="20" y="180" rx={radius} />
      <rect width="5" height="5" x="80" y="180" rx={radius} />
      <rect width="5" height="5" x="140" y="180" rx={radius} />
      <rect width="5" height="5" x="40" y="180" rx={radius} />
      <rect width="5" height="5" x="100" y="180" rx={radius} />
      <rect width="5" height="5" x="160" y="180" rx={radius} />
      <rect width="5" height="5" x="180" y="180" rx={radius} />
    </svg>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(52),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function WebTrialBanner() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size="100wh">
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 200 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 260 }} />
      <Dots className={classes.dots} style={{ right: 60, top: 260 }} />



      <div className={classes.inner}>
        <Container size="76rem">
          <Title className={classes.title}>
            Bisnis Lancar, Cepat, dan Lebih Mudah dengan <Text component="span" variant="gradient" gradient={{ from: 'brand', to: 'blue' }} inherit>SpotOn</Text>
          </Title>

          <Container p={0} size={800}>
            <Text size="xl" color="dimmed" className={classes.description}>
              Coba sekarang! Buka potensi bisnismu dengan uji coba 30 hari. Rasakan manajemen yang lancar, akurat, dan laporan yang penuh wawasan.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button className={classes.control} size="xl" variant="default" color="gray">
              Jadwalkan Demo
            </Button>
            <Button className={classes.control} size="xl" variant="gradient"
              gradient={{ from: 'brand', to: 'blue' }}>
              Coba Gratis 30 Hari
            </Button>
          </div>
        </Container>
      </div>
    </Container>
  );
}