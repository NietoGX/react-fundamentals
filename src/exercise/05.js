// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const BASE_CLASS_NAME = 'box'

const BOX_SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}

const BOX_COLORS = {
  small: 'lightblue',
  medium: 'pink',
  large: 'orange',
}

const Box = ({text, color, size}) => (
  <div
    className={`${BASE_CLASS_NAME} ${BASE_CLASS_NAME}--${size}`}
    style={{
      backgroundColor: color,
      fontStyle: 'italic',
    }}
  >
    {text}
  </div>
)

const smallBox = (
  <Box
    id="small-box"
    text="small lightblue box"
    color={BOX_COLORS.small}
    size={BOX_SIZES.small}
  />
)
const mediumBox = (
  <Box
    id="medium-box"
    text="medium pink box"
    color={BOX_COLORS.medium}
    size={BOX_SIZES.medium}
  />
)
const largeBox = (
  <Box
    id="large-box"
    text="large orange box"
    color={BOX_COLORS.large}
    size={BOX_SIZES.large}
  />
)
function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
