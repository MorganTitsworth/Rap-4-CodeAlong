import logo from './logo.svg';
import styles from './App.module.css';
import SearchParent from './components/searchParent/SearchParent';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);

  console.log('rendering app.js')
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
      <input type="text" onChange={(e) => {
                setCount(count + 1);
            }} />
        <SearchParent props={count}/>
      </header>
    </div>
  );
}

export default App;
