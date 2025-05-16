/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import "./styles.scss"

const Footer = () => {

  return (

    <footer>
      <div><b>{superDemo.conf.app.name}</b> - {superDemo.conf.description} Ver. {superDemo.conf.version} </div>
      <div>{superDemo.conf.author.name}, Copyright &copy; {new Date().getFullYear()} </div>
    </footer>

  )

}

export default Footer
