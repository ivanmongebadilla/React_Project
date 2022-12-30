import React from 'react';
import './widgetsLarge.css';

const WidgetsLarge = () => {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type} >{type}</button>
  }

  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Latest transacionts</h3>
        <table className='widgetLgTable'>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img className='widgetLgImg' src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="" />
              <span className='widgetLgName'>Carol Badilla</span>
            </td>
            <td className='widgetLgDate'>12 Dic 2022</td>
            <td className='widgetLgAmount'>$236.34</td>
            <td className='widgetLgStatus'><Button type="Approved" /></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img className='widgetLgImg' src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="" />
              <span className='widgetLgName'>Carol Badilla</span>
            </td>
            <td className='widgetLgDate'>12 Dic 2022</td>
            <td className='widgetLgAmount'>$236.34</td>
            <td className='widgetLgStatus'><Button type="Pending" /></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img className='widgetLgImg' src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="" />
              <span className='widgetLgName'>Carol Badilla</span>
            </td>
            <td className='widgetLgDate'>12 Dic 2022</td>
            <td className='widgetLgAmount'>$236.34</td>
            <td className='widgetLgStatus'><Button type="Declined" /></td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img className='widgetLgImg' src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="" />
              <span className='widgetLgName'>Carol Badilla</span>
            </td>
            <td className='widgetLgDate'>12 Dic 2022</td>
            <td className='widgetLgAmount'>$236.34</td>
            <td className='widgetLgStatus'><Button type="Approved" /></td>
          </tr>
        </table>
    </div>
  )
};

export default WidgetsLarge;