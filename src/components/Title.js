import { Component } from 'react'

const styles = {
    title: {
        marginBottom: '30px',
    }
}

class Title extends Component {
  render() {
    return (
      <h1 style={styles.title}> Titulo</h1>
    )
  }
}

export default Title