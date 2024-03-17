// Import Screens
import HomeScreen from "./components/Home";
import AddNewContactScreen from "./components/AddNewContacts";
import ViewContactScreen from "./components/ViewContacts";
import EditContactScreen from "./components/EditContacts";

//Import React Navigation
import { createAppContainer, createStackNavigator } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContactScreen },
    Edit: { screen: EditContactScreen },
    View: { screen: ViewContactScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#ba2f16"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;