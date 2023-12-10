import React from 'react'
import { typography } from '../theme'

export default  ({ 
    color,
    border,
    
    children,
    height = '50px',
    onClick, 
    radius = '10px',
    width= '100px'
  }) => {
    console.log(color, height, width, typography.body)
    return (
        <button 
          onClick={onClick}
          style={{
             backgroundColor: color.main,
             border: border ? border : `2px solid ${color.dark}`,
             borderRadius: radius,
             height: height,
             width: width,
             fontFamily: typography.body.fontFamily,
             fontSize: typography.body.fontSize,
             }
          }
        
        >
        {children}
        </button>
      )
  }

  