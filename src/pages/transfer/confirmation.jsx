
import AfterLoginLayout from '../../layout/afterLogin'
import "./transfer.css";
import { ButtonGroup, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { NumericFormat } from 'react-number-format';
import { IoArrowBack } from 'react-icons/io5';

const Confirmation = () => {
  return (
    <AfterLoginLayout
    >
            <div className="transfer-container ">
            <div className="content-container ">
                <Row bsPrefix="margin-box" >
                    <Col md={12}>
                        <div className="back-icon">
                            <IoArrowBack />
                        </div>
                        <h5 className='text-title p-balance-dekstop'>Transfer To</h5>
                        <h2 className='text-title p-balance-mobile-receiver'>Confirmation</h2>
                        
                    </Col>
                </Row>
   
      
                <h5 className='text-title p-balance-mobile-receiver'>Transfer To</h5>
            <div className="card-container mb-2">
                <div className="d-flex flex-row">
                    <div className='mx-1'>
                        <img src="/src/assets/transfer-image/samuel.png" alt="" />
                    </div>
                    <div className='d-flex flex-column p-2'>
                        <div>Amount</div>
                        <div className='p-auth opacity-75'>Rp100.000</div>
                    </div>
                </div>
            </div>

            <h5 className='text-title p-balance-dekstop mt-4'>Details</h5>
            <h5 className='text-title p-balance-mobile-receiver mt-4'>Details</h5>
            <div className="card-container mb-2">
                <div className="d-flex flex-row">
               
                    <div className='d-flex flex-column p-2'>
                        <div>Amount</div>
                        <div className='p-auth opacity-75'>Rp100.000</div>
                    </div>
                </div>
            </div>
            <div className="card-container mb-2">
                <div className="d-flex flex-row">
               
                    <div className='d-flex flex-column p-2'>
                        <div>Balance Left</div>
                        <div className='p-auth opacity-75'>Rp20.000</div>
                    </div>
                </div>
            </div>
            <div className="card-container mb-2">
                <div className="d-flex flex-row">
               
                    <div className='d-flex flex-column p-2'>
                        <div>Date & Time</div>
                        <div className='p-auth opacity-75'>May 11, 2020 - 12.20</div>
                    </div>
                </div>
            </div>
            <div className="card-container mb-2">
                <div className="d-flex flex-row">
              
                    <div className='d-flex flex-column p-2'>
                        <div>Notes</div>
                        <div className='p-auth opacity-75'>For buying some socks</div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row-reverse mt-4">
                        <div className="d-flex flex-row justify-content-end custom-button-home" style={{ width: "60%" }}>
                         
                            
                            <Button variant="primary custom-button-home" className='mx-2' style={{backgroundColor:"#6379F4"}}>Continue</Button>
                        </div>
                    </div>
            </div>
        </div>
    </AfterLoginLayout>
  )
}

export default Confirmation