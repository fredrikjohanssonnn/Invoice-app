import React from 'react'
import Invoice from './Invoice'

const InvoiceList = ({ invoices }) => {
    return (
        <div className="row">
            {
                invoices.map(invoice => (
                    <Invoice invoice={invoice} />
                ))
            }
        </div>
    )
}

export default InvoiceList
