import { Grid } from '@mui/material'
import { Header } from './layout/header';
import { Menu } from './item/menu';
import { Search } from './item/search';
import { Body } from './layout/body';

function App() {

  return (
    <Grid sx={{ maxWidth: "1200px", margin: "auto" }}>
      <Header />
      <Menu />
      <Search />
      <Body />
    </Grid>

  );
}

export default App;
