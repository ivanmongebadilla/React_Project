import Chart from '../../components/charts/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetsLarge from '../../components/widgetsLg/WidgetsLarge';
import WidgetsSmall from '../../components/widgetsSm/WidgetsSmall';

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart title='User Analitycs' data={userData} dataKey='Active User' />
        <div className='homeWidgets'>
          <WidgetsSmall />
          <WidgetsLarge />
        </div>
    </div>
  )
}

export default Home;