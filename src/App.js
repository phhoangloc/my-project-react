import { Grid } from '@mui/material'
import { Header } from './layout/header';
import { Body } from './layout/body';
import { Footer } from './layout/footer';
import store from './redux/store';
import { useState } from 'react';
import { Loading } from './item/loading';
function App() {

  const link = window.location.pathname

  const [isSearchHidden, setIsSearchHidden] = useState(store.getState().search)

  const update = () => {
    store.subscribe(() => setIsSearchHidden(store.getState().search))
  }

  update()

  return (
    <Grid>
      <Header />
      {isSearchHidden || link !== "/" ? <Loading /> : null}
      {isSearchHidden || link !== "/" ? <Body /> : null}
      {isSearchHidden || link !== "/" ? <Footer /> : null}
    </Grid>

  );
}

export default App;
