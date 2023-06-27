import { Form } from "react-router-dom"
import { Button, TextInput } from 'flowbite-react';

function LogInPage () {
    return(
        <>
        <div className="logIn">
                <h2>Sign in</h2>
                <h5>to continue to YouTube</h5>

            <Form className="flex max-w-md flex-col gap-4" action="../root">
                <div>                 
                    <TextInput
                    id="email1"
                    placeholder="Email Address"
                    required
                    type="email"
                    />
                </div>
                <div>                 
                    <TextInput
                    id="password1"
                    placeholder="Your Password"
                    required
                    type="password"
                    />
                </div>
               
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </>
    )
}   

export default LogInPage