import Button from "./Button"

const Header = ({ invoices }) => {

    return (
        <div className="header row">
            <div className="title">
                <h1>Invoices</h1>
                <p className="title__paragraph">{invoices.length > 0 ? `There are total ${invoices.length} invoices` : 'No invoices'}</p>
            </div>
            <div className="header__action">
                <button className="filter-invoices">Filter by status
                    <svg width="20" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
                    </svg>
                </button>
                <Button style={'new-invoice-btn '} text={"New invoice"} />
            </div>
        </div>
    )
}

export default Header
