import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="o-footer">
        <div className="o-footer__actionItem">
            Overview
        </div>
        <div className="o-footer__actionItem">
            Accounts
        </div>
        <div className="o-footer__actionItem">
            Trends
        </div>
        <div className="o-footer__actionItem">
            Settings
        </div>
      </div>
    )
  }
}
