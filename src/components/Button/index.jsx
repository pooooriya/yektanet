import React from 'react'
import {Button} from './style'
const Index = ({OnClick,children}) => {
    return (
      <Button onClick={()=>OnClick()}>{children}</Button>
    )
}


export default Index
