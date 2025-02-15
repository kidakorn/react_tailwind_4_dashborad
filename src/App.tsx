import { ThemeProvider } from "./contexts/ThemeProvider";
import { AppRouter } from "./routes";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
