import React from 'react';
import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItems'>
        <span className='featuredTitle'>Revanue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,345</span>
          <span className='featuredMoneyRate'>
            -11.4
            <ArrowDownward className='featuredIcon negative' /> 
          </span>
        </div>
        <span className='featuredSub'>
          Compared to last month
        </span>
      </div>
      <div className='featuredItems'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$5,457</span>
          <span className='featuredMoneyRate'>
            -5.4
            <ArrowDownward className='featuredIcon negative' /> 
          </span>
        </div>
        <span className='featuredSub'>
          Compared to last month
        </span>
      </div>
      <div className='featuredItems'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$1,457</span>
          <span className='featuredMoneyRate'>
            +2.4
            <ArrowUpward className='featuredIcon positive' /> 
          </span>
        </div>
        <span className='featuredSub'>
          Compared to last month
        </span>
      </div>
    </div>
  )
}

export default FeaturedInfo