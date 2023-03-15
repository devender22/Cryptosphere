import { useParams } from 'react-router-dom';

function SearchResultsPage() {
  const { query } = useParams();
  console.log(query)
  return (
    <div style={{"margin":"40px"}}>
      <h3>Search Results for: {query}</h3>
    </div>
  );
}

export default SearchResultsPage;