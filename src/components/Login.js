import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Link } from 'react-router-dom';


export default function Router(){
    const navigate = useNavigate()
    const { id } = useParams();

    return(
        <div>
        <p>hello</p> 
        <div>
       
     </div>
       <div>
       
       </div>

        </div>
    )

}
