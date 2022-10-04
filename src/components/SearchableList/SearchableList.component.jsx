import Search from '../Search/Search.component';
import List from '../List/List.component';
import React from 'react';

const SearchableList = ({ list }) => {
  const [query, setQuery] = React.useState('');

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      <List list={filteredList} />
    </div>
  );
};

const byQuery = (query) => (item) =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

export default SearchableList;
