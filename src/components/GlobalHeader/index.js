import React, {Component} from 'react';
import '../../static/new-logo-2.png';

class GlobalHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.isSmall? 'small header':'header'}>
          <a href={"/"} className={'header__logo'}></a>
          <nav className={`header__navigation`}>
            <ul className={`header__navigation-list`}>
              <li className={`header__navigation-list-item`}> <a href={"/about"}>About</a></li>
              <li className={`header__navigation-list-item`}> <a href={"/about"}>Our Story</a></li>
              <li className={`header__navigation-list-item`}> <a href={"/about"}>Help and Info</a></li>
              <li className={`header__navigation-list-item`}> <a href={"/about"}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default GlobalHeader;
