/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DiscoveryScreen from './src/screens/DiscoveryScreen/DiscoveryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailTopicScreen from './src/screens/DetailTopicScreen/DetailTopicScreen';
import DetailTopicOtherScreen from './src/screens/DetailTopicOther/DetailTopicOtherScreen';
import MorePostTrendScreen from './src/screens/MorePostTrendScreen/MorePostTrendScreen';
import TopExpertScreen from './src/screens/TopExpertScreen/TopExpertScreen';
import DetailCategoryPostScreen from './src/screens/DetailCategoryPostScreen/DetailCategoryPostScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import ResultSearchScreen from './src/screens/ResultSearchScreen/ResultSearchScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export type RootStackParamsList = {
  Discovery: undefined;
  DetailTopic: undefined | {title: string};
  DetailTopicOther: undefined | {title: string};
  MorePostTrend: undefined | {title: string};
  TopExpert: undefined | {title: string};
  DetailCategoryPost: undefined | {title: string};
  Search: undefined | {title: string};
  ResultSearch: undefined | {search: string};
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Discovery" component={DiscoveryScreen} />
        <Stack.Screen name="DetailTopic" component={DetailTopicScreen} />
        <Stack.Screen
          name="DetailTopicOther"
          component={DetailTopicOtherScreen}
        />
        <Stack.Screen name="MorePostTrend" component={MorePostTrendScreen} />
        <Stack.Screen name="TopExpert" component={TopExpertScreen} />
        <Stack.Screen
          name="DetailCategoryPost"
          component={DetailCategoryPostScreen}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultSearch" component={ResultSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
