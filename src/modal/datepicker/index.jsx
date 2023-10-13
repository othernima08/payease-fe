import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import "./datepicker.css"
import CustomInput from '../../components/reusable-components/input';

const DatePickerModal = (props) => {
    const { handleClose, open } = props;

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [focus, setFocus] = useState(START_DATE)

    const handleFocusChange = newFocus => {
        setFocus(newFocus || START_DATE)
    }

    const formatDate = (date) => {
        console.log(date)
        if (date == "") return '';
        const formattedDate = format(date, 'cccc, dd MMM yyyy', { locale: enGB })
        return formattedDate;
    }

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
                <section className='datepicker'>
                    <DateRangePickerCalendar
                        startDate={startDate}
                        endDate={endDate}
                        focus={focus}
                        onStartDateChange={setStartDate}
                        onEndDateChange={setEndDate}
                        onFocusChange={handleFocusChange}
                        locale={enGB}
                    />
                </section>
                <section className="date-range-container">
                    <section className="start-date-container">
                        <CustomInput
                            labelClassName="label-date"
                            inputClassName="date-input"
                            label="From"
                            type='text'
                            placeholder='Start Date'
                            value={formatDate(startDate)}
                            readOnly />

                    </section>
                    <section className="end-date-container">
                        <CustomInput
                            labelClassName="label-date"
                            inputClassName="date-input"
                            label="To"
                            type='text'
                            placeholder='End Date'
                            value={formatDate(endDate)}
                            readOnly />
                    </section>
                </section>
            </Modal.Body>
            <Modal.Footer>
                <Button type="button" style={{ backgroundColor: "#6379F4", borderColor: "#6379F4" }} onClick={handleClose}>
                    Apply
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DatePickerModal