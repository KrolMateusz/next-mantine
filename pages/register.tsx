import React from 'react'
import { PasswordInput, TextInput, Checkbox, Button, Box , Group} from '@mantine/core'
import Layout from '../components/Layout'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'

const schema = z
    .object({
        name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
        lastname: z.string().min(2, { message: 'Last name should have at least 2 letters' }),
        email: z.string().email('Invalid email'),
        password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number'),
        confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: [ "confirmPassword" ]
    })

const Register = () => {
    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            termsOfService: false,
            password: '',
            confirmPassword: '',
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

export default Register