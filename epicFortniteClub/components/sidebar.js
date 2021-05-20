import React, { Component } from 'react';
import {
    Content,
    List,
    ListItem,
    Text,
    Icon,
    Left,
    Body,
    Right,
    Thumbnail
} from 'native-base';




export default class Sidebar extends Component {
    render() {
        return (
            <Content style={{ backgroundColor: '#d2d2d2' }}>

                <List>
                    <ListItem icon onPress={() => { this.props.navigation.navigate('Home') }}>
                        <Left>
                            <Icon name="newspaper" />
                        </Left>
                        <Body>
                            <Text>News</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon onPress={() => { this.props.navigation.navigate('Members') }}>
                        <Left>
                            <Icon name="person" />
                        </Left>
                        <Body>
                            <Text>Members</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon onPress={() => { this.props.navigation.navigate('Wins') }}>
                        <Left>
                            <Icon name="stats-chart" />
                        </Left>
                        <Body >
                            <Text>Wins</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon onPress={() => { this.props.navigation.navigate('Schedule') }}>
                        <Left>
                            <Icon name="calendar" />
                        </Left>
                        <Body>
                            <Text>Schedule</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Left>
                            <Icon name="log-out" />
                        </Left>
                        <Body >
                            <Text>Sign Out</Text>
                        </Body>
                    </ListItem>
                </List>


            </Content>
        );
    }
}