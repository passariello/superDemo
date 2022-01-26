/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Home from "Root/pages/home/start"
import About from "Root/pages/about/start"
import Help from "Root/pages/help/start"
import Vote from "Root/pages/vote/start"

import NotFound from "Root/pages/notFound/start"


const RoutePath = () => {

  return (
    <>
      <Suspense fallback={ <img src="/public/assets/loaders/img_load.gif" alt="" /> }>

        <article>

          <section className="route-section">

            <Routes>

              <Route path="*" element={<NotFound/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/home/" element={<Home/>} />
              <Route path="/about/" element={<About/>} />
              <Route path="/help/" element={<Help/>} />
              <Route path="/vote/" element={<Vote/>} />

            </Routes>

          </section>

        </article>

      </Suspense>
    </>
  );

}

export default RoutePath
