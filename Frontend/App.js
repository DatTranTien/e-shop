import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { Provider } from 'react-redux';
import Main from './Main';
import { store } from './redux/store';

const stripe_key="pk_test_51NISl2FFavnLEAlOSVXmthohxh2JCfRrJ01rwnHSoMq87lyKwb7vGRIaVBImCl7yBUmUSyW2wNs9wP0KihHKJQY600YLNtV4rQ"
export default function App() {
  return (
    <StripeProvider
      publishableKey={stripe_key}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      // urlScheme="6-pack-ecom.com" // required for 3D Secure and bank redirects
    >
      <Provider store={store}>
        <NavigationContainer>
        <Main/>
      </NavigationContainer>
      </Provider>
    </StripeProvider>
      
  );
}
