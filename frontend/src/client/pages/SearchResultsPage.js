import { useParams } from 'react-router-dom';

function SearchResultsPage() {
  const { query } = useParams();
  console.log(query)
  return (
    <div>
      <h1>Search Results for: {query}</h1>
    </div>
  );
}

export default SearchResultsPage;