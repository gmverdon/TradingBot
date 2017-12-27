const Bot = require('./lib/bot')
const dotenv = require('dotenv').config()

const opts = {
  binance: {
    key:    process.env.BINANCE_KEY,
    secret: process.env.BINANCE_SECRET
  }
}

const bot = new Bot(opts);
bot.init()
