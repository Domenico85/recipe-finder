import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from "./context/FavoritesContext";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);
