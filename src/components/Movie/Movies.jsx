import RecomFilmComp from "../RecommandedFilm/RecomFilmCompo";

const Movies = ({ movieList }) => {
  return <RecomFilmComp filmData={movieList} title={"Movies"} />;
};
export default Movies;
