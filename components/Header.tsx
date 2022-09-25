import { createStyles, Header as MHeader, Group, Burger, Text, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBell, IconChevronDown } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  inner: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.white,
    backgroundColor: theme.colors.blue[ 1 ],
  },
  avatar: {
    color: theme.white,
    backgroundColor: theme.colors.blue[ 0 ]
  },
  chevronRotated: {
    transform: 'rotate(180deg)',
  }
}));

export interface Link {
    link: string,
    label: string
}

interface HeaderSearchProps {
  links: Link[];
}

export default function Header({ links }: HeaderSearchProps) {
  const [isBurgerOpened, { toggle: toggleBurger }] = useDisclosure(false);
  const [isChevronOpened, { toggle: toggleChevron }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <MHeader height={56} mb={120}>
      <div className={classes.inner}>
        <Group>
          <IconBrandGithub />
          <Text transform='uppercase' weight='bold'>My materials</Text>
          <Burger color={'white'} opened={isBurgerOpened} onClick={toggleBurger} size="sm" />
        </Group>

        <Group spacing={'lg'}>
        <IconBell />
        <Avatar className={classes.avatar} radius="xl">MK</Avatar>
        <IconChevronDown className={`${isChevronOpened ? classes.chevronRotated : ''}`} onClick={toggleChevron} />
        </Group>
      </div>
    </MHeader>
  );
}