import { useContext } from "react";
import { bookmarkContext } from "../../context/BookmarkContext";

const Film = ({ data, isBookmarked }) => {
  const BookmarkCTX = useContext(bookmarkContext);

  function onBookmarkClickHandler() {
    BookmarkCTX.bookmarkFetch(data);
  }

  return (
    <div
      className="film-container"
      style={{
        backgroundImage: data.isTrending
          ? `url(${data.thumbnail.trending.small})`
          : `url(${data.thumbnail.regular.small})`,
        backgroundSize: "cover"
      }}
    >
      <div
        className="bookmark-container"
        style={{
          backgroundColor: `${data.isBookmarked ? "pink" : "transparent"}`,
          boxShadow: "0 0 15px 0.5px black"
        }}
      >
        <button type="button" onClick={onBookmarkClickHandler}>
          <img src="/assets/icon-bookmark-empty.svg" alt="" />
        </button>
      </div>
      <div className="film-content">
        <span>{data.year}</span>
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`/assets/icon-category-${
              data.category === "Movie" ? "movie.svg" : "tv.svg"
            }`}
            alt="movie"
            style={{ padding: "0.1rem" }}
          ></img>
          {data.category}
        </span>
        <span>{data.rating}</span>
      </div>
      <div className="film-title">
        {data.title.length < 12
          ? data.title.slice(0, 12)
          : data.title.slice(0, 12) + "..."}
      </div>
    </div>
  );
};

export default Film;
