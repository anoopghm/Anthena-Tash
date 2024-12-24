// SearchBar component that allows searching by name or skills
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
      <div>
        {/* Input field for the search query */}
        <input
          type="text" // Specifies the type of input as text
          placeholder="Search by Name or Skills" // Placeholder text to guide the user
          value={searchQuery} // The value of the input is controlled by the parent component's state
          onChange={(e) => setSearchQuery(e.target.value)} // When the input value changes, update the parent component's state with the new search query
        />
      </div>
    );
  };
  
  export default SearchBar; // Export the SearchBar component so it can be used in other parts of the app
  