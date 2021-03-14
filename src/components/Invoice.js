
const Invoice = ({ invoice }) => {

    let date = new Date(invoice.paymentDue)

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
        <div className="invoice">
            <h3 className="invoice__id">#<span>{invoice.id}</span></h3>
            <p className="invoice__date">Due {date.toUTCString().substring(5, 16)}</p>
            <p className="invoice__name">{invoice.clientName}</p>
            <h2 className="invoice__price">&#163; {invoice.total}</h2>
            <button className={`invoice__status status-btn ${checkStatus(invoice.status)}`}><span>&bull; </span>{invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}</button>
            <span>&#62;</span>
        </div>
    )
}

export default Invoice
