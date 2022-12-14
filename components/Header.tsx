import { createStyles, Header as MHeader, Group, Burger, Text, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBell, IconChevronDown } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
    header: {
        color: theme.white,
        backgroundColor: theme.colors.blue[ 1 ],
        borderBottom: 'none',
        position: 'fixed'
    },
  inner: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    color: theme.white,
    backgroundColor: theme.colors.blue[ 0 ]
  },
  chevron: {
    transition: 'transform 300ms ease'
  }
}));

export default function Header() {
  const [isBurgerOpened, { toggle: toggleBurger }] = useDisclosure(false);
  const [isChevronOpened, { toggle: toggleChevron }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <MHeader className={classes.header} height={56}>
      <div className={classes.inner}>
        <Group>
          <IconBrandGithub />
          <Text transform='uppercase' weight='bold'>My materials</Text>
          <Burger color={'white'} opened={isBurgerOpened} onClick={toggleBurger} size="sm" />
        </Group>

        <Group spacing={'lg'}>
        <IconBell />
        <Avatar className={classes.avatar} radius="xl">MK</Avatar>
        <IconChevronDown style={{ transform: isChevronOpened ? `rotate(180deg)` : 'none' }} className={classes.chevron} onClick={toggleChevron} />
        </Group>
      </div>
    </MHeader>
  );
}