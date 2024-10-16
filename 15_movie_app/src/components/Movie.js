import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, rank, movieNm, audiAcc, salesChange, audiChange}) {
	return (
		<div>
			<h2>
			  <Link to={`/movie/${id}`}>{rank}위: {movieNm}</Link>
			</h2>
			<p>누적관객수: {audiAcc} 명</p>
			<ul>
			  <li>매출액: {salesChange}</li>
			  <li>관객수: {audiChange}</li>
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	rank: PropTypes.number.isRequired,
	movieNm: PropTypes.string.isRequired,
	audiAcc: PropTypes.number.isRequired,
	salesChange: PropTypes.number.isRequired,
	audiChange: PropTypes.number.isRequired
};

export default Movie;