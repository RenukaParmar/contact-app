import React from 'react'
import "E:/renuka/contact-clone/src/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import User from '../images/user.png'
const ContactCard = (props) => {
    return (
        <div>
            < div className="mt-4 row">
            <div className="col-5">

                <div className="row">
                    <img className="user col-2" src={User} alt="user"  />
                <div className="col-4">
                    <h5 key={props.contact.id}>{props.contact.name}</h5>
                    <p>{props.contact.email}</p></div>
                    </div>
                    </div>
                <div className="col-7 ">
                    <FontAwesomeIcon icon={faTrash} color="red" fontSize='30px' className='mt-4 ms-5' />   </div>                             <hr />
            </div>
        </div>
    )
}

export default ContactCard
