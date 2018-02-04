# Trading bot! :money_with_wings::chart_with_upwards_trend:
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/gmverdon/TradingBot/issues)

For as now this trading bot only supports [Binance](https://www.binance.com). It is important to note that this bot is not finished and that the bot cannot trade with real money yet. 

![TradingHub](https://raw.githubusercontent.com/gmverdon/TradingBot/master/screenshots/TradingHub.png)

To use this bot follow these steps:

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

## 4. Accept Binance connection (known issue)
Currently the Binance API does not contain a CORS (Cross-Origin Resource Sharing) header. This results into connection problems when connecting from a browser to their API. If you have connection problems you can try installing a browser plugin which includes the Allow-Control-Allow-Origin: * header clientside. Unfortunately, even with this plugin, it is currently not possible to trade with real money. *I have already informed Binance about this problem*.

## 5. Happy Trading
Use at your own risk.

## Legal Note
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
