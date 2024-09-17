import React from 'react';
import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavigationBar({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  const isHomeScreen = route.name === 'MD Nav Demo';

  return (
    <Appbar.Header>
        {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
        ) : null}

        <Appbar.Content title={title} />      
        
        {isHomeScreen ? (
            <Appbar.Action
                icon="arrow-right"
                onPress={() => navigation.navigate('Second')}
            />
        ) : null}
    </Appbar.Header>
  );
}