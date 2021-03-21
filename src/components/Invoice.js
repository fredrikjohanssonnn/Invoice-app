import { NavLink } from 'react-router-dom';
import StatusBtn from './StatusBtn';

const Invoice = ({ invoice }) => {

    let date = new Date(invoice.paymentDue)

    return (
        <div className="invoice card">
            <h3 className="invoice__id">#<span>{invoice.id}</span></h3>
            <p className="invoice__date">Due {date.toUTCString().substring(5, 16)}</p>
            <p className="invoice__name">{invoice.clientName}</p>
            <h2 className="invoice__price">&#163; {invoice.total}</h2>
            <StatusBtn status={invoice.status} />
            <NavLink to={`/invoice/${invoice.id}`}>
                <svg className="invoice__arrow deg270" width="20" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
                </svg>
            </NavLink>
        </div>
    )
}

export default Invoice
