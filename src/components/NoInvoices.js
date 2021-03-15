import { ReactComponent as EmptyState } from '../assets/illustration-empty.svg';

const NoInvoices = () => {
    return (
        <div className="no-invoice">
            <EmptyState />
            <h2 className="no-invoice__title">There is nothing here</h2>
            <p className="no-invoice__body">Create an invoice by clicking the <b>New Invoice</b> button and get started</p>
        </div>
    )
}

export default NoInvoices
