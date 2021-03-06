import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps204983Navigator from '../features/Maps204983/navigator';
import Additem204982Navigator from '../features/Additem204982/navigator';
import Maps204978Navigator from '../features/Maps204978/navigator';
import UserProfile204974Navigator from '../features/UserProfile204974/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps204983: { screen: Maps204983Navigator },
Additem204982: { screen: Additem204982Navigator },
Maps204978: { screen: Maps204978Navigator },
UserProfile204974: { screen: UserProfile204974Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
