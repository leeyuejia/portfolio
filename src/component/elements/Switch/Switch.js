import React, {useState, Component, useContext} from 'react'
import {ThemeContext} from 'styled-components'

export default function Switch(props) {
    const themeContext = useContext(ThemeContext)

    return (
        <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          checked={themeContext.state}
          onChange={themeContext.toggle}
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
          {themeContext.state? 'Dark Mode' : 'Light mode'}
        </label>
      </div>
    )
}