import type { NextPage } from 'next'
import { createStyles, Button } from '@mantine/core';
import Header, { Link } from '../components/Header';

const useStyles = createStyles((theme, _params, getRef) => ({
    header: {
        color: theme.colors.red[5]
    },
    button: {
        backgroundColor: theme.white,
        color: theme.colors.blue[7]
    }
}))

const Dashboard: NextPage = () => {
    const { classes } = useStyles();
    const links: Link[] = [
        {
            label: 'Google',
            link: 'https://www.google.com/'
        },
        {
            label: 'Facebook',
            link: 'https://www.facebook.com/'
        },
    ]

    return (
        <>
            {/* <h1 className={classes.header}>Welcome back Alexandru!</h1>
            <Button className={classes.button} radius="xl" size="md">
                Hello World
            </Button> */}
            <Header links={links} />
        </>
    )
}

export default Dashboard