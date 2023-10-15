import React from 'react'

const TransferLayout = (props) => {
    const { children } = props;

    return (
        <div className="transfer-container ">
            <div className="content-container-find">

                {children}
            </div>
            </div>

    )
}

export default TransferLayout