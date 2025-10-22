import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import ThaiDreamsStack from './ThaiDreamsWithFlowers/ThaiDreamsNavigation/ThaiDreamsStack';
import { ThaiDreamsContext } from './ThaiDreamsWithFlowers/ThaiDreamsStore/thaiDreamsContext';
import ThaiDreamsLoader from './ThaiDreamsWithFlowers/ThaiDreamsComponents/ThaiDreamsLoader';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5500);
  }, []);

  return (
    <NavigationContainer>
      <ThaiDreamsContext>
        {!isLoading ? <ThaiDreamsLoader /> : <ThaiDreamsStack />}
      </ThaiDreamsContext>
    </NavigationContainer>
  );
};

export default App;
