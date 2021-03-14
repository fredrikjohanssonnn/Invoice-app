import Invoice from './Invoice'

const InvoiceList = ({ invoices }) => {
    return (
        <div className="invoicelist row">
            {
                invoices.map(invoice => (
                    <Invoice invoice={invoice} />
                ))
            }
        </div>
    )
}

export default InvoiceList
