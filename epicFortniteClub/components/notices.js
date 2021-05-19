import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Body, Title } from "native-base";
import { StyleSheet } from 'react-native';
const dataArray = [
    { title: "Fortnite x NBA 'The Crossover' event: Customizable skins, Win V-Bucks & more", content: "Following recent soccer and NFL collaborations, Epic Games is finally teaming up with the NBA to bring that basketball fever to Fortnite. The 2021 NBA playoffs tip off this Saturday, and you can expect plenty of in-game celebrations." },
    { title: "How to unlock a new Umbrella in Fortnite’s Impossible Escape LTM", content: "Get to the Choppa! And then fix it, if you want to escape. Following a Zombie-filled weekend, Fortnite’s latest Limited Time Mode is almost like playing a whole new game. The Impossible Escape LTM sees 16 survivors wake up stranded on the Island, with a perilous journey ahead." },
    { title: "Australian FNCS Champions moving to North America for Season 7", content: "Team New Age, a rapidly growing North American esports and entertainment organization, today announced the signing of FNCS winning OCE Trio, “SpeedyND”, “Looter” and “Muz”. The Aussie stars join a primarily NA-based roster which previously boasted the likes of “Reverse2k”, “Deyy” and “Mero”." }
];

export default class Notices extends Component {
    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#A9DAD6"
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
                    backgroundColor: "#e3f1f1",
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
            <Container  style={{ backgroundColor: "#74c3bd" }}>
                <Header transparent >
                    <Body >
                        <Title style={styles.textContent}>Notices</Title>
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