
import { PaperContainer } from "./components/PaperContainer";
import { Container, CssBaseline, Stack } from '@mui/material'
import './App.css';
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <Stack>
      <CssBaseline />
      <Container maxWidth="xl">
        <NavigationBar />
        <PaperContainer />
      </Container>
    </Stack>

  );
}

export default App;
