import './App.css';
// import PhotoList from './PhotoList';
import { useLocalStorage } from "./useLocalStorage";
import storage from 'local-storage-fallback'
import { lazy,Suspense} from 'react';

function App() {
  if (!('localStorage' in window)) {
    window.localStorage = storage;
    localStorage = storage;
  }
  const [data, setData] = useLocalStorage("data", "");
  if (!data) {
    window.fetch("https://jsonplaceholder.typicode.com/photos").then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          setData(JSON.stringify(data));
        });
      }
    )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  const shuffeBtn = function () {
    if (data) {
      const datalist = JSON.parse(data);
      datalist.sort(() => Math.random() - 0.5);
      setData(JSON.stringify(datalist));
    }
  }

  const PhotoList = lazy(()=>import('./PhotoList'))

  return (
    <div className="App">
      <Suspense fallback={<h1>Still Loading…</h1>}>
      <PhotoList data={data} />
      </Suspense>
      <br></br>
      <br></br>
      <button className="btn" onClick={shuffeBtn}>Shuffe</button>
    </div>
  );
}

export default App;
