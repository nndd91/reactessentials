import { createClass, PropTypes} from 'react'
import '../stylesheets/ui.scss'

export const SkiDayCount = createClass({
  propTypes: {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number
  },
  getDefaultProps() {
    return {
      total: 50,
      powder: 50,
      backcountry: 15,
      goal: 100
    }
  },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
          <span>hiking day</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
})
