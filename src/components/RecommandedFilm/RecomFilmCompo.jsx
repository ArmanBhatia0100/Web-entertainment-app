import Film from "../FilmCompo/Film";

const RecomFilmComp = ({ filmData, title }) => {
  return (
    <section className="recommended-container">
      <h1>{title}</h1>
      <div className="films-container">
        {filmData.map((film) => {
          return (
            <Film
              data={film}
              key={film.title}
              isBookmarked={filmData.isBookmarked}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecomFilmComp;
