import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
export default function User() {
    const {id} =useParams();
    const {data,isLoading , isError}= useFetch(`/users/${id}`);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return (
        <div className="alert alert-danger">
          Error: {isError}
        </div>
      );
    }
  return (
<>    <div>
      <h1> hello : {data.data.name}</h1>
      <h3>email  : {data.data.email}</h3>
      <h3>age  : {data.data.age}</h3>
      

            </div>
            <div className="back">
              <Link to={`/users/ADD`} >back</Link>
            </div>
            </>

  );
}   