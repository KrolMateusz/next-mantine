import type { NextPage } from 'next'
import { createStyles, Button } from '@mantine/core';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout';

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

    return (
        <>
            {/* <h1 className={classes.header}>Welcome back Alexandru!</h1>
            <Button className={classes.button} radius="xl" size="md">
                Hello World
            </Button> */}
            <Layout />
        </>
    )
}

export default Dashboard