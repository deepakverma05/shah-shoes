import React, {Component} from 'react';

class GlobalFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`footer`}>
          <label className={`footer__copyright`}>Copyright 2020. All Rights Reserved.</label>
          <label className={`footer__credits`}>Designed and developed By - AidMyBiz</label>
        </div>
      </React.Fragment>
    );
  }
}
export default GlobalFooter;
