
import Hero from "@/components/Hero";
import MovieCard from "@/components/commons/MovieCard";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetAllMovies } from "@/utils/ApiCalls";
import { useEffect, useState } from "react";

/**
 * Home Component
 * This component represents the home page of the application.
 * It includes a Hero section, a search input, and a list of movie cards.
 */

export default function Home() {
	 // State for managing search input and movie data
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [movieData, setMovieData] = useState([]);

	// Function to fetch movie data from an API
	const fetchResult = async () => {
		try {
			const response = await GetAllMovies();
			console.log("fghjhk", response);
			setMovieData(response);
		} catch (err) {
			return err;
		}
	};
	
	// Function to update filtered data based on search query(user search)
	const updateFilteredData = (query) => {
		setSearchQuery(query);
		if (query === "") {
			setFilteredData(movieData);
		} else {
			const filtered = movieData.filter((product) =>
				product.title.toLowerCase().includes(query.toLowerCase()),
			);
			setFilteredData(filtered);
		}
	};

	  // Fetch movie data on component mount
	useEffect(() => {
		let mounted = true;

		if (mounted) {
			fetchResult();
		}

		return () => {
			mounted = false;
		};
	}, []);

	// Initial load of data into filteredData
	useEffect(() => {
		setFilteredData(movieData);
	}, [movieData]);

	 // Render the main content(component)
	return (
		<main data-testid='home'>
			<Header />
			<Hero />
			<br />
			<SearchInput onSearch={updateFilteredData} />

			<div className='flex flex-wrap m-10 gap-5  justify-center min-h-[100vh]'>
				{filteredData?.length >= 1 ? (
					<div className='flex flex-wrap m-10  gap-5 justify-center min-h-[100vh]'>
						{filteredData.map((props) => (
							<MovieCard props={props} />
						))}
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>
			<Footer />
		</main>
	);
}
