import { createClass } from 'react'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'

export const App = createClass({
  getInitialState() {
    return {
      allSkiDays: [
          {
            resort: "Squaw Valley",
            date: new Date("1/2/2016"),
            powder: true,
            backcountry: false
          },
          {
            resort: "Kirkwood",
            date: new Date("3/28/2016"),
            powder: false,
            backcountry: false
          },
          {
            resort: "Mt.Tallac",
            date: new Date("1/2/2016"),
            powder: true,
            backcountry: true
          }
        ]
    }
  },
  countDays(filter) {
    const { allSkiDays } = this.state
    return allSkiDays.filter(
      (day) => (filter) ? day[filter] : day).length
  },
  render() {
    return (
      <div className="app">
        <SkiDayList days={this.state.allSkiDays} />
        <SkiDayCount total={this.countDays()}
                     powder={this.countDays(
                       "powder"
                     )}
                     backcountry={this.countDays(
                       "backcountry"
                     )} />
      </div>
    )
  }
})
