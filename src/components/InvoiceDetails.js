
const InvoiceDetails = ({ details }) => {
    
    const { id, clientAddress, clientEmail, senderAddress, createdAt, paymentDue, clientName, description } = details;
console.log(details)
    return (
        <div className="card column">
            <div className="flex-h">
                <div>
                    <h3>#{id}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <p>{senderAddress.street}</p>
                    <p>{senderAddress.city}</p>
                    <p>{senderAddress.postCode}</p>
                    <p>{senderAddress.country}</p>
                </div>
            </div>
            <div className="flex-h">
                <div>
                    <div>
                        <p>Invoice Date</p>
                        <h3>{createdAt}</h3>
                    </div>
                    <div>
                        <p>Payment Due</p>
                        <h3>{paymentDue}</h3>
                    </div>
                </div>
                <div>
                    <p>Bill To</p>
                    <h3>{clientName}</h3>
                    <p>{clientAddress.street}</p>
                    <p>{clientAddress.city}</p>
                    <p>{clientAddress.postCode}</p>
                    <p>{clientAddress.country}</p>
                </div>
                <div>
                    <p>Sent To</p>
                    <h3>{clientEmail}</h3>
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetails
