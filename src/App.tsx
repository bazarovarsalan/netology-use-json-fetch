
import './App.css'
import UseJsonFetchComponent from './components/UseJsonFetchComponent';
import useJsonFetch from './hooks/useJsonFetch'


function App() {
  const [data1, loading1, error1] = useJsonFetch('http://localhost:7070/data', {status:''});
  
  const [data2, loading2, error2] = useJsonFetch('http://localhost:7070/error', {status:''});

  const [data3, loading3, error3] = useJsonFetch('http://localhost:7070/loading', {status:''});



  return (
  <div className='App'>
    <UseJsonFetchComponent data={data1} loading={loading1} error={error1}/>
    <UseJsonFetchComponent data={data2} loading={loading2} error={error2}/>
    <UseJsonFetchComponent data={data3} loading={loading3} error={error3}/> 
  </div>
  )
}

export default App;
