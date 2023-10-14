import React from 'react'
import { Link } from 'react-router-dom';

const ReceiverCard = (props) => {
    const {id,firstName, lastName, phoneNumber, profilePicture} = props;
    return (
         <Link to={`../transfer/to/${id}`} >
        <div className="card-container mb-2">
            <div className="d-flex flex-row">
                <div className='mx-1'>
                    <img style={{width:"10%"}} src={profilePicture} alt="" />
                </div>
                <div className='d-flex flex-column p-2'>
                    <div>{firstName + ' ' + lastName}</div>
                    <div className='p-auth opacity-75'>{phoneNumber}</div>
                </div>
            </div>
        </div>
        </Link>

    //     <div className="card-container mb-2">
    //     <div className="d-flex flex-row">
    //         <div className='mx-1'>
    //             <img src="/src/assets/transfer-image/samuel.png" alt="" />
    //         </div>
    //         <div className='d-flex flex-column p-2'>
    //             <div>Samuel Suhi</div>
    //             <div className='p-auth opacity-75'>+62 813-8492-9994</div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default ReceiverCard