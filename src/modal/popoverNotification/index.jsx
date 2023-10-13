import React from 'react'

const PopoverNotification = () => {
    return (
        <React.Fragment>
            <NotificationCard
                id={1}
                type={"income"}
                notes={"Transfered from Joshua Lee"}
                amount={"Rp220.000"}
            />
            <NotificationCard
                id={2}
                type={"expense"}
                notes={"Expense"}
                amount={"Rp1.560.000"}
            />
        </React.Fragment>
    )
}

export default PopoverNotification