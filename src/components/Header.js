import Button from "./Button"

const Header = ({ invoices }) => {

    return (
        <div className="header row">
            <div className="title">
                <h1>Invoices</h1>
                <p className="title__paragraph">There are total {invoices.length} invoices</p>
            </div>
            <div>
                <button>Filter by status</button>
                <Button text={"New invoice"} />
            </div>
        </div>
    )
}

export default Header
