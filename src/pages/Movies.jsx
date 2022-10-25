import { Box } from 'components/Box';
import { MovieSearchList } from 'components/MovieSearchList/MovieSearchList';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
export const Movies = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setInputSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    setQuery(inputSearch);
  };

  return (
    <Box>
      <Box as="form" pl={3} onSubmit={handleSubmit}>
        <input type="text" name="query"  onChange={handleChange} />
        <button backgroundColor='blue' type="submit"> <FcSearch />Search</button>
      </Box>
      <MovieSearchList query={query} />
    </Box>
  );
};
