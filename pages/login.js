import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

/**
 * Login Component
 *
 * This component provides a login form for users.
 * It checks user credentials against data stored in the session storage.
 * On successful login, it redirects the user to the home page.
 */


const Login = () => {
	 // Next.js router for navigation
	const router = useRouter();

	// Get user session data from session storage (client-side only)
	const getSession = typeof window !== 'undefined' ? JSON.parse(sessionStorage?.getItem("user")) : null;

	 // State to manage the form input values
	const [formState, setFormState] = useState({
		email: "",
		password: "",
	});

	/**
   * Handle input change
   * @param {Event} e - The change event.
   */
	const handleOnchange = (e) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	 /**
   * Login User
   * Checks user credentials and redirects on success.
   */

	const LoginUser = () => {
		if (
			formState?.email !== getSession?.email ||
			formState?.password !== getSession?.password
		)
		{
			// Invalid credentials alert if user put in a wrong information
			alert("invalid email or password, please regisiter to login");
		} else
		{
			// Successful login alert and redirection to home page valid credentiails
			alert("login successfull");
			router.push("/");
		}
	};

	return (
		<div>
			<div className='h-screen  flex justify-center items-center'>
				<div className='lg:w-[500px] md:w-1/2 w-2/3'>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							LoginUser();
						}}
						className='bg-white p-10 rounded-lg shadow-lg min-w-full'>
						<h1 className='text-center text-2xl mb-6 text-gray-600 font-bold font-sans'>
							FormLogin
						</h1>

						<div>
							<label
								className='text-gray-800 font-semibold block my-3 text-md'
								for='email'>
								Email
							</label>
							<input
								required
								onChange={handleOnchange}
								className='w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none'
								type='text'
								name='email'
								id='email'
								placeholder='@email'
							/>
						</div>
						<div>
							<label
								className='text-gray-800 font-semibold block my-3 text-md'
								for='password'>
								Password
							</label>
							<input
								required
								onChange={handleOnchange}
								className='w-full bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none'
								type='password'
								name='password'
								id='password'
								placeholder='password'
							/>
						</div>

						<button
							type='submit'
							className='w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'>
							Login
						</button>
						<Link href='/signup'>
							<button
								type='submit'
								className='w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg 
text-gray-800 tracking-wide font-semibold font-sans'>
								Register
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
