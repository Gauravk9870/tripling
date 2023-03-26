import React from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/userFetch'

const Count = ({path}) => {
    const {data, loading, error} = useFetch(`${path}`);
    // const navigate = useNavigate();

    // const modal = (
    //   <button style={{background:"#ffbd59", border:"none", padding:"2px 10px", cursor:"pointer"}} onClick={navigate("/login")}>
    //     Login
    //   </button>
    // )

  return (
    <span>{loading ? "loading..." : data.length }</span>
  )
}

export default Count