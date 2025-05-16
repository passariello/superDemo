/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { Suspense } from "react"
import { Routes, Route } from 'react-router'

import Home from "/src/pages/home/start"
import About from "/src/pages/about/start"
import Help from "/src/pages/help/start"
import Vote from "/src/pages/vote/start"

import NotFound from "/src/pages/notFound/start"


const RoutePath = () => {

  return (
    <>
      <Suspense fallback={<img src="https://raw.githubusercontent.com/passariello/container/refs/heads/main/assets/loaders/img_load.gif" alt="" />}>

        <article>

          <section className="route-section">

            <div id="demo">This is just a live demo. Visit <b><a href="https://github.com/passariello/superDemo"> GitHub </a></b> for more information </div>

            <Routes>

              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/home/" element={<Home />} />
              <Route path="/about/" element={<About />} />
              <Route path="/help/" element={<Help />} />
              <Route path="/vote/" element={<Vote />} />

            </Routes>

          </section>

        </article>

      </Suspense>
    </>
  )

}

export default RoutePath
