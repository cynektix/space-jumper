import PT from 'prop-types'
import React from 'react'

import styles from './game-level-accomplished.scss'

const GameLevelAccomplished = props => (
  <div className={styles['game-level-accomplished-container']}>
    <h1>Level Accomplished</h1>
    <button onClick={props.closeLevelAccomplished}>Next Level</button>
  </div>
)

if (process.env.NODE_ENV !== 'production') {
  GameLevelAccomplished.propTypes = {
    closeLevelAccomplished: PT.func.isRequired,
  }
}

export default GameLevelAccomplished
