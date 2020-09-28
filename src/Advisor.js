import React,{useState, useEffect} from 'react';
import Testimonial from './Testimonial';
import axios from 'axios';

const Advisor = () => {

const [team, setTeam] = useState([]);

useEffect( () => {
    axios.get('https://reqres.in/api/users')
    .then( (resp) => {
        setTeam(resp.data.data)
    })
})

    return (
        <>
            <div class="team">
                <div class="container">
                    <div class="section-header">
                        <p>Meet Our Advisors</p>
                        <h2>Our Professional Consulting Team</h2>
                    </div>
                    <div class="row">
{
    team.map( (item) => {
        return(
            <div class="col-lg-4 col-md-6" key={item.id}>
            <div class="team-item">
                <div class="team-img">
                    <img class="w-100" src={item.avatar} alt="Team Image" />
                </div>
                <div class="team-text">
                    <h5>{item.first_name} {item.last_name}</h5>
                    <p>{item.email}</p>
                    <div class="team-social">
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>

        )
    })
}

                        
                         
                         
                        

                    </div>
                </div>
                <Testimonial />
            </div>

        </>
    )
}

export default Advisor;