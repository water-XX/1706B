import React from 'react';
import {connect} from 'dva';
import './index.scss'
const mapStateToProps = state=>{
  return {
    type: state.gov.type,
    info: state.gov.info
  }
}

@connect(mapStateToProps)
class NewGov extends React.Component{
  render(){
    console.log('props...', this.props);
    return <>
     <p><span>机构名称</span><input type="text"/></p>
     <p><span>机构缩写</span><input type="text"/></p>
     <p><span>机构地区</span><input type="text"/></p>
     <p><span>机构地址</span><input type="text"/></p>
     <p><span>校长姓名</span><input type="text"/></p>
     <p><span>校长手机号</span><input type="text"/></p>
    </>
  }
}

export default NewGov;
