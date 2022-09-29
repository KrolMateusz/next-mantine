import React from 'react'
import { PasswordInput, TextInput, Checkbox, Button, Box , Group} from '@mantine/core'
import Layout from '../components/Layout'
import { useForm } from '@mantine/form'

const Login = () => {
    const form = useForm({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            termsOfService: false,
            password: '',
            confirmPassword: '',
        },
        validate: {
            name: (value) => (value && value.length >= 2 ? null : 'Minimum 2 letters'),
            lastname: (value) => (value && value.length >= 2 ? null : 'Minimum 2 letters'),
            email: (value) => (value && /^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) ? null : 'Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number'),
            confirmPassword: (value, values) => value !== values.password ? 'Passwords did not match' : null,
        },
    })

  return (
    <Layout>
        <Box sx={{ maxWidth: 500 }} pt='sm' mx='auto'>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    {...form.getInputProps('name')}
                />

                <TextInput
                    label="Last name"
                    placeholder="Your last name"
                    {...form.getInputProps('lastname')}
                />

                <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    {...form.getInputProps('password')}
                />

                <PasswordInput
                    mt="sm"
                    label="Confirm password"
                    placeholder="Confirm password"
                    {...form.getInputProps('confirmPassword')}
                />

                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    </Layout>
  )
}

export default Login