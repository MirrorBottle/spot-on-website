import { createStyles, Text, rem, Container, Group, Badge, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.blue} 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.white,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.xl,
  },

  count: {
    color: theme.white,
    fontSize: rem(50),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.lg,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
  containerTitle: {
    fontSize: rem(60),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  containerDescription: {
    maxWidth: 800,
    margin: 'auto',
    fontSize: rem(20),
    marginBottom: 30
  },
}));

export default function HomeStats({ data }) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return (
    <Container size="76rem" mb="xl">
      <Group position="center">
        <Badge variant="gradient" gradient={{ from: 'brand', to: 'blue' }} size="xl">
          Terbaik di Kelasnya
        </Badge>
      </Group>

      <Title order={2} className={classes.containerTitle} ta="center" mt="sm">
        Tidak Percaya? Biarkan <Text component="span" variant="gradient" gradient={{ from: 'brand', to: 'blue' }} inherit> Data </Text> Berbicara
      </Title>

      <Text c="dimmed" className={classes.containerDescription} ta="center" mt="md">
        Di SpotOn, kita tahu kalau sukses bisnis tuh nggak cuma soal ide besar, tapi juga soal pengelolaan yang tepat. Makanya, kita bangga banget dengan capaian kita
      </Text>

      <div className={classes.root}>{stats}</div>
    </Container>
  );
}