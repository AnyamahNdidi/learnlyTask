import SharedProp from "@/components/SharedProps";
import "../styles/globals.css";



/**
 * MyApp Component
 *
 * This is the root component for your Next.js application. It wraps the main
 * Component with a custom SharedProp component, allowing you to share specific
 * props or settings across multiple pages.
 *
 * @param {Object} props - Component properties.
 * @param {React.ComponentType} props.Component - The main component to be rendered.
 */
function MyApp({ Component, pageProps }) {
		const showHeader = false;
	return (
		<SharedProp showHeader = {showHeader}>
			<Component {...pageProps} />
		</SharedProp>
	);
}

export default MyApp;
