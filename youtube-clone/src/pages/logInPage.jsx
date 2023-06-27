import { Form } from "react-router-dom"
function LogInPage () {
    return(
        <>
            <div>
                <img src="" alt="" />
                <h2>Sign in</h2>
                <h5>to continue to YouTube</h5>
                <Form action="../root"> 
                    <h1>Insert Image holder</h1>
                    <input 
                        type="text"
                        placeholder="First Name"
                    /> <br />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                    /> <br />
                     <input 
                        type="text" 
                        placeholder="Email Address"
                     /> <br />
                    <input 
                        type="password"                        
                        placeholder="Password"
                    /> <br />
                    <button type="submit">Submit</button>
                </Form>
            </div>
        </>
    )
}   

export default LogInPage