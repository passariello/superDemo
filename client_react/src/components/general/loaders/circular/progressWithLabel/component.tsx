/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React, { useEffect, useState } from "react"
import Progress from "../progress/component"

import styles from "./style.less"

const ProgressWithLabel = ( options ) => {

  const [ progress, setProgress ] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(( prevProgress ) => ( prevProgress >= 96 ? 99 : prevProgress + 2 ));
    }, 1000 );
    return () => clearInterval( timer );
  }, []);

  return <Progress value={ progress } options={ options } />;

}

export default ProgressWithLabel





