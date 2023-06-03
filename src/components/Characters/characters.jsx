import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Loading from "../layout/Loading";
import "./styles.css";

function Characters() {
  const [peopleList, setPeopleList] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const carousel = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      async function loadSWM() {
        try {
          const response = await api.get("people");
          setPeopleList(response.data.results);
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
    <div className="people_container">
      <button onClick={handleLeftClick}>&lt;</button>
      {!removeLoading && <Loading />}
      <div className="list_people-container" ref={carousel}>
        <ul className="people_list">
          {peopleList.map((people) => (
            <li className="people" key={people.name}>
              <p id="name">{people.name}</p>
              <p>Data de nascimento: {people.birth_year}</p>
              <p>Altura: {people.height}</p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleRightClick}>&gt;</button>
    </div>
  );
}

export default Characters;
