
const Invoice = ({ invoice }) => {

    return (
        <div className="invoice">
            <h3>{invoice.id}</h3>
            <p>{invoice.paymentDue}</p>
            <p>{invoice.clientName}</p>
            <h2>{invoice.total}</h2>
        </div>
    )
}

export default Invoice
