import GlobalState from "./context/GlobalState";
import Pages from "./pages/Pages";
export default function App() {
  return (
      <GlobalState>
        <Pages />
      </GlobalState>
  );
}
