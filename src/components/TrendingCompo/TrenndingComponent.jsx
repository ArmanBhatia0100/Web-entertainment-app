import Film from "../FilmCompo/Film";
const TrendingComp = ({ filmData }) => {
  return (
    <section className="trending-container">
      <h1>Trending</h1>
      <div className="films-container">
        {filmData.map((film) => {
          if (film.isTrending) {
            return <Film data={film} key={film.title} />;
          }
          return null;
        })}
      </div>
    </section>
  );
};
export default TrendingComp;
