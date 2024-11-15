import React from 'react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className="h-16 bg-purple-700 flex justify-between px-3 items-center text-white">
			<div className="logo font-bold text-lg">
				<Link href="/">BitLinks</Link>
			</div>
			<ul className="flex justify-center gap-4 items-center">
				<Link href="/"><li>Home</li></Link>
				<Link href="/about"><li>About</li></Link>
				<li className="flex gap-3">
					<Link href="/shorten"><button className='bg-purple-500 rounded-md shadow-md font-bold p-3 py-1'>Try Now</button></Link>
				</li>
				
			</ul>
		</nav>
		
	)
}

export default Navbar