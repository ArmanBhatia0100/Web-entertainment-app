import { forwardRef } from "react";

const SearchBar = ({ getInput }, ref) => {
  const SearchHandler = (event) => {
    let searchItem = event.target.value;
    getInput(searchItem);
  };

  return (
    <section className="search-container">
      <div className="search-icon-contianer">
        <img src="/assets/icon-search.svg" alt="searchIcon" />
      </div>
      <input
        type="text"
        placeholder="Search for movies or TV series"
        onChange={SearchHandler}
        ref={ref}
      />
    </section>
  );
};

export default forwardRef(SearchBar);
