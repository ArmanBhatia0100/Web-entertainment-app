import initialData from "../../data.json";
import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import "./Homepage.scss";
import Header from "../../components/Header/Header";
import RecomFilmComp from "../../components/RecommandedFilm/RecomFilmCompo";
import BookmarkedCompo from "../../components/Bookmark/BookmarkCompo";
import SearchBar from "../../components/SearchBar/SearchBar";
import TrendingComp from "../../components/TrendingCompo/TrenndingComponent";
import SearchComp from "../../components/SearchingComp/SearchComp";
import Movies from "../../components/Movie/Movies";
import TvSerials from "../../components/tvSerials/tvSerials";

//Context

import { bookmarkContext } from "../../context/BookmarkContext";

function Homepage() {
  // variables-----------
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState(initialData);
  const [searchedItems, setSearchedItem] = useState("");
  const searchInputRef = useRef(null);

  //Functions-----------
  const getSearchedData = (newSearchData) => {
    setIsSearching(true);
    let filteredFilmList = data.filter((film) => {
      return film.title.toLowerCase().includes(newSearchData.toLowerCase());
    });
    setSearchedItem(filteredFilmList);
  };

  function BookmarkFetchHandler(getFilm) {
    const { isBookmarked } = getFilm;
    const indexFilmBook = data.findIndex(
      (film) => film.title === getFilm.title
    );

    const NewObj = { ...getFilm };
    if (isBookmarked) {
      NewObj.isBookmarked = false;
    } else {
      NewObj.isBookmarked = true;
    }

    const unMarkedFilteredArr = data.filter((film) => {
      return film.title !== getFilm.title;
    });

    unMarkedFilteredArr.splice(indexFilmBook, 0, NewObj);
    setData(unMarkedFilteredArr);
  }
  function headerLinkClickHandler() {
    setIsSearching(false);
    searchInputRef.current.value = "";
  }

  // Return Statement -----------
  return (
    <bookmarkContext.Provider value={{ bookmarkFetch: BookmarkFetchHandler }}>
      <div className="wrapper">
        <Header linkClick={headerLinkClickHandler} />
        <SearchBar getInput={getSearchedData} ref={searchInputRef} />

        <Routes>
          <Route
            path="/"
            element={
              !isSearching ? (
                <React.Fragment>
                  <TrendingComp
                    filmData={data}
                    fetchBookmark={BookmarkFetchHandler}
                  />
                  <RecomFilmComp filmData={data} title={"Recommend for you"} />
                </React.Fragment>
              ) : (
                <SearchComp filteredList={searchedItems} />
              )
            }
          />
          <Route
            path="/movies"
            element={
              !isSearching ? (
                <Movies
                  movieList={data.filter((film) => {
                    return film.category === "Movie";
                  })}
                />
              ) : (
                <SearchComp filteredList={searchedItems} />
              )
            }
          />
          <Route
            path="tv-serials"
            element={
              !isSearching ? (
                <TvSerials
                  filteredTVSerials={data.filter(
                    (film) => film.category === "TV Series"
                  )}
                />
              ) : (
                <SearchComp filteredList={searchedItems} />
              )
            }
          />
          <Route
            path="/bookmark"
            element={
              !isSearching ? (
                <BookmarkedCompo
                  bookmarkedMovies={data.filter(
                    (film) => film.isBookmarked === true
                  )}
                />
              ) : (
                <SearchComp filteredList={searchedItems} />
              )
            }
          />
        </Routes>
      </div>
    </bookmarkContext.Provider>
  );
}
export default Homepage;
