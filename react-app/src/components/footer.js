import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './footer.css'
export class footer extends Component {
    render() {
        return (
          <footer>
            <Link to="/main/home">配送到家</Link>
            <Link to="/main/classify">分类</Link>
            <Link to="/main/vip">会员</Link>
            <Link to="/main/cart">购物车</Link>
            <Link to="/main/my">我的</Link>
          </footer>
        );
    }
}
const mapStateToProps = state=>{
    return{
        
    }
}
export default connect(mapStateToProps)(footer);
