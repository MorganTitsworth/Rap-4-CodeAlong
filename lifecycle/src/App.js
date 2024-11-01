import styles from './App.module.css';
import { useState, useRef, useEffect } from 'react';
import LayoutEffectComponent from './components/layoutEffectComponent/LayoutEffectComponent';
// const dummyData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     age: 25
//   },
//   {
//     id: 2,
//     name: 'Jane Doe',
//     age: 30
//   },
//   {
//     id: 3,
//     name: 'John Smith',
//     age: 35
//   },
//   {
//     id: 4,
//     name: 'Jane Smith',
//     age: 40
//   },
//   {
//     id: 5,
//     name: 'John Doe',
//     age: 45
//   },
//   {
//     id: 6,
//     name: 'Jane Doe',
//     age: 50
//   },
//   {
//     id: 7,
//     name: 'John Smith',
//     age: 55
//   },
//   {
//     id: 8,
//     name: 'Jane Smith',
//     age: 60
//   },
//   {
//     id: 9,
//     name: 'John Doe',
//     age: 65
//   },
//   {
//     id: 10,
//     name: 'Jane Doe',
//     age: 70
//   },
//   {
//     id: 11,
//     name: 'John Smith',
//     age: 75
//   },
//   {
//     id: 12,
//     name: 'Jane Smith',
//     age: 80
//   },
//   {
//     id: 13,
//     name: 'John Doe',
//     age: 85
//   },
//   {
//     id: 14,
//     name: 'Jane Doe',
//     age: 90
//   },
//   {
//     id: 15,
//     name: 'John Smith',
//     age: 95
//   },
//   {
//     id: 16,
//     name: 'Jane Smith',
//     age: 100
//   },
//   {
//     id: 17,
//     name: 'John Doe',
//     age: 105
//   },
//   {
//     id: 18,
//     name: 'Jane Doe',
//     age: 110
//   },
//   {
//     id: 19,
//     name: 'John Smith',
//     age: 115
//   },
//   {
//     id: 20,
//     name: 'Jane Smith',
//     age: 120
//   },
//   {
//     id: 21,
//     name: 'John Doe',
//     age: 125
//   },
//   {
//     id: 22,
//     name: 'Jane Doe',
//     age: 130
//   },
//   {
//     id: 23,
//     name: 'John Smith',
//     age: 135
//   },
//   {
//     id: 24,
//     name: 'Jane Smith',
//     age: 140
//   },
//   {
//     id: 25,
//     name: 'John Doe',
//     age: 145
//   },
// ]
function App() {
  // const [people, setPeople] = useState([dummyData[0]]);
  // const countRef = useRef(0);
  // const observer = useRef(null);
  // useEffect(() => {
  //   observer.current = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       console.log(entry)
  //       if(entry.isIntersecting){
  //         countRef.current = countRef.current + 1;
  //         setPeople(dummyData.slice(0, countRef.current));
  //       }
  //     })
  //   }, {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1
  //   })
  //   observer.current.observe(document.getElementById('seen'))
  //   return () => {
  //     observer.current.disconnect()
  //   }
  // }, [])
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        {/* {people.map((data) => {
          return <div key={data.id} style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{data.name}, {data.age}</div>
        })}
        <div id='seen'>SEE ME</div> */}
        <LayoutEffectComponent />
      </header>
    </div>
  );
}

export default App;