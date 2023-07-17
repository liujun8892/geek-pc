import React, { Component } from 'react';
import { Card } from 'antd';
import './index.css';
import Logo from '../../assets/logo.png';

export default class index extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-card">
          <img src={Logo} className="login-logo" alt="极客园" />
        </Card>
      </div>
    );
  }
}
