/* eslint-disable react/jsx-props-no-spreading */
/*!

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'
import PageChange from '../components/PageChange/PageChange'
import '../assets/scss/nextjs-material-kit.scss'

Router.events.on('routeChangeStart', (url) => {
  document.body.classList.add('body-page-transition')
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition'),
  )
})
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById('page-transition'),
  )
  document.body.classList.remove('body-page-transition')
})
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById('page-transition'),
  )
  document.body.classList.remove('body-page-transition')
})

export default class MyApp extends App {
  componentDidMount() {
    const comment = document.createComment(`

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`)
    document.insertBefore(comment, document.documentElement)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Opera singer, musician, artist, tenor. Here you can find upcoming opera performances, music, photos, credentials and much more."
          />
          <meta name="theme-color" content="#000000" />
          <title>Wibert Stur, Musician, Baritone, Artist</title>
        </Head>
        <DefaultSeo
          title="Musician, Baritone, Artist"
          description="Musician m.m."
          openGraph={{
            type: 'website',
            locale: 'sv_SE',
            url: 'https://www.lab.hehe',
            title: 'Musician, Baritone, Artist',
            description: 'Musician m.m.',
            site_name: 'wiebersk',
            imageWidth: 1200,
            imageHeight: 1200,
            profile: {
              firstName: 'Wibert',
              lastName: 'Stur',
            },
          }}
        />
        <Component {...pageProps} />
      </>
    )
  }
}
