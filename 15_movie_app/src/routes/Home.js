import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const date = new Date();
	date.setDate(date.getDate() - 1);
	const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '');
  
	const getMovies = async() => {
	  const response = await fetch(
		`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&targetDt=${formattedDate}`
	  );
	  const json = await response.json();
	  setMovies(json.boxOfficeResult.dailyBoxOfficeList);
	  setLoading(false);
	};
	useEffect(() => {
	  getMovies();
	}, []);
	console.log(movies);
	return (
	  <div>
		{loading ? (
		  <h1>Loading...</h1>
		) : (
		  <div>
			<h1>
			  {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 BoxOffice 순위
			</h1>
			<div>
			  {movies.map((movie) => (
				  <Movie 
					key={movie.movieCd} 
					id={movie.movieCd} 
					rank={movie.rank} 
					movieNm={movie.movieNm} 
					audiAcc={movie.audiAcc} 
					salesChange={movie.salesChange}
					audiChange={movie.audiChange}
				  />
				))}
			</div>
		  </div>
		)}
	  </div>
	);
}
export default Home;