## Trading bot! :money_with_wings::chart_with_upwards_trend:

For as now this trading bot only supports Binance. To use this bot follow these steps:

## 1. Cloning

```sh
git clone git@github.com:gmverdon/TradingBot.git
cd trade-bot
npm install
```

## 2. API key and secret
Add a .env file in the root folder and add your binance api variables in the following manner:

```sh
# Binance api variables
BINANCE_KEY = ...
BINANCE_SECRET = ...
```

## 3. Start project
```sh
npm start
```

## 4. Change variables (optional)
Go to lib/bot.js and change the variables in the constructor.

## 5. Happy Trading
