import React, {useState, useEffect} from "react"
import Pages from "./components/Pages"
import "./css/index.css"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then((response) => response.json())
    .then(response => setData(response.message))
  }, [])
  return (<div>
        <Pages />
      </div>
  );
}

export default App;
