/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const ScreenWidth = Dimensions.get("window").width;
export default class MainPage extends Component<Props> {
    render() {
        return <ScrollableTabView
            style={{}}
            initialPage={1}
            renderTabBar={() => <ScrollableTabBar/>}
            tabBarUnderlineColor='#FF0000'
            tabBarBackgroundColor='#FFFFFF'
            tabBarActiveTextColor='#9B30FF'
            tabBarInactiveTextColor='#7A67EE'
            tabBarTextStyle={{fontSize: 18}}
        >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
            <Text tabLabel='Tab #4'>4444</Text>
            <Text tabLabel='Tab #5'>5555</Text>
            <Text tabLabel='Tab #6'>66666</Text>
            <Text tabLabel='Tab #7'>77777</Text>
        </ScrollableTabView>;

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 60,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
