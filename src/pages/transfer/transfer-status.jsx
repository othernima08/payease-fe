import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import blankPict from '../../assets/images/blank.jpg';
import AfterLoginLayout from '../../layout/afterLogin';
import "./transfer.css";
import { ButtonGroup, } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router';
import { findTransferId } from '../../services/transactions';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { format } from 'date-fns';


const TransferStatus = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [tampilTransfer, setTampilTransfer] = useState([]);
    const [loading, setLoading] = useState(true);


    const getTransactionId = async () => {
        try {
            // console.log(id, "ini id transfer");
            const res = await findTransferId(id)
            console.log(res, "data transfer ini");
            setTampilTransfer(res.data.data);
        } catch (error) {
            console.log(error);
            console.error(error);
            setTampilTransfer(null);
        }
        finally {
            setLoading(false);
        }
    }

    // const generatePDF = () => {
    //     var doc = new jsPDF("p", "pt", "a4");
    //     doc.html(document.querySelector("#content"),{
    //         callback: function(pdf){
    //             pdf.save("mypdf.pdf");

    //         }
    //     })
    // }


    const exportPDF = () => {
        const input = document.getElementById("content-toprint")
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true,   scale: 2  }).then(
            canvas => {
                const imgWidth = 208;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save("check.pdf")
            }
        )
    }

    useEffect(() => {
        getTransactionId();
    }, [id]);

    // console.log(tampilTransfer, "ini data yang mau ditampilin");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!tampilTransfer) {
        return <div>Error loading data.</div>;
    }


    
    const springBootDate = new Date(tampilTransfer.transactionTime);
    const formattedDate = format(springBootDate, "MMMM dd, yyyy");

    return (
        <AfterLoginLayout
        >
            <div className="transfer-container ">
                <div className="content-container ">
                    <div id='content-toprint'>
                

                        <div className="d-flex img-success-mobile mb-1 mt-2 flex-column">
                            <img src="/src/assets/pin-image/success.png" style={{ width: "10%" }} alt="" className=' mb-3' />
                            <h5 className='text-title '>Transfer Success</h5>
                        </div>

                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Amount</div>
                                    <div className='p-auth opacity-75'>Rp.
                                    
                                    {`${parseFloat(tampilTransfer.transactions.amount).toLocaleString('id-ID')}`}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Balance Left</div>
                                    <div className='p-auth opacity-75'>Rp.  
                                    
                                    {` ${parseFloat(tampilTransfer.transactions.user.balance).toLocaleString('id-ID')}`}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Date & Time</div>
                                    <div className='p-auth opacity-75'> {formattedDate}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Notes</div>
                                    <div className='p-auth opacity-75'>{tampilTransfer.notes}</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className='d-flex flex-column p-3'>
                                <div> <h5 className='text-title mt-1 mb-1 mx-1'>Transfer To</h5></div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">
                                <div className='mx-1'>
                                    <img  src={tampilTransfer.user.sharedUrl != null ? tampilTransfer.user.sharedUrl: blankPict} alt="" className='image-size' />
                                </div>
                                <div className='d-flex flex-column p-2'>
                                    <div>{tampilTransfer.user.firstName + " " + tampilTransfer.user.lastName}</div>
                                    <div className='p-auth opacity-75'>{tampilTransfer.user.phoneNumber}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse mt-4 mb-3">
                        <div className="d-flex flex-row custom-button-home" style={{ width: "60%" }}>

                            <Button onClick={exportPDF} variant="primary custom-button-tf" className='mx-2' style={{ backgroundColor: "rgba(99, 121, 244, 0.15)", color: "#6379F4", width: "100%" }}><i class="bi bi-download mx-2"></i>Download PDF</Button>
                            <Button variant="primary custom-button-home-tf" className='mx-2 w-100' style={{ backgroundColor: "#6379F4" }} onClick={() => {navigate("/home")}}>Back to Home</Button>
                        </div>
                    </div>

                </div>
            </div>

        </AfterLoginLayout>
    )
}

export default TransferStatus