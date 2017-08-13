import { StackNavigator } from 'react-navigation';

import HomePage from './pages/home';
import MapPage from './pages/map';
import ShopPage from './pages/shop';
import ItemsPage from './pages/items';

const stackNavigatorConfig = {
  initialRouteName: 'HomePage',
};

export default StackNavigator({
  HomePage: {
    screen: HomePage,
  },
  MapPage: {
    screen: MapPage,
  },
  ShopPage: {
    screen: ShopPage,
  },
  ItemsPage: {
    screen: ItemsPage,
  }
}, stackNavigatorConfig);
