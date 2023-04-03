import RecomFilmComp from "../RecommandedFilm/RecomFilmCompo";

const TvSerials = ({ filteredTVSerials }) => {
  return <RecomFilmComp filmData={filteredTVSerials} title={"TV Series"} />;
};

export default TvSerials;
