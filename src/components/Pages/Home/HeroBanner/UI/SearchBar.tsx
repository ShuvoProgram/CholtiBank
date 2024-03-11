import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="relative">
        <label className="sr-only" htmlFor="search">
          {" "}
          Search{" "}
        </label>

        <input
          className="h-10 w-full rounded-full  bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56  border border-slate-200 "
          id="search"
          type="search"
          placeholder="Search"
        />

        <button
          type="button"
          className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700 text-xl"
        >
          <span className="sr-only">Search</span>
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
