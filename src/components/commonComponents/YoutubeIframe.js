/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class YoutubeIframe extends Component {
    render() {
        return (
            <div>
                <iframe src={this.props.src} height={this.props.height} width={this.props.width} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeIframe)
