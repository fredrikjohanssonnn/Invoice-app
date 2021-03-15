import Invoice from './Invoice'
import NoInvoices from './NoInvoices';

const InvoiceList = ({ invoices }) => {
    return (
        <div className="invoicelist row">
        
            { invoices.length > 0 ?
                invoices.map(invoice => (
                    <Invoice invoice={invoice} />
                )) : <NoInvoices />
            }
        </div>
    )
}

export default InvoiceList
