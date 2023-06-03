import { useEffect, useRef, useState } from "react";
import Loading from "../layout/Loading";
import { api } from "../../services/api";
import "./styles.css";

function Films() {
  const [filmsList, setFilmsList] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const carousel = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      async function loadSWM() {
        try {
          const response = await api.get("films");
          setFilmsList(response.data.results);
          setRemoveLoading(true);
        } catch (error) {
          console.log(error);
        }
      }
      loadSWM();
    }, 1000);
  }, []);

  const handleLeftClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="films_container">
      <button onClick={handleLeftClick}>&lt;</button>
      {!removeLoading && <Loading />}
      <div className="list_films-container" ref={carousel}>
        <ul className="films_list">
          {filmsList.map((film) => (
            <li className="film" key={film.title}>
              <div className="film_img">
                <img alt={film.episode_id}></img>
              </div>
              <div className="film_title">{film.title}</div>
              <div>
                <p>Data de lançamento: {film.release_date}</p>
              </div>
              <div>
                <p>Diretor: {film.director}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleRightClick}>&gt;</button>
    </div>
  );
}

export default Films;
