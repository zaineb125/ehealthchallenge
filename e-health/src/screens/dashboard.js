import React from 'react'
import MyNavbar from '../components/MyNavbar';
import graph from '../images/graph.png';


export default function Dashboard() {
  return (
    <div>
        <MyNavbar/>
        <br/>
        <br/>
        <div className="input-group container " style={{width:"500px"}} >
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">search</button>
</div>
        <img src={graph} alt="graph" style={{marginLeft:"260px", marginTop:"100px"}}/>

    </div>
  )
}
