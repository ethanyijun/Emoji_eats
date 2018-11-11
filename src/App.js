import React from 'react'
import Header from './components/Header'
import './App.css';
import MenuItem from './components/MenuItem';
import {menuData} from './data/menuData'
import Order from './components/Order';
import Loading from './components/Loading'

class App  extends React.Component{
  state = {
    order: [],
    total: 0,
    data: []
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({data: menuData})},3000)
  }

  handleUpdate = (name,price) => {
      const newItem = { name,price }
      this.setState({
        order: this.state.order.concat(newItem),
        total: this.state.total + price
      })
  }
  submitOrder = () => {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(
        `Welcome to emoji eats. You have ordered ${this.state.order.map(item=>item.name)}
        , This comes to a total of ${this.state.total} dollars`
      )
      console.log(utterThis)
      synth.speak(utterThis)
    }
  resetOrder = () => {
    this.setState({
      order: [],
      total: 0
    })
  }

  render(){
    const {total, order, data} = this.state
    return(
      <div className="App">
        <Header/>
        {data.length === 0 ? (
          <Loading />
        ):(
        <div className="menu">
          <div className="menuitems">
            {menuData.map((item,index) => (
              <MenuItem 
                key = {index}
                name = {item.name}
                lable = {item.label}
                emoji = {item.emoji}
                description = {item.description}
                price = {item.price}
                updateOrder = {this.handleUpdate}
              />
            ))

            }
          </div>
          <Order
            order = {order}
            total = {total}
            handleReset = {this.resetOrder}
            handleSubmit = {this.submitOrder}
          />
        </div>
        )}
      </div> 
    )
  }
}

export default App