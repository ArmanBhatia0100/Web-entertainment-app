import RecomFilmCompo from "../RecommandedFilm/RecomFilmCompo";

const SearchComp = ({ filteredList }) => {
  return <RecomFilmCompo filmData={filteredList} title={"Search Result"} />;
};
export default SearchComp;
