import { Index } from "./pages/Index";
import { TodosProvider } from "./context/TodosContext";
import { SystemProvider } from "./context/SystemContext";
import { PostsProvider } from "./context/PostsContext";

function App() {
  return (
    <SystemProvider>
      <TodosProvider>
        <PostsProvider>
          <Index />
        </PostsProvider>
      </TodosProvider>
    </SystemProvider>
  );
}

export default App;
