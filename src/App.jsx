import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
