import PropTypes from 'prop-types';

class HomePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      image: '',
      name: ''
    }
  }

  render() {
    return (
      <div className="homepage">
        <button className="random"></button>
        <button className="save"></button>
      </div>
    )
  }
}

HomePage.PropTypes = {

}