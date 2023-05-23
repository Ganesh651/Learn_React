import {Component} from 'react'
import './index.css'

class Counter extends Component{
      state = {count: 0}

      onIncrease = ()=>{
            this.setState(prevSate=>({count: prevSate.count + 1}))
      }

      ondecrease = ()=>{
            this.setState(prevSate=>({count: prevSate.count - 1}))
      }


      render(){
            const {count} = this.state

            return(
                  <div className='counter-bg-container'>
                      <div className='card'>
                          <h1 className='heading text-warning'>Count</h1>
                          <p className='count'>{count}</p>
                          <div className='d-flex justify-content-around'>
                          <button onClick={this.onIncrease} className='btn btn-primary' type='button'>Increase</button>
                          <button onClick={this.ondecrease} className='btn btn-success' type='button'>Decrease</button>
                          </div>
                        </div>  
                  </div>
            )
      }
}

export default Counter