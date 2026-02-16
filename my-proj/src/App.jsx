import { Index } from "./pages/Index";
import { TodosProvider } from "./context/TodosContext";
import { SystemProvider } from "./context/ThemeContext";

function App() {
  return (
    <SystemProvider>
      <TodosProvider>
        <Index />
      </TodosProvider>
    </SystemProvider>
  );
}

export default App;
