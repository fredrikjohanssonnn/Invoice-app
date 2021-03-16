import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import StatusBtn from './StatusBtn';

const InvoiceDetails = () => {
    const { id } = useParams();
    const { data: invoice, error, isLoading } = useFetch('http://localhost:8000/data/' + id)
    
    return (
        <div>
            <div>
                <svg className="invoice__arrow" width="20" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
                </svg>
                <p>Go back</p>
            </div>
            <div className="card">
                {isLoading && <div>Loading...</div>}
                {invoice && (
                    <div>
                        <div>Status <StatusBtn status={invoice.status} /></div>
                        <div>
                            <div>Edit</div>
                            <div>Delete</div>
                            <div>Mark as Paid</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="card">

            </div>
        </div>
    )
}

export default InvoiceDetails
