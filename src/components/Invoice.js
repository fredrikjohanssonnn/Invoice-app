
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
            <svg className="invoice__arrow" width="20" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" stroke-width="2"/>
            </svg>
        </div>
    )
}

export default Invoice
