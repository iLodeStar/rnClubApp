import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Card, CardItem, Badge, Thumbnail } from 'native-base';

import Sidebar from './sidebar';

class Schedule extends React.Component {

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <Container style={{ paddingTop: 20 }}>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<Sidebar navigation={this.props.navigation} />}
                    onClose={() => this.closeDrawer()}
                    tapToClose={true}>
                    <Header>
                        <Left>

                            <Button transparent onPress={() => this.openDrawer()} >
                                <Icon name='menu' />
                            </Button>

                        </Left>
                        <Body>
                            <Title>Schedule</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <List>
                            <Card  >
                                <CardItem header style={{ backgroundColor: "#d8d8d8" }}>
                                    <Thumbnail square large source={{ uri: "https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_960_720.png" }} />
                                    <Text>{"         "}Schedule: Daily and Events</Text>
                                </CardItem>
                                <CardItem style={{ backgroundColor: "#d8d8d8" }}>
                                    <Body>
                                        <Text>
                                            Squad Scrims : Mon-Sat, 11:30 - 14:30 (IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem style={{ backgroundColor: "#d8d8d8" }}>
                                    <Body>
                                        <Text>
                                            FNCS Heats : Sat, May 22, 2021 at 13:30(IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem style={{ backgroundColor: "#d8d8d8" }}>
                                    <Body>
                                        <Text>
                                            FNCS Qualifier : Sun, May 23, 2021 at 16:30(IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer style={{ backgroundColor: "#d8d8d8" }}>
                                    <Text>Watch us Dominate everyday on our Twitch Stream : epicCentreStreams
                                    </Text>

                                </CardItem>
                                <CardItem footer style={{ backgroundColor: "#d8d8d8" }}>
                                    <Text>Highlights and other contetnt on our Youtube channel Stream : epicCentre
                                    </Text>
                                </CardItem>
                            </Card>
                        </List>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Copyright epic centre 2021.</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Drawer>
            </Container>
        );
    }
}

export default Schedule;