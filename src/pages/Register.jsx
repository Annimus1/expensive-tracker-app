import GoogleButton from 'react-google-button'
import { Link } from 'react-router';

function Register() {
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
                        <h2 className='text-4xl font-serif font-bold'>Sign up</h2>
                        <p className='text-gray-500'>Already have an account? <Link className="text-blue-500" to="/signin">sign in</Link></p>
                    </div>

                </div>

                <div className='flex flex-col items-center gap-3'>
                    <h3 className='text-xl font-serif'>Sign up with google</h3>
                    <GoogleButton />
                </div>

                <div className='block h-[1px] w-[80%] bg-gray-500 ' />

                <form className='w-[90%] flex flex-col items-center gap-4 '>
                    
                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="email">Name</label>
                        <input id="email" required className="border-b border-gray-400 text-xl focus:outline-none" type="text" name="email" />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="email">Phone number</label>
                        <input id="email" required className="border-b border-gray-400 text-xl focus:outline-none" type="text" name="email" />
                    </div>

                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="email">Email</label>
                        <input id="email" required className="border-b border-gray-400 text-xl focus:outline-none" type="text" name="email" />
                    </div>

                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="passwd">Password</label>
                        <input required className="border-b border-gray-400 text-xl focus:outline-none" type="paswword" name="passwd" id="passwd" />
                    </div>

                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="passwd">Repeat Password </label>
                        <input required className="border-b border-gray-400 text-xl focus:outline-none" type="paswword" name="passwd" id="passwd" />
                    </div>

                    <div className='flex flex-col items-center mb-10'>
                        <input
                            type="submit"
                            value="Sign up"
                            className="px-20 py-2 rounded-sm bg-gradient-to-tr text-white font-bold to-[#153677] from-[#4e085f]  hover:cursor-pointer "
                        />
                        <a className="text-sm text-gray-500" href="">Forgot the password?</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;

