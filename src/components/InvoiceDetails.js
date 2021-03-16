import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const InvoiceDetails = () => {
    const { id } = useParams();
    const { data: invoice, error } = useFetch('http://localhost:8000/data/' + id)
    return (
        <div>
            Invoice {id}
            {invoice.paymentDue}
        </div>
    )
}

export default InvoiceDetails
