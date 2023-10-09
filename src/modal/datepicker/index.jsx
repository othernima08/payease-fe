import * as React from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import moment from 'moment'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "./datepicker.css"

const DatePickerModal = (props) => {
    const { handleClose, open } = props;

    const [selectedDayRange, setSelectedDayRange] = React.useState({
        from: "",
        to: ""
    });

    React.useEffect(() => {
        console.log(selectedDayRange)
    }, [])

    return (
        <Modal
            show={open}
            onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className='datepicker-modal-title'>
                    Filter By Date
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Calendar
                        value={selectedDayRange}
                        onChange={setSelectedDayRange}
                        colorPrimary="#6379F4"
                        colorPrimaryLight="#E0E4FD"
                        calendarClassName="custom-calendar"
                    />
                </section>
                <section className="date-range-container">
                    <section className="start-date-container">
                        <label className='label-date'>From</label>
                        {/* <input className="date-input" type='text' placeholder='Start Date' value={moment(Object.values(selectedDayRange.from)).format('LL')} readOnly/> */}
                        <input className="date-input" type='text' placeholder='Start Date' value={Object.values(selectedDayRange.from)} readOnly/>

                    </section>
                    <section className="end-date-container">
                        <label className='label-date'>To</label>
                        <input className="date-input" type='text' placeholder='End Date' value={Object.values(selectedDayRange.to)} readOnly/>
                    </section>
                </section>
            </Modal.Body>
            <Modal.Footer>
                {/* <section className="d-grid gap-4 mt-5"> */}
                {/* <Button onClick={handleClose}>Apply</Button> */}

                <Button type="button" style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} onClick={handleClose}>
                    Apply
                  </Button>
                {/* </section> */}
            </Modal.Footer>
        </Modal>
    )
}

export default DatePickerModal