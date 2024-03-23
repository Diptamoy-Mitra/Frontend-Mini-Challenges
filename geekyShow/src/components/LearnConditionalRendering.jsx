import React from 'react'

export default function LearnConditionalRendering() {

    const status = false;
    const [isLogin, setIsLogin] = React.useState(false)
    return (


        <>
            {
                status ? <h1>True</h1> : <h1>False</h1>

            }
            <hr />
            {
                isLogin ? (
                   <><h1>welcome to dashboard</h1><button onClick={() => setIsLogin(false)}>Log Out</button></>
                ):(
                  <><h1>Welcome to Login Page</h1><button onClick={() => setIsLogin(true)}>Log In</button></>
                )
            }
           
        </>
    )
}
