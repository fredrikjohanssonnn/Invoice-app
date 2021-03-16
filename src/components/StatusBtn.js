import React from 'react'

const StatusBtn = ({ status }) => {

    const checkStatus = status => {

        switch(status) {
            case 'paid':
                return 'paid'
                break;
            case 'pending':
                return 'pending'
                break;
            case 'draft':
                return 'draft'
                break;
            default:
                return 'Unknown'
        }
    }
    return (
        <button className={`invoice__status status-btn ${checkStatus(status)}`}><span>&bull; </span>{status.charAt(0).toUpperCase() + status.slice(1)}</button>
    )
}

export default StatusBtn
