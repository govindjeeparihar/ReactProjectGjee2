import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const Team = () => {
const [team, SetTeam] = useState([]);

useEffect( () => {
    axios.get('https://reqres.in/api/users?page=2')
    .then( (resp) => {
        SetTeam(resp.data.data)
    })
},[])

    return (

        <>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Our Team</h2>
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li>Our Team</li>
                        </ul>
                    </div>

                </div>
            </section>


            <section className="team">
                <div className="container">

                    <div className="row">

                    {
                        team.map(repo =>
                                <div className="col-lg-4 col-md-6" key={repo.id}>
                                <div className="teaMember" >
                                        <div className="team-thumb">
                                        <img className="w-100" src={repo.avatar} alt={repo.last_name} />
                                        </div>
                                    <div className="team-content">
                                    <h4> {repo.first_name} {repo.last_name}</h4>
                                    <p>{repo.email}</p>
                                     
                                    </div>
                                </div>
                            </div>
                        )
                        }

 


                    </div>

                </div>
            </section>



        </>
    )
}

export default Team;