import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { SignIn, SignInWithGoogle } from '../../firebase.config'
import GoogleButton from 'react-google-button'

function Login() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const navigate = useNavigate();
    const { toggleAuth } = useContext(AuthContext);


    const handleGoogleBtn = async () => {
        try {
            const user = await SignInWithGoogle();
            toggleAuth(user);
            navigate("/")

        } catch (error) {
            console.error(error)
        }

    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        const user = await SignIn(email, passwd);

        if (user) {
            toggleAuth(user);
            navigate("/");
            
        }else{
            alert("Incorrect email or password.");
        }
    
};


return (
    <div className='w-[100vw] h-auto flex justify-center bg-gradient-to-tl from-[#153677] to-[#4e085f]'>
        <div className='min-h-[100vh] min-w-[100vw] flex flex-col items-center gap-7 md:min-w-[500px] md:w-[600px] bg-white'>

            <div className='flex flex-col justify-center items-center gap-5'>
                <img
                    src="https://placehold.co/600x400"
                    alt="log in image "
                    className='w-auto'
                />
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-serif font-bold'>Sign in</h2>
                    <p className='text-gray-500'>No registered yet? <Link className="text-blue-500" to="/signup">sign up</Link></p>
                </div>

            </div>

            <div className='flex flex-col items-center gap-3'>
                <h3 className='text-xl font-serif'>Sign in with google</h3>
                <GoogleButton onClick={() => handleGoogleBtn()} />
            </div>

            <div className='block h-[1px] w-[80%] bg-gray-500 ' />

            <form
                onSubmit={() => handleSubmit(event)}
                className='w-[90%] flex flex-col items-center gap-4 '
            >
                <div className='flex flex-col'>
                    <label className="text-xl font-serif" htmlFor="email">Email</label>
                    <input
                        required
                        id="email"
                        type="text"
                        name="email"
                        className="border-b border-gray-400 text-xl focus:outline-none"
                        value={email}
                        onChange={(text) => setEmail(text.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    <label className="text-xl font-serif" htmlFor="passwd">Password</label>
                    <input
                        required
                        type="password"
                        name="passwd"
                        id="passwd"
                        className="border-b border-gray-400 text-xl focus:outline-none"
                        value={passwd}
                        onChange={(text) => setPasswd(text.target.value)}
                    />
                </div>

                <div className='flex flex-col items-center'>
                    <input
                        type="submit"
                        value="Sign in"
                        className="px-20 py-2 rounded-sm bg-gradient-to-tr text-white font-bold to-[#153677] from-[#4e085f]  hover:cursor-pointer "
                    />
                    <a className="text-sm text-gray-500" href="">Forgot the password?</a>
                </div>

            </form>
        </div>
    </div>
);
}

export default Login;

