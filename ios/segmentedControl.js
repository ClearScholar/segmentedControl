import React, { Component } from 'react';
import {SegmentedControlIOS} from 'react-native';

export default SegmentedControl = p =>
    <View style={p.style}>  
        <SegmentedControlIOS {...p} />
    </View>