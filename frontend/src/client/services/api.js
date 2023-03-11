export const getSuggestions = async (query) => {
    const response = await fetch('/suggestions.json');
    const data = await response.json();
    return data.filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase()));
  };