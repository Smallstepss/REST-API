import './App.css';
import GetPostRequest from './GetPostRequest';
import ErrorHandled from './ErrorHandled';
import HttpRequestAsync from './HttpRequestAsync';
import HttpAxios from './HttpAxios';
import HttpAxiosAsync from './HttpAxiosAsync';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App=()=>{
  return(
    <Router>
      <Routes>
      <Route path="/" element={<HttpAxios/>} />
<Route path='/GetPostRequest' element={<GetPostRequest/>}/>

<Route path='/ErrorHandled' element={<ErrorHandled/>}/>

<Route path='/HttpRequestAsync' element={<HttpRequestAsync />}/>
<Route path='/HttpAxiosAsync' element={<HttpAxiosAsync/>} />

      </Routes>
    </Router>
  )
}

export default  App;




