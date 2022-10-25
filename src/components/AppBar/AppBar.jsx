import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box as="header" p={3} mb={4} boxShadow="0px 5px 2px 0px rgba(0,0,0,0.75)">
      <Box as="nav" display="flex" justifyContent='center' gridGap="200px">
        <NavItem to="home">Home</NavItem>
        <NavItem to="movies">Movies</NavItem>
      </Box>
    </Box>
  );
};
