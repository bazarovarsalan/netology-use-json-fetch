
interface props {
    data: any;
    loading: any,
    error: any|null
}


const UseJsonFetchComponent = ({data, loading, error}: props) => {
  console.log(data,loading,error)
  return (
    <>
    <div className="comp">
        {loading && <div>Loading...</div>}
        {data && <div>{data.status}</div>}
        {error && <div style={{backgroundColor:'red'}}>{error}</div>}
    </div>
    </>
  )
}

export default UseJsonFetchComponent;
