import React, { Component } from 'react'

import Admonition from 'react-admonitions'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <div
          style={{
            width: '30vw',
            margin: 'auto',
            marginTop: '15px',
            float: 'left'
          }}
        >
          <h2>SVG Icons</h2>
          <Admonition type='warning' title='Do not do this'>
            Doing this can be dangerous
          </Admonition>
          <Admonition type='important' title='Do not do this'>
            Remember that
          </Admonition>
          <Admonition type='caution' title='Do not do this'>
            Remember that
          </Admonition>
          <Admonition type='tip' title='Do not do this'>
            Remember that
          </Admonition>
          <Admonition type='note' title='Do not do this'>
            Remember that
          </Admonition>
          <Admonition type='question' title='How do I do this'>
            A question, Really?
          </Admonition>
        </div>
        <div style={{ width: '30vw', margin: 'auto', marginTop: '15px' }}>
          <h2>Emojis</h2>
          <Admonition type='warning' title='Do not do this' iconType='emoji'>
            Doing this can be dangerous
          </Admonition>
          <Admonition type='important' title='Do not do this' iconType='emoji'>
            Remember that
          </Admonition>
          <Admonition type='caution' title='Do not do this' iconType='emoji'>
            Remember that
          </Admonition>
          <Admonition type='tip' title='Do not do this' iconType='emoji'>
            Remember that
          </Admonition>
          <Admonition type='note' title='Do not do this' iconType='emoji'>
            Remember that
          </Admonition>
          <Admonition type='question' title='Do not do this' iconType='emoji'>
            Remember that
          </Admonition>
        </div>
      </div>
    )
  }
}
