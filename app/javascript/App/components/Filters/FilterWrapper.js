import React from 'react'
import SelectFilter from './SelectFilter'

const filterStyle = {
  background: '#fff',
  height: '100%',
  width: '100%',
  zIndex: 1,
  position: 'absolute',
}

export default (props) => {
  // const { coins, feedSources } = props
  var propsMock = {
    "feedSources": [
      "general",
      "twitter",
      "reddit"
    ],
    "activeEntity": null,
    "coinIDs": [
      109,
      357,
      809,
      111,
      571,
      349,
      1090,
      896,
      653,
      630,
      517,
      1501,
      266,
      940,
      652,
      92,
      358,
      1003,
      777,
      686
    ],
    "coins": [
      {
        "id": 109,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/btc.svg",
        "market_info": {
          "market_cap_btc": "17075437.0",
          "percent_change_7d": "4.84",
          "available_supply": "17.08M",
          "24h_volume_btc": "655853.895049",
          "max_supply": "21M",
          "total_supply": "17.08M",
          "name": "Bitcoin",
          "rank": "1",
          "percent_change_1h": "0.14",
          "price_usd": "7507.48",
          "percent_change_24h": "-2.84",
          "last_updated": "1528159474",
          "market_cap_usd": "$128.19B",
          "symbol": "BTC",
          "24h_volume_usd": "$4.92B",
          "id": "bitcoin",
          "price_btc": "1.0"
        }
      },
      {
        "id": 357,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/eth.svg",
        "market_info": {
          "market_cap_btc": "7903032.0",
          "percent_change_7d": "13.51",
          "available_supply": "99.87M",
          "24h_volume_btc": "251092.244002",
          "max_supply": null,
          "total_supply": "99.87M",
          "name": "Ethereum",
          "rank": "2",
          "percent_change_1h": "0.58",
          "price_usd": "594.073",
          "percent_change_24h": "-4.39",
          "last_updated": "1528159459",
          "market_cap_usd": "$59.33B",
          "symbol": "ETH",
          "24h_volume_usd": "$1.89B",
          "id": "ethereum",
          "price_btc": "0.0791308135"
        }
      },
      {
        "id": 809,
        "name": "Ripple",
        "symbol": "XRP",
        "slug": "ripple",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/xrp.svg",
        "market_info": {
          "market_cap_btc": "3452270.0",
          "percent_change_7d": "17.51",
          "available_supply": "39.24B",
          "24h_volume_btc": "68554.6947844",
          "max_supply": "100B",
          "total_supply": "99.99B",
          "name": "Ripple",
          "rank": "3",
          "percent_change_1h": "0.12",
          "price_usd": "0.66047",
          "percent_change_24h": "-4.85",
          "last_updated": "1528159442",
          "market_cap_usd": "$25.92B",
          "symbol": "XRP",
          "24h_volume_usd": "$514.67M",
          "id": "ripple",
          "price_btc": "0.0000879749"
        }
      },
      {
        "id": 111,
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "slug": "bitcoin-cash",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/bch.svg",
        "market_info": {
          "market_cap_btc": "2534503.0",
          "percent_change_7d": "23.04",
          "available_supply": "17.17M",
          "24h_volume_btc": "117297.681779",
          "max_supply": "21M",
          "total_supply": "17.17M",
          "name": "Bitcoin Cash",
          "rank": "4",
          "percent_change_1h": "0.39",
          "price_usd": "1108.46",
          "percent_change_24h": "-7.18",
          "last_updated": "1528159464",
          "market_cap_usd": "$19.03B",
          "symbol": "BCH",
          "24h_volume_usd": "$880.61M",
          "id": "bitcoin-cash",
          "price_btc": "0.147647413"
        }
      },
      {
        "id": 571,
        "name": "Litecoin",
        "symbol": "LTC",
        "slug": "litecoin",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/ltc.svg",
        "market_info": {
          "market_cap_btc": "902970.0",
          "percent_change_7d": "5.86",
          "available_supply": "56.84M",
          "24h_volume_btc": "39473.5650311",
          "max_supply": "84M",
          "total_supply": "56.84M",
          "name": "Litecoin",
          "rank": "6",
          "percent_change_1h": "-0.25",
          "price_usd": "119.274",
          "percent_change_24h": "-5.14",
          "last_updated": "1528159442",
          "market_cap_usd": "$6.78B",
          "symbol": "LTC",
          "24h_volume_usd": "$296.35M",
          "id": "litecoin",
          "price_btc": "0.015887355"
        }
      },
      {
        "id": 349,
        "name": "EOS",
        "symbol": "EOS",
        "slug": "eos",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/eos.svg",
        "market_info": {
          "market_cap_btc": "1618803.0",
          "percent_change_7d": "15.45",
          "available_supply": "896.15M",
          "24h_volume_btc": "170780.341739",
          "max_supply": "1B",
          "total_supply": "900M",
          "name": "EOS",
          "rank": "5",
          "percent_change_1h": "0.33",
          "price_usd": "13.5615",
          "percent_change_24h": "-7.58",
          "last_updated": "1528159463",
          "market_cap_usd": "$12.15B",
          "symbol": "EOS",
          "24h_volume_usd": "$1.28B",
          "id": "eos",
          "price_btc": "0.0018063984"
        }
      },
      {
        "id": 1090,
        "name": "Cardano",
        "symbol": "ADA",
        "slug": "cardano",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/ada.svg",
        "market_info": {
          "market_cap_btc": "739221.0",
          "percent_change_7d": "19.81",
          "available_supply": "25.93B",
          "24h_volume_btc": "15178.3288134",
          "max_supply": "45B",
          "total_supply": "31.11B",
          "name": "Cardano",
          "rank": "7",
          "percent_change_1h": "0.22",
          "price_usd": "0.21405",
          "percent_change_24h": "-6.62",
          "last_updated": "1528159468",
          "market_cap_usd": "$5.55B",
          "symbol": "ADA",
          "24h_volume_usd": "$113.95M",
          "id": "cardano",
          "price_btc": "0.0000285116"
        }
      },
      {
        "id": 896,
        "name": "Stellar Lumens",
        "symbol": "XLM",
        "slug": "stellar",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/xlm.svg",
        "market_info": {
          "market_cap_btc": "723203.0",
          "percent_change_7d": "14.85",
          "available_supply": "18.58B",
          "24h_volume_btc": "7441.16534443",
          "max_supply": null,
          "total_supply": "104.01B",
          "name": "Stellar",
          "rank": "8",
          "percent_change_1h": "0.02",
          "price_usd": "0.292218",
          "percent_change_24h": "-4.7",
          "last_updated": "1528159446",
          "market_cap_usd": "$5.43B",
          "symbol": "XLM",
          "24h_volume_usd": "$55.86M",
          "id": "stellar",
          "price_btc": "0.0000389236"
        }
      },
      {
        "id": 653,
        "name": "NEO",
        "symbol": "NEO",
        "slug": "neo",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/neo.svg",
        "market_info": {
          "market_cap_btc": "464517.0",
          "percent_change_7d": "10.26",
          "available_supply": "65M",
          "24h_volume_btc": "12258.454235",
          "max_supply": "100M",
          "total_supply": "100M",
          "name": "NEO",
          "rank": "11",
          "percent_change_1h": "0.57",
          "price_usd": "53.6516",
          "percent_change_24h": "-5.41",
          "last_updated": "1528159454",
          "market_cap_usd": "$3.49B",
          "symbol": "NEO",
          "24h_volume_usd": "$92.03M",
          "id": "neo",
          "price_btc": "0.0071464193"
        }
      },
      {
        "id": 630,
        "name": "Monero",
        "symbol": "XMR",
        "slug": "monero",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/xmr.svg",
        "market_info": {
          "market_cap_btc": "344746.0",
          "percent_change_7d": "6.13",
          "available_supply": "16.1M",
          "24h_volume_btc": "5178.00913223",
          "max_supply": null,
          "total_supply": "16.1M",
          "name": "Monero",
          "rank": "12",
          "percent_change_1h": "0.48",
          "price_usd": "160.758",
          "percent_change_24h": "-5.29",
          "last_updated": "1528159444",
          "market_cap_usd": "$2.59B",
          "symbol": "XMR",
          "24h_volume_usd": "$38.87M",
          "id": "monero",
          "price_btc": "0.0214130441"
        }
      },
      {
        "id": 517,
        "name": "IOTA",
        "symbol": "MIOTA",
        "slug": "iota",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/miota.svg",
        "market_info": {
          "market_cap_btc": "641336.0",
          "percent_change_7d": "26.78",
          "available_supply": "2.78B",
          "24h_volume_btc": "13748.2883737",
          "max_supply": "2.78B",
          "total_supply": "2.78B",
          "name": "IOTA",
          "rank": "9",
          "percent_change_1h": "1.17",
          "price_usd": "1.73224",
          "percent_change_24h": "-5.07",
          "last_updated": "1528159461",
          "market_cap_usd": "$4.81B",
          "symbol": "MIOTA",
          "24h_volume_usd": "$103.22M",
          "id": "iota",
          "price_btc": "0.0002307352"
        }
      },
      {
        "id": 1501,
        "name": "Tron",
        "symbol": "TRX",
        "slug": "tron",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/trx.svg",
        "market_info": {
          "market_cap_btc": "518259.0",
          "percent_change_7d": "-2.65",
          "available_supply": "65.75B",
          "24h_volume_btc": "28702.1743648",
          "max_supply": null,
          "total_supply": "100B",
          "name": "TRON",
          "rank": "10",
          "percent_change_1h": "0.08",
          "price_usd": "0.0591776",
          "percent_change_24h": "-4.76",
          "last_updated": "1528159467",
          "market_cap_usd": "$3.89B",
          "symbol": "TRX",
          "24h_volume_usd": "$215.48M",
          "id": "tron",
          "price_btc": "0.0000078825"
        }
      },
      {
        "id": 266,
        "name": "Dash",
        "symbol": "DASH",
        "slug": "dash",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/dash.svg",
        "market_info": {
          "market_cap_btc": "343451.0",
          "percent_change_7d": "9.27",
          "available_supply": "8.12M",
          "24h_volume_btc": "10584.1241002",
          "max_supply": "18.9M",
          "total_supply": "8.12M",
          "name": "Dash",
          "rank": "13",
          "percent_change_1h": "0.44",
          "price_usd": "317.721",
          "percent_change_24h": "-4.43",
          "last_updated": "1528159443",
          "market_cap_usd": "$2.58B",
          "symbol": "DASH",
          "24h_volume_usd": "$79.46M",
          "id": "dash",
          "price_btc": "0.0423205923"
        }
      },
      {
        "id": 940,
        "name": "Tether",
        "symbol": "USDT",
        "slug": "tether",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/usdt.svg",
        "market_info": {
          "market_cap_btc": "333858.0",
          "percent_change_7d": "-0.25",
          "available_supply": "2.51B",
          "24h_volume_btc": "365976.332937",
          "max_supply": null,
          "total_supply": "2.83B",
          "name": "Tether",
          "rank": "14",
          "percent_change_1h": "-0.02",
          "price_usd": "0.999716",
          "percent_change_24h": "0.04",
          "last_updated": "1528159450",
          "market_cap_usd": "$2.51B",
          "symbol": "USDT",
          "24h_volume_usd": "$2.75B",
          "id": "tether",
          "price_btc": "0.0001331627"
        }
      },
      {
        "id": 652,
        "name": "NEM",
        "symbol": "XEM",
        "slug": "nem",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/xem.svg",
        "market_info": {
          "market_cap_btc": "298518.0",
          "percent_change_7d": "8.07",
          "available_supply": "9B",
          "24h_volume_btc": "1896.41530847",
          "max_supply": null,
          "total_supply": "9B",
          "name": "NEM",
          "rank": "15",
          "percent_change_1h": "-0.09",
          "price_usd": "0.249013",
          "percent_change_24h": "-6.35",
          "last_updated": "1528159457",
          "market_cap_usd": "$2.24B",
          "symbol": "XEM",
          "24h_volume_usd": "$14.24M",
          "id": "nem",
          "price_btc": "0.0000331687"
        }
      },
      {
        "id": 92,
        "name": "Binance Coin",
        "symbol": "BNB",
        "slug": "binance-coin",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/bnb.svg",
        "market_info": {
          "market_cap_btc": "219488.0",
          "percent_change_7d": "21.11",
          "available_supply": "114.04M",
          "24h_volume_btc": "7853.72721606",
          "max_supply": null,
          "total_supply": "194.97M",
          "name": "Binance Coin",
          "rank": "17",
          "percent_change_1h": "1.37",
          "price_usd": "14.4492",
          "percent_change_24h": "-0.52",
          "last_updated": "1528159464",
          "market_cap_usd": "$1.65B",
          "symbol": "BNB",
          "24h_volume_usd": "$58.96M",
          "id": "binance-coin",
          "price_btc": "0.0019246405"
        }
      },
      {
        "id": 358,
        "name": "Ethereum Classic",
        "symbol": "ETC",
        "slug": "ethereum-classic",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/etc.svg",
        "market_info": {
          "market_cap_btc": "207133.0",
          "percent_change_7d": "4.95",
          "available_supply": "102.05M",
          "24h_volume_btc": "18598.517745",
          "max_supply": null,
          "total_supply": "102.05M",
          "name": "Ethereum Classic",
          "rank": "18",
          "percent_change_1h": "0.34",
          "price_usd": "15.2384",
          "percent_change_24h": "-6.3",
          "last_updated": "1528159454",
          "market_cap_usd": "$1.56B",
          "symbol": "ETC",
          "24h_volume_usd": "$139.63M",
          "id": "ethereum-classic",
          "price_btc": "0.0020297623"
        }
      },
      {
        "id": 1003,
        "name": "VeChain",
        "symbol": "VEN",
        "slug": "vechain",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/ven.svg",
        "market_info": {
          "market_cap_btc": "273091.0",
          "percent_change_7d": "24.34",
          "available_supply": "526.05M",
          "24h_volume_btc": "12198.5806156",
          "max_supply": null,
          "total_supply": "873.38M",
          "name": "VeChain",
          "rank": "16",
          "percent_change_1h": "0.32",
          "price_usd": "3.8974",
          "percent_change_24h": "-5.12",
          "last_updated": "1528159466",
          "market_cap_usd": "$2.05B",
          "symbol": "VEN",
          "24h_volume_usd": "$91.58M",
          "id": "vechain",
          "price_btc": "0.0005191356"
        }
      },
      {
        "id": 777,
        "name": "Qtum",
        "symbol": "QTUM",
        "slug": "qtum",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/qtum.svg",
        "market_info": {
          "market_cap_btc": "161895.0",
          "percent_change_7d": "9.86",
          "available_supply": "88.65M",
          "24h_volume_btc": "18211.7035277",
          "max_supply": null,
          "total_supply": "100.65M",
          "name": "Qtum",
          "rank": "19",
          "percent_change_1h": "0.07",
          "price_usd": "13.711",
          "percent_change_24h": "-7.14",
          "last_updated": "1528159460",
          "market_cap_usd": "$1.22B",
          "symbol": "QTUM",
          "24h_volume_usd": "$136.72M",
          "id": "qtum",
          "price_btc": "0.0018263119"
        }
      },
      {
        "id": 686,
        "name": "OmiseGO",
        "symbol": "OMG",
        "slug": "omisego",
        "image_url": "https://gitcdn.link/repo/cjdowner/cryptocurrency-icons/master/svg/color/omg.svg",
        "market_info": {
          "market_cap_btc": "150920.0",
          "percent_change_7d": "13.96",
          "available_supply": "102.04M",
          "24h_volume_btc": "7584.51570967",
          "max_supply": null,
          "total_supply": "140.25M",
          "name": "OmiseGO",
          "rank": "21",
          "percent_change_1h": "0.29",
          "price_usd": "11.1035",
          "percent_change_24h": "-6.48",
          "last_updated": "1528159463",
          "market_cap_usd": "$1.13B",
          "symbol": "OMG",
          "24h_volume_usd": "$56.94M",
          "id": "omisego",
          "price_btc": "0.0014789916"
        }
      }
    ],
    "newsItems": [
      {
        "id": 4169,
        "url": "https://www.reddit.com/r/litecoin/comments/8g65aj/how_is_litecoin_better_optimized_for_payments/",
        "title": "How is Litecoin better optimized for payments?",
        "summary": null,
        "feed_item_published_at": "2018-05-01T05:36:47.000Z",
        "updated_at": "2018-05-01T05:42:09.755Z",
        "coin_ids": []
      },
      {
        "id": 4168,
        "url": "https://www.reddit.com/r/cardano/comments/8g65t1/interview_and_update_from_emurgos_darren_camas/",
        "title": "Interview and update from Emurgo's Darren Camas.",
        "summary": null,
        "feed_item_published_at": "2018-05-01T05:39:48.000Z",
        "updated_at": "2018-05-01T05:42:08.685Z",
        "coin_ids": []
      },
      {
        "id": 4167,
        "url": "https://twitter.com/nebulasio/status/991187961638146049",
        "title": "Nebulas team is now officially announcing the timing of the start of the $NAS mainnet coin swap, after which NAS ERC 20 tokens can be converted to native NAS mainnet coins. Learn more here: https://medium.com/nebulasio/announcement-on-nas-mainnet-coin-swap-starts-in-exchanges-d23c7b499d3e …",
        "summary": "<p class=\"TweetTextSize TweetTextSize--normal js-tweet-text tweet-text\"  lang=\"en\">Nebulas team is now officially announcing the timing of the start of the  <a class=\"twitter-cashtag pretty-link js-nav\"  dir=\"ltr\" href=\"https://twitter.com/search?q=%24NAS&amp;src=ctag\">$<b>NAS</b></a> mainnet coin swap, after which NAS ERC 20 tokens can be converted to native NAS mainnet coins. Learn more here:  <a href=\"https://medium.com/nebulasio/announcement-on-nas-mainnet-coin-swap-starts-in-exchanges-d23c7b499d3e\">https://medium.com/nebulasio/announcement-on-nas-mainnet-coin-swap-starts-in-exchanges-d23c7b499d3e&nbsp;&hellip;</a></p>",
        "feed_item_published_at": "2018-05-01T05:30:00.000Z",
        "updated_at": "2018-05-01T05:40:56.200Z",
        "coin_ids": []
      },
      {
        "id": 4166,
        "url": "https://www.reddit.com/r/Ripple/comments/8g6553/earn_massive_passive_income_with_proof_of_trevon/",
        "title": "Earn MASSIVE Passive Income With \"Proof Of Trevon James Coin\" An Auditable Smart Contract That Pays You 25% On Every Buy And Sale Of The Coin, Based On How Much You Hold",
        "summary": null,
        "feed_item_published_at": "2018-05-01T05:35:55.000Z",
        "updated_at": "2018-05-01T05:40:31.572Z",
        "coin_ids": []
      },
      {
        "id": 4165,
        "url": "https://www.newsbtc.com/2018/05/01/morgan-stanley-racing-lead-wall-street-pack-crypto/",
        "title": "Morgan Stanley is Racing to Lead the Wall Street Pack into Crypto",
        "summary": "<p>Morgan Stanley is gearing up to make their move into crypto, hoping to beat the Wall Street pack and leave long time rival Goldman Sachs behind according to insiders. Morgan Stanley Accelerates Move into the Crypto Market According to an interview with an unnamed insider at Morgan Stanley that has been reprinted by SludgeFeed, Morgan<a class=\"read-more\" href=\"https://www.newsbtc.com/2018/05/01/morgan-stanley-racing-lead-wall-street-pack-crypto/\" data-wpel-link=\"internal\">...</a></p>\n<p>The post <a rel=\"nofollow\" href=\"https://www.newsbtc.com/2018/05/01/morgan-stanley-racing-lead-wall-street-pack-crypto/\" data-wpel-link=\"internal\">Morgan Stanley is Racing to Lead the Wall Street Pack into Crypto</a> appeared first on <a rel=\"nofollow\" href=\"https://www.newsbtc.com\" data-wpel-link=\"internal\">NewsBTC</a>.</p>",
        "feed_item_published_at": "2018-05-01T05:30:42.000Z",
        "updated_at": "2018-05-01T05:38:18.548Z",
        "coin_ids": []
      },
      {
        "id": 4164,
        "url": "https://www.reddit.com/r/Iota/comments/8g52yy/daily_riota_discussion_ask_questions_and_share/",
        "title": "Daily r/IOTA Discussion - Ask questions, and share info, thoughts, ideas! May 01, 2018",
        "summary": null,
        "feed_item_published_at": "2018-05-01T02:22:13.000Z",
        "updated_at": "2018-05-01T05:37:28.756Z",
        "coin_ids": []
      },
      {
        "id": 4163,
        "url": "https://www.reddit.com/r/eos/comments/8g64c2/how_is_eos_the_ethereum_killer_if_its_an_erc20/",
        "title": "How is EOS the \"Ethereum killer\" if it's an ERC-20 token? Isn't that suicide??",
        "summary": null,
        "feed_item_published_at": "2018-05-01T05:31:07.000Z",
        "updated_at": "2018-05-01T05:34:11.207Z",
        "coin_ids": []
      },
      {
        "id": 4162,
        "url": "https://www.reddit.com/r/NEO/comments/8g64e1/conciergeio_current_platform_development/",
        "title": "Concierge.io - Current platform development",
        "summary": null,
        "feed_item_published_at": "2018-05-01T05:31:24.000Z",
        "updated_at": "2018-05-01T05:33:28.448Z",
        "coin_ids": []
      },
      {
        "id": 4161,
        "url": "https://cointelegraph.com/news/cftc-chairman-on-crypto-regulation-i-dont-see-it-being-resolved-anytime-soon",
        "title": "CFTC Chairman On Crypto Regulation: ‘I Don’t See It Being Resolved Anytime Soon’",
        "summary": "<p style=\"float:right; margin:0 0 10px 15px; width:240px;\">\n                    <img src=\"https://images.cointelegraph.com/images/528_Ly9jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9jNGJiZTU2ODU4Y2M4Y2RjOTFhN2QxNTRhNGE3MmE0My5qcGc=.jpg\">\n                    \n                    <p>CFTC chairman says there won’t be comprehensive legislation toward Bitcoin and other cryptocurrencies at a federal level any time soon.</p>\n                    <p><p dir=\"ltr\">The <a href=\"https://cointelegraph.com/tags/usa\">US</a> Commodity Futures Trading Commission (<a href=\"https://cointelegraph.com/tags/cftc\">CFTC</a>) chairman Chris Giancarlo said he doesn&rsquo;t see comprehensive crypto legislation coming from the federal level in the near future, <a  href=\"https://www.msn.com/en-us/money/videos/carter-worth-cornerstone-macro-discusses-the-potential-moves-for-apple-after-its-earnings-release/vi-AAwz7wp\" rel=\"nofollow,noopener\"  rel=\"nofollow\" target=\"_blank\">CNBC reports April 30</a>.</p>\n\n<p>In an interview on Monday, Giancarlo pointed out that the statutes by which the CFTC is operating were written in 1935. He said that embracing a modern innovation like <a href=\"https://cointelegraph.com/tags/bitcoin\">Bitcoin</a> within terms invented decades ago will take time:</p>\n\n<blockquote>\n<p>&ldquo;The statutes we are operating, you know, were written... in 1935 &hellip; And it&rsquo;s often hard to look at those statutes and find out where something as new and innovative as Bitcoin and many other cryptocurrencies, where do they fall into a regulatory regime which was written decades ago... we see elements of commodities that are subject to our regulation, but depending on which regulatory regime you are looking at, it has different aspects of all of that.&rdquo;</p>\n</blockquote>\n\n<p>He noted that two major <a href=\"https://cointelegraph.com/tags/usa\">US</a> exchanges, <a href=\"https://cointelegraph.com/tags/cboe\">CBOE</a> and <a href=\"https://cointelegraph.com/tags/cme\">CME</a>, are successfully operating Bitcoin futures contracts. Giancarlo said that the complicated nature of Bitcoin itself makes it difficult to regulate:</p>\n\n<blockquote>\n<p>&ldquo;...Bitcoin and a lot of other virtual currency counterparts really have elements of all of the different asset classes whether a medium of payment, whether a long-term asset, and so as regulators we&rsquo;ve come to grips with this just now in real time and it&rsquo;s complicated. And I don&rsquo;t see it being resolved any time soon.&rdquo;</p>\n</blockquote>\n\n<p>Giancarlo stressed that the main role of a regulator is to watch that everyone on the market acts according with the laws set by Congress. He said that one might see &ldquo;in this Congress or in a future Congress, an attempt to deal with this new innovation.&rdquo; When asked whether he believed Congress was capable of resolving the regulatory dissonance in the crypto sphere, he answered:</p>\n\n<blockquote>\n<p>&ldquo;...There&rsquo;s certainly an appetite among a number of Congressmen and [Congresswomen] and Senators that I&rsquo;ve spoken to, to approach this with some new eyes, some new thinking and so I think there&rsquo;s a growing chorus on Capitol Hill for some re-thinking here.&rdquo;</p>\n</blockquote>\n\n<p>Earlier today, US <a href=\"https://cointelegraph.com/tags/sec\">Securities and Exchange Commission</a> (SEC) Commissioner Robert Jackson <a href=\"https://cointelegraph.com/news/us-ico-market-is-example-of-unregulated-securities-market-says-sec-commissioner\">called</a> the initial coin offerings (<a href=\"https://cointelegraph.com/tags/ico\">ICO</a>) market a prime example of an unregulated securities market vis-a-vis the issue of consumer protection in ICOs.</p>\n</p>",
        "feed_item_published_at": "2018-05-01T04:26:09.000Z",
        "updated_at": "2018-05-01T05:33:12.209Z",
        "coin_ids": []
      },
      {
        "id": 4160,
        "url": "https://www.cryptoninjas.net/2018/05/01/nauticus-joins-the-enterprise-ethereum-alliance-in-midst-of-ico/",
        "title": "Nauticus joins the Enterprise Ethereum Alliance in midst of ICO",
        "summary": "<p>Nauticus Blockchain, an Aussie registered cryptocurrency exchange and ecosystem including mining center, and ICO gateway today announced its membership in the Enterprise Ethereum Alliance. The Nauticas team has recently released the beta of its soon to launch exchange app.</p>\n<p><a rel=\"nofollow\" href=\"https://www.cryptoninjas.net/2018/05/01/nauticus-joins-the-enterprise-ethereum-alliance-in-midst-of-ico/\">Nauticus joins the Enterprise Ethereum Alliance in midst of ICO</a></p>",
        "feed_item_published_at": "2018-05-01T05:23:30.000Z",
        "updated_at": "2018-05-01T05:27:14.091Z",
        "coin_ids": []
      }
    ],
    "tags": [],
    "activeFilters": [],
    "availableFilters": [
      {
        "key": "coins",
        "label": "Coins"
      },
      {
        "key": "feedSources",
        "label": "Feed Sources"
      }
    ],
    "disabledFilters": [],
    "filterList": [
      {
        "key": "search",
        "label": "Search",
        "unlisted": true
      },
      {
        "key": "coins",
        "label": "Coins"
      },
      {
        "key": "feedSources",
        "label": "Feed Sources"
      }
    ],
    "filterData": {
      "coins": [
        {
          "id": 109,
          "label": "Bitcoin"
        },
        {
          "id": 357,
          "label": "Ethereum"
        },
        {
          "id": 809,
          "label": "Ripple"
        },
        {
          "id": 111,
          "label": "Bitcoin Cash"
        },
        {
          "id": 571,
          "label": "Litecoin"
        },
        {
          "id": 349,
          "label": "EOS"
        },
        {
          "id": 1090,
          "label": "Cardano"
        },
        {
          "id": 896,
          "label": "Stellar Lumens"
        },
        {
          "id": 653,
          "label": "NEO"
        },
        {
          "id": 630,
          "label": "Monero"
        },
        {
          "id": 517,
          "label": "IOTA"
        },
        {
          "id": 1501,
          "label": "Tron"
        },
        {
          "id": 266,
          "label": "Dash"
        },
        {
          "id": 940,
          "label": "Tether"
        },
        {
          "id": 652,
          "label": "NEM"
        },
        {
          "id": 92,
          "label": "Binance Coin"
        },
        {
          "id": 358,
          "label": "Ethereum Classic"
        },
        {
          "id": 1003,
          "label": "VeChain"
        },
        {
          "id": 777,
          "label": "Qtum"
        },
        {
          "id": 686,
          "label": "OmiseGO"
        }
      ],
      "feedSources": [
        {
          "id": "general",
          "label": "general"
        },
        {
          "id": "twitter",
          "label": "twitter"
        },
        {
          "id": "reddit",
          "label": "reddit"
        }
      ]
    }
  }
  var props = { ...props, ...propsMock }

  var mappedNews = props.newsItems.map(item => {
    let strMap = new Map();
    for (let k of Object.keys(item)) {
      strMap.set(k, item[k]);
    }
    return strMap;
  })
  var availFilters = props.availableFilters.map(item => {
    let strMap = new Map();
    for (let k of Object.keys(item)) {
      strMap.set(k, item[k]);
    }
    return strMap;
  })
  props.newsItems = mappedNews
  props.availableFilters = availFilters
  const uiKey = 'newFilter'

  return (
    <div style={filterStyle}>

      <SelectFilter {...{ ...props, uiKey }} />
    </div>
  )
}
