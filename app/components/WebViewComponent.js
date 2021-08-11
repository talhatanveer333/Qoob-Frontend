import React from 'react';
import {WebView} from 'react-native-webview';

function WebViewComponent(props) {
    return (
        <WebView 
        source={{uri: 'https://www.google.com'}}
        />
    );
}

export default WebView;