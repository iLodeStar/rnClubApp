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
                    <Header style={{ backgroundColor: "black" }}>
						<Left>

							<Button transparent onPress={() => this.openDrawer()} >
								<Icon name='menu' />
							</Button>
						</Left>
						<Body>
							<Title>Schedule</Title>
						</Body>
						<Right >
							<Button transparent  onPress={() => { this.props.navigation.navigate('Login') }} >
								<Icon name='log-out' />
							</Button>
						</Right>
					</Header>
                    <Content>
                        <List>
                            <Card  >
                                <CardItem header style={{ backgroundColor: "#d8d8d8" }}>
                                    <Thumbnail square large source={{ uri: "https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_960_720.png" }} />
                                    <Text>{"         "}Schedule: Daily and Events</Text>
                                </CardItem>
                                </Card>
                                <Card>
                                <CardItem style={{ backgroundColor: "#ff4343" }}>
                                    <Body>
                                        <Text>
                                            Badminton Tryouts : May 24 at 11:30 (IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                </Card>
                                <Card>
                                <CardItem style={{ backgroundColor: "#5656ff" }}>
                                    <Body>
                                        <Text>
                                            Cricket Zonals : May 24 - 28, 2021 at 09:00(IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                </Card>
                                <Card>
                                <CardItem style={{ backgroundColor: "#56ff56" }}>
                                    <Body>
                                        <Text>
                                            Swimming class : May 24, 2021 at 16:30(IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                </Card>

                                <Card>
                                <CardItem style={{ backgroundColor: "#ff4343" }}>
                                    <Body>
                                        <Text>
                                            Table Tennis Club : May 26 at 10:30 (IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                </Card>
                                <Card>
                                <CardItem style={{ backgroundColor: "#5656ff" }}>
                                    <Body>
                                        <Text>
                                            Basketball trials : May 27, 2021 at 11:00(IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                </Card>
                                <Card>
                                <CardItem style={{ backgroundColor: "#56ff56" }}>
                                    <Body>
                                        <Text>
                                            Volleyball pro-tips : May 28, 2021 at 12:30(IST)
                                        </Text>
                                    </Body>
                                </CardItem>
                                </Card>
                          
                        </List>
                    </Content>
                    <Footer>
                    <FooterTab>
							<Button vertical >
								<Icon  name="newspaper"  onPress={() => { this.props.navigation.navigate('Home') }}/>
								<Text>Home</Text>
							</Button>
							<Button vertical>
								<Icon name="person"  onPress={() => { this.props.navigation.navigate('Members') }} />
								<Text>Members</Text>
							</Button>
							<Button vertical >
								<Icon name="stats-chart"  onPress={() => { this.props.navigation.navigate('Wins') }} />
								<Text>Wins</Text>
							</Button>
							<Button vertical active>
								<Icon active name="calendar"  onPress={() => { this.props.navigation.navigate('Schedule') }} />
								<Text>Schedule</Text>
							</Button>
						</FooterTab>
                    </Footer>
                </Drawer>
            </Container>
        );
    }
}

export default Schedule;