import React, { useState } from 'react'
import AfterLoginLayout from '../../layout/afterLogin'
import "./transfer.css";
import { ButtonGroup, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { NumericFormat } from 'react-number-format';

const InputAmount = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
        <AfterLoginLayout
        >
            <div className="content-container ">
                <h5 className="mb-4">  Transfer Money</h5>
                <div className="card-container mb-4">
                    <div className="d-flex flex-row">
                        <div className='mx-1'>
                            <img src="/src/assets/transfer-image/samuel.png" alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                            <div>Samuel Suhi</div>
                            <div className='p-auth opacity-75'>+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>

                <div className='p-auth opacity-75'>Type the amount you want to transfer and then</div>
                <div className='p-auth opacity-75'>  press continue to the next steps.</div>
                <div className='d-inline-flex  align-item-center justify-content-center'>


<div>
                 
                    <NumericFormat
                        placeholder="0.00"
                        thousandSeparator={true}
                        prefix={'Rp.'}
                        style={{
                            width: '500px',
                            height: '40px',
                            marginTop: '50px',
                            fontSize: '40px',
                            marginBottom: '50px',
                            border: 'none',
                            textAlign: 'center',
                        }}

                        className={isFocused ? 'input-focus' : ''}
                        onChange={handleFocus}
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                    />

</div>




                </div>

                <center className='mb-5'><p>Rp. 120.000 Available</p></center>
                <div className="d-flex align-time-center justify-content-center">
                    <div className="d-inline-flex w-50 flex-column " style={{
                        marginBottom: '280px',
                        textAlign: 'center'
                    }}>

                        <InputGroup className="mb-4"



                        >
                            <InputGroup.Text id="basic-addon1"><i className="bi bi-pencil"></i></InputGroup.Text>
                            <Form.Control
                                placeholder="Notes"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                style={{
                                    width: '50px',
                                    textAlign: 'center'
                                }}
                            />
                        </InputGroup>


                    </div>
                </div>

                <div className='d-flex flex-row-reverse'>
                    <div className="d-inline-flex w-50 align-item-end flex-row-reverse" >
                        <Button variant="primary" >
                            Continue
                        </Button>
                    </div>
                </div>

            </div>

        </AfterLoginLayout>
    )
}

export default InputAmount