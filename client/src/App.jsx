import { Container } from './styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Menu, Burger } from './components';
import { useRef, useState } from 'react';
import { useClickOutside } from './hooks/useClickOutside';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Kinerja, Upload } from './pages'

function App() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => setOpen(false));
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div ref={ref}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Container>
          <h1>hi</h1>
        </Container>
      </ThemeProvider>
      <Switch>
        <Route path='/kinerja' component={Kinerja} />
        <Route path='/upload' component={Upload} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
