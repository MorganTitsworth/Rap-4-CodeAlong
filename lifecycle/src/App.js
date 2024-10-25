import styles from './App.module.css';
import { useState, useRef } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <button onClick={() => setCount(count + 1)}>Increase count State</button>
        <br />
        <button onClick={() => {
          countRef.current = countRef.current + 1;
          console.log('countRef.current', countRef.current)
        }
        }>Increase count Ref</button>
       <p> REF: {countRef.current} STATE: {count}</p>
        {countRef.current === 5 && 'asdasdasd'}
      </header>
    </div>
  );
}

export default App;