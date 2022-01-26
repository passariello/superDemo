/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React from 'react';

import "./styles.scss";

const Footer = () => {

  return (

    <footer>
      <div><b>{ _SuperDemo.conf.appName }</b> - { _SuperDemo.conf.description } Ver. { _SuperDemo.conf.version } </div>
      <div>{ _SuperDemo.conf.author.name }, Copyright &copy; { new Date().getFullYear() } </div>
    </footer>

  );

}

export default Footer
