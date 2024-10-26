import { AuthType } from "@/enum/enums";
import { handleSignIn } from "@/lib/login-provider";
import { useActionState } from "react";
import SubmitButton from "./SubmitButton";

export default function LoginPage({ handleChangeAuth }:  {handleChangeAuth: (state: AuthType) => void;}) {
    const [state, action] = useActionState(handleSignIn, undefined)
    
    return (
    <div className='flex flex-col items-center'>
         <p className="text-4xl text-green-500 font-bold py-6">Welcome Back</p>

         <span className='text-gray-500 py-4'>Please login with your credentials</span>

         <form action={action} className='min-w-96 space-y-7 flex flex-col items-center my-4'>
            { state?.message && 
                <p 
                    className="text-rose text-center text-white p-4 my-4 rounded-xl bg-rose-500 bg-opacity-80">
                    {state.message}
                </p>}

            <div>
                <input 
                    type="text" 
                    name='username'
                    placeholder='Username' 
                    className='block h-12 text-lg min-w-80 bg-slate-300 bg-opacity-20 p-2' 
                    autoComplete="username"/>
                {
                    state?.error?.username ? 
                    state.error.username.map((error, index) => 
                        <p key={index} className='text-sm p-2 text-rose-500'>{error}</p>
                    ) : ''
                }
            </div>
            <div>
                <input 
                    type="password" 
                    name='password'
                    placeholder='Password'
                    autoComplete="new-password"
                    className='block h-12 text-lg min-w-80 bg-slate-300 bg-opacity-20 p-2' />
                    {
                    state?.error?.password ? 
                    state.error.password.map((error, index) => 
                        <p key={index} className='text-sm p-2 text-rose-500'>{error}</p>
                    ) : ''
                }
            </div>
            <SubmitButton>Login</SubmitButton>
         </form>

         <p 
            onClick={() => handleChangeAuth(AuthType.Register)} 
            className='hover:underline text-gray-500 mt-6 hover:cursor-pointer'>
                Create Account
        </p>
    </div>
    )
}
