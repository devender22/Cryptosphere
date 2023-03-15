import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuery,
  fetchSuggestions,
  fetchSuggestionsSuccess,
} from "../features/searchSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
// import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

function SearchBox() {
  const [isFocused, setIsFocused] = useState(false);
  const query = useSelector((state) => state.search.query);
  const suggestions = useSelector((state) => state.search.suggestions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(updateQuery(value));
    if (value.length > 0) {
      dispatch(fetchSuggestions(value));
    } else {
      dispatch(fetchSuggestionsSuccess([]));
    }
  };

  const handleInputFocus = (e) => {
    e.preventDefault();
    setIsFocused(true);
    if (query) {
      dispatch(fetchSuggestions(query));
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      const selectedSuggestion = suggestions.find(
        (suggestion) =>
          suggestion.toLowerCase() === event.target.value.toLowerCase()
      );
      if (selectedSuggestion) {
        // let lowerCaseSentence = selectedSuggestion
        //   .toLowerCase()
        //   .replace(/\s+/g, "-");
        navigate(`/search/${selectedSuggestion}`);
      }
    }
  };

  function renderSuggestions() {
    if (query && suggestions.length > 0) {
      return (
        <div className="suggestions-menu">
          {suggestions.map((suggestion) => (
            <Box sx={{ p: 0.5,  }} className="suggestion-box" key={suggestion}>
              <Link to={`/search/${suggestion}`} className="suggestion-text">
                {suggestion}
              </Link>
            </Box>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
  return (
    <div className="search-box">
      <TextField
        id="outlined-basic"
        label="Search Coin"
        variant="outlined"
        type="text"
        value={query}
        onChange={(e) => handleInputChange(e)}
        onFocus={(e) => handleInputFocus(e)}
        onKeyDown={handleInputKeyPress}
        autoComplete='off'
        sx={{
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#27C499",
          },
        }}
      />
      {isFocused && suggestions.length > 0 && renderSuggestions()}
    </div>
  );
}

export default SearchBox;
