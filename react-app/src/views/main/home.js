import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import '../../mock/mock'
import './home.css'
export class home extends Component {
    componentDidMount(){
        axios.get('/api/list').then(res=>{
            console.log(res.data.list)
            this.props.initialData(res.data.list)
        })
    }
    render() {
        
        let {list} = this.props
        console.log('list....',list)
        return <div className="wrap">
            {
                list.map((item,index)=>{
                    return <li key={index}>
                        <img src={item.img}/>
                        <p>{item.title}</p>
                        <div>
                            <span>${item.price}</span>
                            <button>+</button>
                        </div>
                    </li>
                })
            }
            </div>
    }
}
const mapStateToProps = state=>{
    console.log('state....',state);
    return{
        list:state.list
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        initialData:payload=>{
            dispatch({
                type:'INITIAL_DATA',
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(home);
