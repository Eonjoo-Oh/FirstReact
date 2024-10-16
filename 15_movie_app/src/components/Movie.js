import PropTypes from "prop-types";

function Movie({rank, movieNm, audiAcc, salesChange, audiChange}) {
	return (
		<div>
			<h2>
			  {rank}위: {movieNm}
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
	rank: PropTypes.number.isRequired,
	movieNm: PropTypes.string.isRequired,
	audiAcc: PropTypes.number.isRequired,
	salesChange: PropTypes.number.isRequired,
	audiChange: PropTypes.number.isRequired
};

export default Movie;