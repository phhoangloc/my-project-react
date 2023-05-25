import { Grid } from '@mui/material'
import { Header } from './layout/header';
import { Menu } from './item/menu';
import { Search } from './item/search';
import { Body } from './layout/body';
import { AccountBox } from './item/accountBox';
function App() {

  return (
    <Grid sx={{ maxWidth: "1600px", margin: "auto", position: "relative" }}>
      <Header />
      <Menu />
      <AccountBox />
      <Search />
      <Body />
    </Grid>

  );
}

export default App;
