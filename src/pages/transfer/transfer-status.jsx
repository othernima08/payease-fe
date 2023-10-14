import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import CustomNavbar from '../../components/custom-components/navbar'
import CustomSidebar from '../../components/custom-components/sidebar'
import blankPict from '../../assets/images/blank.jpg';
import CustomFooter from '../../components/custom-components/footer';
import AfterLoginLayout from '../../layout/afterLogin';
import "./transfer.css";
import { ButtonGroup, } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5';
import { useParams } from 'react-router';
import { findTransferId } from '../../services/transactions';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const TransferStatus = () => {


    const { id } = useParams();
    const [tampilTransfer, setTampilTransfer] = useState([]);
    const [loading, setLoading] = useState(true);



    const getTransactionId = async () => {
        try {
            console.log(id, "ini id transfer");
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
        const input = document.getElementById("content")
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(
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

    console.log(tampilTransfer, "ini data yang mau ditampilin");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!tampilTransfer) {
        return <div>Error loading data.</div>;
    }

    return (
        <AfterLoginLayout
        >

            <div className="transfer-container ">
                <div className="content-container ">
                    <div id='content'>
                        <Row bsPrefix="margin-box" >
                            <Col md={12}>
                                <div className="back-icon">
                                    <IoArrowBack />
                                </div>

                                <h2 className='text-title p-balance-mobile-receiver'>Confirmation</h2>
                            </Col>
                        </Row>


                        <div className="d-flex img-success-mobile mb-1 mt-2 flex-column">
                            <img src="/src/assets/pin-image/success.png" style={{ width: "10%" }} alt="" className=' mb-3' />
                            <h5 className='text-title '>Transfer Success</h5>
                        </div>

                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Amount</div>
                                    <div className='p-auth opacity-75'>Rp. {tampilTransfer.transactions.amount}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Balance Left</div>
                                    <div className='p-auth opacity-75'>Rp.  {tampilTransfer.transactions.user.balance}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-container mb-2">
                            <div className="d-flex flex-row">

                                <div className='d-flex flex-column p-2'>
                                    <div>Date & Time</div>
                                    <div className='p-auth opacity-75'> {tampilTransfer.transactionTime}</div>
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
                                    <img src="/src/assets/transfer-image/samuel.png" alt="" />
                                </div>
                                <div className='d-flex flex-column p-2'>
                                    <div>{tampilTransfer.user.firstName + " " + tampilTransfer.user.lastName}</div>
                                    <div className='p-auth opacity-75'>{tampilTransfer.user.phoneNumber}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse mt-4">
                        <div className="d-flex flex-row custom-button-home" style={{ width: "60%" }}>
                            <Button variant="primary custom-button-tf" className='mx-3' style={{ width: "60px", marginRight: "4px", backgroundColor: "rgba(99, 121, 244, 0.15)" }}><i class="bi bi-share" style={{ color: "black" }}></i></Button>
                            <Button onClick={exportPDF} variant="primary custom-button-tf" className='mx-2' style={{ backgroundColor: "rgba(99, 121, 244, 0.15)", color: "#6379F4", width: "200px" }}><i class="bi bi-download mx-2"></i>Download PDF</Button>
                            <Button variant="primary custom-button-home-tf" className='mx-2' style={{ backgroundColor: "#6379F4" }}>Back to Home</Button>
                        </div>
                    </div>

                </div>
            </div>

        </AfterLoginLayout>
    )
}

export default TransferStatus