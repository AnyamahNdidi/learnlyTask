import Head from "next/head";
import Header from "./Header";


/**
 * SharedProp Component
 *
 * The SharedProp component serves as a wrapper for pages in your Next.js application.
 * It includes a dynamic Head element for setting metadata and an optional Header component.
 *
 * @param {Object} props - The component properties.
 */

const SharedProp = ({ children, showHeader }) => {
	return (
		<div>
			<Head>
				<title>next app</title>
				<meta name='description' content='steps to next js' />
				<link rel='icon' href='assets/img.jpg' />
			</Head>
			{showHeader && <Header />}
			{children}
		
		</div>
	);
};

export default SharedProp;
