import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './IndexPage.scss';
import MyMenu from '@/components/MyMenu';
import RouterView from '@/routes/RouterView'

const { Header, Content, Sider } = Layout;


class IndexPage extends React.Component{
  render(){
    console.log('this.router...', this.props);
    return (
      <Layout className={styles.wrap}>
        <Header className="header">
          头部
        </Header>
        <Layout className={styles.container}>
          <Sider width={200} className={styles.sider}>
            <MyMenu/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className={styles.content}>
              <RouterView routes={this.props.routes}/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(IndexPage);
