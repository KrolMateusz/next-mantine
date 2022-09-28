import React, { useState } from 'react'
import { IconLayoutBoard, IconChartBar, IconFileDollar, IconShip, IconViewfinder, IconTriangleSquareCircle, TablerIcon } from '@tabler/icons'
import { Navbar, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors.blue[ 1 ],
        borderRight: 'none',
        position: 'fixed'
    },
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
  },
  active: {
    '&::before': {
        content: '""',
        width: 4,
        height: 24,
        position: 'absolute',
        left: -16,
        backgroundColor: theme.colors.blue[ 2 ],
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const linksData = [
    { icon: IconLayoutBoard, label: 'Dashboard' },
    { icon: IconChartBar, label: 'MarketIntelligence' },
    { icon: IconFileDollar, label: 'My Cargoes' },
    { icon: IconShip, label: 'My Freights' },
    { icon: IconViewfinder, label: 'Trade ops' },
    { icon: IconTriangleSquareCircle, label: 'My products' },
]

const Sidebar = () => {
    const [ active, setActive ] = useState(0);
    const { classes } = useStyles();

    const links = linksData.map((link, index) => (
        <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
    ))

  return (
    <>
        <Navbar className={classes.navbar} width={{ base: 90 }} p="md">
            <Navbar.Section grow mt={50}>
                <Stack justify='center' spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
        </Navbar>
        <div>ELOOO</div>
    </>
  )
}

export default Sidebar