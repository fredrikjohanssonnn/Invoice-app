import Button from "./Button"

const Header = () => {
    return (
        <div className="header">
            <div className="title">
                <h1>Invoices</h1>
                <p className="title__paragraph">There are total 7 invoices</p>
            </div>
            <div>
                <button>Filter by status</button>
                <Button text={"New invoice"} />
            </div>
        </div>
    )
}

export default Header
