import React from 'react';
import SearchBox from '../components/SearchBox';

function HomePage() {
  return (
    <div class="Main">
      <SearchBox />
      <form action="/post" method="post" className="form">
          <button type="submit">Connect</button>
      </form>

    </div>
  );
}

export default HomePage;