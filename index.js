'use strict'

const electron = require('electron')
const moment = require('moment')
const path = require('path')
const screenshot = require('desktop-screenshot')

const app = electron.app

const captureDelay = 60000
const dir = path.join(__dirname, '.cap')

function capture (cb) {
  const now = Date.now()
  const ts = moment(now).format('YYYY-MM-DD-HH-mm-ss')
  const filename = `${ts}.png`

  screenshot(path.join(dir, filename), cb)
}

start()

function start () {
  app.on('ready', () => {
    setInterval(() => {
      capture((err, res) => {
        if (err) { console.error(err) }
      })
    }, captureDelay)
    capture()
  })
}
