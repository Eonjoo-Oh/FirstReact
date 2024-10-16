import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&targetDt=20120101`)
    .then((response) => response.json())
    .then(json => setMovies(json.boxOfficeResult.dailyBoxOfficeList));
    // .then(json => console.log(json));
  },[])
  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
    </div>
  )
}

export default App;
