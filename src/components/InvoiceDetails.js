import React from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ActionButton from './ActionButton';
import StatusBtn from './StatusBtn';

const InvoiceDetails = () => {
    const { id } = useParams();
    const { data: invoice, error, isLoading } = useFetch('http://localhost:8000/data/' + id);
    const history = useHistory();

    return (
        <div>
            <div className="flex-h">
                <NavLink to="/">
                    <svg className="invoice__arrow deg90" width="20" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
                    </svg>
                    <h3>Go back</h3>
                </NavLink>
            </div>
            {isLoading && <div>Loading...</div>}
            {invoice && (
                <React.Fragment>
                    <div className="card">
                        <div className="invoice-action flex-h">
                            <div className="invoice-action__status">
                                <p>Status </p>
                                <StatusBtn status={invoice.status} />
                            </div>
                            <div>
                                <ActionButton text={'Edit'} />
                                <ActionButton text={'Delete'} />
                                <ActionButton text={'Mark as Paid'} />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        {invoice.id}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default InvoiceDetails
