import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import CustomNavbar from "../../components/custom-components/navbar";
import CustomSidebar from "../../components/custom-components/sidebar";
import blankPict from "../../assets/images/blank.jpg";
import CustomFooter from "../../components/custom-components/footer";
import AfterLoginLayout from "../../layout/afterLogin";
import "./topup.css";
import { ButtonGroup } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import LayoutAuth from "../../layout/auth";
import { getVirtualAccountById } from "../../services/transactions";

const PaymentCode = () => {
  const [virtualAccountData, setVirtualAccountData] = useState(null);

  useEffect(() => {
    const virtualAccountId = localStorage.getItem("selectedBankId");
    const fetchData = async () => {
      try {
        const response = await getVirtualAccountById(virtualAccountId);
        if (response && response.data.success) {
          setVirtualAccountData(response.data.data);
        } else {
          console.log("Failed to fetch virtual account data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
},[]);

  return (
    <AfterLoginLayout>
      <div className="transfer-container ">
        <div className="content-container ">
          <Row bsPrefix="margin-box">
            <Col md={12}>
              <div className="back-icon">
                <IoArrowBack />
              </div>

              <h2 className="text-title p-balance-mobile-receiver">
                Confirmation
              </h2>
            </Col>
          </Row>
          <div className="d-flex img-success-mobile mb-1 mt-2 flex-column">
            <h3 className="text-title ">Payment Code</h3>

               <h2 className="text-title ">{localStorage.getItem('paymentCode')}</h2>

            <h5 className="text-title ">Status : Waiting for payment</h5>
          </div>
          <div className="card-container mb-2">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column p-2">
                <div>Amount</div>
                <div className="p-auth opacity-75">{localStorage.getItem('amount')}</div>
              </div>
            </div>
          </div>

          <div className="card-container mb-2">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column p-2">
                <div>Expired Time</div>
                <div className="p-auth opacity-75">May 11, 2020 - 12.20</div>
              </div>
            </div>
          </div>
          <div className="card-container mb-2">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column p-2">
                <div>Payment Method</div>
                <div className="p-auth opacity-75">
                {virtualAccountData && virtualAccountData[0].provider_name}
                </div>
              </div>
            </div>
          </div>
          <h5 className="text-title mt-2 mb-2">Payment Instruction</h5>

          <div className="card-container mb-2">
            <div className="d-flex flex-column justify-content-center align-content-center">
              <div className="mx-1 d-flex justify-content-around">
                <img
                  style={{ width: "20%", justifyItems: "center" }}
                  src={virtualAccountData && virtualAccountData[0].profile_picture_url}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column p-2">
                <div> {virtualAccountData && virtualAccountData[0].provider_name}</div>
                <div className="p-auth opacity-75">
                  - Lakukan login ke akun m- {virtualAccountData && virtualAccountData[0].provider_name} anda.
                  <br />
                  - Pilih menu m-Transfer.
                  <br />
                  - Pilih {virtualAccountData && virtualAccountData[0].provider_name} Virtual Account.
                  <br />
                  - Masukkan no virtual account : {virtualAccountData && virtualAccountData[0].number}
                  <br />
                  - Masukkan nominal top-up.
                  <br />
                  - Ikuti instruksi untuk menyelesaikan transaksi.
                  <br />

                   {virtualAccountData && virtualAccountData[0].provider_name} 
                  <br />
                  - Masukkan kartu ATM dan PIN  {virtualAccountData && virtualAccountData[0].provider_name}  Anda.
                  <br />
                  - Pilih menu Transaksi Lainnya.
                  <br />
                  - Pilih menu Transfers.
                  <br />
                  - Pilih menu Ke Rek  {virtualAccountData && virtualAccountData[0].provider_name}  Virtual Account.
                  <br />
                  - Masukkan no virtula account : {virtualAccountData && virtualAccountData[0].provider_number}
                  - Masukkan nominal top-up.
                  <br />
                  - Ikuti instruksi untuk menyelesaikan transaksi.
                  <br />
                  Catatan:
                  <br />- Minimum top-up Rp20.000
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse mt-4">
            <div
              className="d-flex flex-row custom-button-home"
              style={{ width: "60%" }}
            >
              <Button
                variant="primary custom-button-tf"
                className="mx-2"
                style={{
                  width: "60px",
                  backgroundColor: "rgba(99, 121, 244, 0.15)",
                }}
              >
                <i class="bi bi-share" style={{ color: "black" }}></i>
              </Button>
              <Button
                variant="primary custom-button-tf"
                className="mx-2"
                style={{
                  backgroundColor: "rgba(99, 121, 244, 0.15)",
                  color: "#6379F4",
                  width: "200px",
                }}
              >
                <i class="bi bi-download mx-2"></i>Save Image
              </Button>
              <Button
                variant="primary custom-button-home"
                className="mx-2"
                style={{ backgroundColor: "#6379F4" }}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AfterLoginLayout>
  );
};

export default PaymentCode;
