import React from 'react';
import StackNavigator from '../stacks/StackNavigator';
import FavoriteProvider from '../content/FavoriteProvider';

export default function App() {
  return (
    <FavoriteProvider>
      <StackNavigator />
    </FavoriteProvider>
  );
}
