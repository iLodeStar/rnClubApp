import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Body, Title } from "native-base";
import { StyleSheet } from 'react-native';
const dataArray = [
    { title: "Friday Nights Bragging Right", content: "Our Favourite Bragging rights tourney is back, 10 games, one goal, place top 5 and earn a shoutout from Epic and Fortnite" },
    { title: "FNCS S16 Reboot, Heats", content: "Teams ranked 7th - 17th in each Semi-Finals Heat will battle it out together for one last chance into the Finals. Each team that earns a Victory Royale from the Reboot Round will secure their place in the Finals" },
    { title: "Trio Cash cup", content: "This event has cash prizes and is only available for Champion League players. This tournament occurs across one round, so make it count!" }
];

export default class Updates extends Component {
    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#86aecb"
            }}>
                <Text style={{ fontWeight: "600" }}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <Text
                style={{
                    backgroundColor: "#a9c6da",
                    padding: 10,
                    fontStyle: "italic",
                }}
            >
                {item.content}
            </Text>
        );
    }
    render() {
        return (
            <Container  style={{ backgroundColor: "#72a4c3" }}>
                <Header transparent >
                    <Body >
                        <Title style={styles.textContent}>Upcoming Events</Title>
                    </Body>

                </Header>
                <Content padder>
                    <Accordion
                        dataArray={dataArray}
                        animation={true}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        expanded={[0]}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textContent: {
      fontSize: 20,
      color: 'black',
    },
  });