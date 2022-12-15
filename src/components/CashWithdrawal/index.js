// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  updateBalance = value => {
    this.setState(PrevAmount => ({amount: PrevAmount.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card">
          <div className="name-card">
            <div className="initial-card">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-card">
            <p className="balance">Your Balance</p>
            <p className="amount">
              {amount}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="balance">Withdrawal</p>
          <p className="amount">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-items">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
