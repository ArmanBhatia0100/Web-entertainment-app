import RecomFilmComp from "../RecommandedFilm/RecomFilmCompo";

const BookmarkedCompo = ({ bookmarkedMovies }) => {
  return (
    <RecomFilmComp filmData={bookmarkedMovies} title="Bookmarked Movies" />
  );
};

export default BookmarkedCompo;
