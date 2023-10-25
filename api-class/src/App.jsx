import axios from 'axios'
import { useEffect } from "react"


const App = () => {
  useEffect(() => {
    const fetch_data = () => {
      //asynchronous
      axios.get ('http://jsonplaceholder.typicode.com/posts')
      .then(response => console.log(response.data))
      .catch((error) => console.log(error));

      console.log('this should be called first');
    }

      // const fetch_data = () => {
      //   // synchronous
      //   try {
      //     const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
      //     console.log(response);
      //   } catch (error) {
      //     console.log(error);
  
      // }

    fetch_data();
  },[]);

  return (
   <>App</>
  )
}

export default App