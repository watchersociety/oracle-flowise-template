import { SignIn, SignUp } from '@clerk/clerk-react'

function AuthPage() {
    return (
        <div>
            <SignIn path='/sign-in' />
            <SignUp path='/sign-up' />
        </div>
    )
}

export default AuthPage
