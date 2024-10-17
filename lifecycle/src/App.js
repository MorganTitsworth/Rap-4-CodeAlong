import logo from "./logo.svg";
import styles from "./App.module.css";
import SearchComponent from "./components/searchComponent/SearchComponent";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  console.log("rendering app.js");
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <input
          type="text"
          onChange={(e) => {
            setCount(count + 1);
          }}
        />
        <SearchComponent />
      </header>
    </div>
  );
}

export default App;
