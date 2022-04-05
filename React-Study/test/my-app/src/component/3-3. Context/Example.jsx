import React, { Component } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import ThemedButton from './ThemedButton'

export default class Example extends Component {
  constructor(props){
    super(props)
    this.state={
      theme:themes.light
    }
    this.toggleTheme=()=>{
      this.setState((prev)=>({
        theme: prev.theme===themes.dark ? themes.light : themes.dark
      }))
    }
  }
  render() {
    return (
      <div>
        {/* .Provider는 context를 구독하는 컴포넌트에게 context의 변화를 알리는 역할(props를 받아서 전달) */}
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton changeTheme={this.toggleTheme}/>
          {/* .Comsumer는 context의 변화를 구독하는 컴포넌트, 자식이 함수여야 함 */}
          <ThemeContext.Consumer>
            {(theme)=>(
              <div 
                style={{
                  height:300,
                  width:300,
                  backgroundColor:theme.background
                }}
              ></div>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
          <ThemedButton/>
      </div>
    )
  }
}
