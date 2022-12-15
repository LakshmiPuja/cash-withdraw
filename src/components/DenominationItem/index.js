// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const withDrawal = () => {
    updateBalance(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={withDrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
