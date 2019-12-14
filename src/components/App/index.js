import React, {Component} from 'react';
import Shelf from '../Shelf';
import GenderFilter from '../Shelf/genderFilter';
import StyleFilters from '../Shelf/styleFilter';
import GlobalHeader from "../GlobalHeader";
import GlobalFooter from "../GlobalFooter";

class App extends Component {
  render() {
    return (
          <React.Fragment>
            <GlobalHeader isSmall={true}/>
            <div className={`product-listing`}>
              <aside className={`sidebar`}>
                <a className={`reset`} href="/product">RESET FILTERS</a>
                <GenderFilter selectedItem={this.props.match.params.handle} filterArray={['Men', 'Women']} filterText={`Gender`} />
                <StyleFilters selectedItem={this.props.match.params.handle} filterArray={["Zumba","BallRoom","Salsa","Latin"]} filterText={`Dance Type`} />
              </aside>
              <Shelf/>
            </div>
            <GlobalFooter/>
          </React.Fragment>
        );
  }
}
export default App;

