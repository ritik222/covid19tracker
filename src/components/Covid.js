import React, { useState } from 'react'
import { useEffect } from 'react'
import './Covid.css';
const Covid = () => {

const [data,setData] = useState([]);
    const getCovidData = async () =>{
        try{
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        }
        catch(err){
          console.log(err);
    
        }
    
      }
      useEffect(()=>{
        getCovidData();
    
      },[])


  return (
    <div>
        <section>
          <h1>Live</h1>
      <h2>Covid-19 Case Tracker</h2>

      <ul>
        <li className='card'>
            <div className='card__main'>
                <div className='class-inner'>
                    <p className='card__inner'><span>Our</span>Country</p>
                    <p className='card__total card__small'>India</p>

                </div>

            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='class-inner'>
                    <p className='card__inner'><span>Total</span>Recovered</p>
                    <p className='card__total card__small'>{data.recovered}</p>

                </div>

            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='class-inner'>
                    <p className='card__inner'><span>Total</span>Confirmed</p>
                    <p className='card__total card__small'>{data.confirmed}</p>

                </div>

            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='class-inner'>
                    <p className='card__inner'><span>Toal</span>Deaths</p>
                    <p className='card__total card__small'>{data.deaths}</p>

                </div>

            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='class-inner'>
                    <p className='card__inner'><span>Total</span>Active</p>
                    <p className='card__total card__small'>{data.active}</p>

                </div>

            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='class-inner'>
                    <p className='card__inner'><span>Last</span>Updated</p>
                    <p className='card__total card__small'>{data.lastupdatedtime}</p>

                </div>

            </div>
        </li>
      </ul>
      </section>
    </div>
  )
}

export default Covid
