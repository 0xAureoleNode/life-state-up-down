import React from 'react';

const Search = ({ query, handleQuery, children }) => (
  <div>
    {children}
    <input type="text" value={query} onChange={handleQuery} />
  </div>
);

export default Search;
