
const ActionButton = ({ text, color }) => {
    return (
        <button className={'action-btn btn ' + color}>
            {text}
        </button>
    )
}

export default ActionButton
