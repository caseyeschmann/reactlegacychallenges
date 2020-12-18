import React, {Component} from 'react'

class FetchDog extends Component {
    constructor () {
      super()
      this.state = {
        url: ''
    }
    }

    // method that will re-render when triggered

    componentDidMount() {
        fetch('https://dog.ceo/dog-api')
        // fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            this.setState({
                url: data.url
            })
            console.log(this.state.url)
        })
    }

    render() {
        return (
        <div>
            <img src={this.state.url} alt="no image found" />
            <br />
            <button onClick={this.componentDidMount}>Show another Doggo!</button>
        </div>
        )
      }
    }

export default FetchDog;