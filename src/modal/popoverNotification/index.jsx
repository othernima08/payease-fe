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
            {/* contoh data get dari API */}
            {/* <NotificationCard
                id={item.id}
                type={item.type === "Transfer to" ? "expense" : "income"}
                notes={item.type === "Top up" ? (item.type + " from " + item.name) : (item.type + " " + item.name)}
                amount={item.amount}
            /> */}
        </React.Fragment>
    )
}

export default PopoverNotification