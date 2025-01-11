import { useContext, useState } from 'react';
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router';
import { createUser, SignInWithGoogle } from '../../firebase.config';
import { AuthContext } from '../Auth/AuthContext';

function Register() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [passwd2, setPasswd2] = useState("");
    const [passwdError, setPasswdError] = useState(false);

    const { _, toggleAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (passwd === passwd2 && passwd.length > 4) {
            setPasswdError(false);
            
            createUser(email, passwd, name, phone)
            .then( user =>{

                // error 400 email already exists
                if(user == "400"){
                    alert("Email already exists");
                    throw new Error("Email already exists");
                }
    
                // 200 ok
                toggleAuth(user);
                navigate("/");
            
            }).catch( error => {
                if (passwd.length < 4) {
                    alert("Password must be bigger than 4 characters")
                }else{
                    console.error("error");
                }
                setPasswdError(true);
            });

        }
    }

    const handleGoogleBtn = async () => {
        try{
            const  user = await SignInWithGoogle();
            toggleAuth(user);
            navigate("/")

        }catch (error){
            console.error(error)
        }
        
    }

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
                    <GoogleButton onClick={() => handleGoogleBtn()} />
                </div>

                <div className='block h-[1px] w-[80%] bg-gray-500 ' />

                <form
                    onSubmit={(event) => handleSubmit(event)}
                    className='w-[90%] flex flex-col items-center gap-4 '>

                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="name">Name</label>
                        <input value={name} onChange={(text) => { setName(text.target.value) }} id="name" required className="border-b border-gray-400 text-xl focus:outline-none" type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="phone">Phone number</label>
                        <input value={phone} onChange={(text) => { setPhone(text.target.value) }} id="phone" required className="border-b border-gray-400 text-xl focus:outline-none" type="number" />
                    </div>

                    <div className='flex flex-col'>
                        <label className="text-xl font-serif" htmlFor="email">Email</label>
                        <input value={email} onChange={(text) => { setEmail(text.target.value) }} id="email" required className="border-b border-gray-400 text-xl focus:outline-none" type="email" />
                    </div>

                    <div className='flex flex-col'>
                        <label className={`text-xl font-serif ${passwdError ? "text-red-600" : ""}`} htmlFor="passwd">Password</label>
                        <input
                            value={passwd}
                            onChange={(text) => { setPasswd(text.target.value) }}
                            required
                            className={`border-b border-gray-400 text-xl focus:outline-none ${passwdError ? "text-red-600 border-b-red-600" : ""} `}
                            type="password"
                            name="passwd"
                            id="passwd" />
                    </div>

                    <div className='flex flex-col'>
                        <label className={`text-xl font-serif ${passwdError ? "text-red-600" : ""}`} htmlFor="Rpasswd">Repeat Password </label>
                        <input
                            value={passwd2}
                            onChange={
                                (text) => {
                                    setPasswd2(text.target.value)
                                }
                            }
                            required
                            className={`border-b border-gray-400 text-xl focus:outline-none ${passwdError ? "text-red-600 border-b-red-600" : ""} `}
                            type="password"
                            name="Rpasswd"
                            id="Rpasswd" />
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