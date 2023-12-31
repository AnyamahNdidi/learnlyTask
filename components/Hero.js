import React from "react";
import Link from "next/link"

const Hero = () => {
	return (
		<div>
			<section className='bg-white dark:bg-gray-900 pt-10'>
				<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
				
					<div className='mr-auto place-self-center lg:col-span-7'>
						<h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white'>
			
							Get All The Best Movie Here.
						</h1>
						<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
						Our movies are top notch, we always satisfy our client. bringing good the latest movie.
						</p>
						<Link
							href='/signup'
							className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
							Get started
							<svg
								className='w-5 h-5 ml-2 -mr-1'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clip-rule='evenodd'></path>
							</svg>
						</Link>
						<Link
							href='/login'
							className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
							Log in
						</Link>
					</div>
					<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
						<img
							src='https://res.cloudinary.com/ndtech/image/upload/v1699505062/0269b34fa69ad48ac106dab290a08fb2-removebg-preview_hiodqm.png'
							alt='mockup'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
