function SearchInput() {
    return (
      <div className="flex items-center gap-4 w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="bg-[#1D1F2B] text-sm text-white placeholder-gray-400 px-4 py-2 rounded-full outline-none w-full min-w-24"
          aria-label="Search"
        />
      </div>
    )
  }
  
  export default SearchInput
  