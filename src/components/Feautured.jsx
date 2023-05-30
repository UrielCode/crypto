/* eslint-disable react/no-unescaped-entities */
/* 
API: cryptocointracker
*/
import './Feautured.css'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Feautured = () => {

  const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  // console.log(data.coins[7]);

  if (!data) return null

  return (
    <div className='featured'>
      <div className="container">
        {/* left */}
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <div className="btn">See More Coins</div>
        </div>
        {/* right */}

        <div className="right">

          <div className="card">
            <div className="top">
              <img src={data.coins[0].icon} alt="" />
              <div>
                <h5>{data.coins[0].name}</h5>
                <p>${data.coins[0].price.toLocaleString()}</p>

              </div>

              {data.coins[5].priceChange1d < 0
                ?
                (<span className='red'>
                  <FiArrowDownRight className='icon' />
                  {data.coins[5].priceChange1d.toFixed(2)}%
                </span>)
                : (<span className='green'>
                  <FiArrowUpRight className='icon' />
                  {data.coins[5].priceChange1d.toFixed(2)}%
                </span>)
              }
            </div>
          </div>

          <div className="card">
            <div className="top">
              <img src={data.coins[1].icon} alt="" />
              <div>
                <h5>{data.coins[1].name}</h5>
                <p>${data.coins[1].price.toLocaleString()}</p>

              </div>

              {data.coins[1].priceChange1d < 0
                ?
                (<span className='red'>
                  <FiArrowDownRight className='icon' />
                  {data.coins[1].priceChange1d.toFixed(2)}%
                </span>)
                : (<span className='green'>
                  <FiArrowUpRight className='icon' />
                  {data.coins[1].priceChange1d.toFixed(2)}%
                </span>)
              }
            </div>
          </div>

          <div className="card">
            <div className="top">
              <img src={data.coins[2].icon} alt="" />
              <div>
                <h5>{data.coins[2].name}</h5>
                <p>${data.coins[2].price.toLocaleString()}</p>

              </div>

              {data.coins[2].priceChange1d < 0
                ?
                (<span className='red'>
                  <FiArrowDownRight className='icon' />
                  {data.coins[2].priceChange1d.toFixed(2)}%
                </span>)
                : (<span className='green'>
                  <FiArrowUpRight className='icon' />
                  {data.coins[2].priceChange1d.toFixed(2)}%
                </span>)
              }
            </div>
          </div>

          <div className="card">
            <div className="top">
              <img src={data.coins[3].icon} alt="" />
              <div>
                <h5>{data.coins[3].name}</h5>
                <p>${data.coins[3].price.toLocaleString()}</p>

              </div>

              {data.coins[3].priceChange1d < 0
                ?
                (<span className='red'>
                  <FiArrowDownRight className='icon' />
                  {data.coins[3].priceChange1d.toFixed(2)}%
                </span>)
                : (<span className='green'>
                  <FiArrowUpRight className='icon' />
                  {data.coins[3].priceChange1d.toFixed(2)}%
                </span>)
              }
            </div>
          </div>

          <div className="card">
            <div className="top">
              <img src={data.coins[4].icon} alt="" />
              <div>
                <h5>{data.coins[4].name}</h5>
                <p>${data.coins[4].price.toLocaleString()}</p>

              </div>

              {data.coins[4].priceChange1d < 0
                ?
                (<span className='red'>
                  <FiArrowDownRight className='icon' />
                  {data.coins[4].priceChange1d.toFixed(2)}%
                </span>)
                : (<span className='green'>
                  <FiArrowUpRight className='icon' />
                  {data.coins[4].priceChange1d.toFixed(2)}%
                </span>)
              }
            </div>
          </div>

          <div className="card">
            <div className="top">
              <img src={data.coins[5].icon} alt="" />
              <div>
                <h5>{data.coins[5].name}</h5>
                <p>${data.coins[5].price.toLocaleString()}</p>

              </div>

              {data.coins[5].priceChange1d < 0
                ?
                (<span className='red'>
                  <FiArrowDownRight className='icon' />
                  {data.coins[5].priceChange1d.toFixed(2)}%
                </span>)
                : (<span className='green'>
                  <FiArrowUpRight className='icon' />
                  {data.coins[5].priceChange1d.toFixed(2)}%
                </span>)
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Feautured