import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Card, CardItem, Badge, Thumbnail  } from 'native-base';

import Sidebar from './sidebar';
const uri = "https://images.unsplash.com/photo-1617038181672-45c664ec24dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80";
class Members extends React.Component {

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
							<Title>Members</Title>
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
                                <CardItem header style={{backgroundColor: "#ffecb1"}}>
                                    <Thumbnail  square large source={{uri: uri}} />
                                    <Text>{"         "}Manan Khanna</Text>
                                </CardItem>
                                <CardItem style={{backgroundColor: "#ffecb1"}}>
                                    <Body>
                                        <Text>
                                            Team Captain, Content creator & Pro-player
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer style={{backgroundColor: "#ffecb1"}}>
                                    <Text>Rating : {"   "} 
                                    </Text>
                                    <Badge warning style={{position: 'relative' ,paddingTop: -10}}>
                                            <Text> 5 <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 22 }} /></Text>
                                        </Badge>
                                </CardItem>
                            </Card>
                            <Card  >
                                <CardItem header style={{backgroundColor: "#ecb1ff"}}>
                                    <Thumbnail  square large source={{uri: "https://images.unsplash.com/photo-1546776230-12697ec9e7df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80"}} />
                                    <Text>{"         "}Ankit Arora</Text>
                                </CardItem>
                                <CardItem style={{backgroundColor: "#ecb1ff"}}>
                                    <Body>
                                        <Text>
                                            Sniper & Content creator 
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer style={{backgroundColor: "#ecb1ff"}}>
                                    <Text>Rating : {"   "} 
                                    </Text>
                                    <Badge warning style={{position: 'relative' ,paddingTop: -10}}>
                                            <Text> 4 <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 22 }} /></Text>
                                        </Badge>
                                </CardItem>
                            </Card>
                            <Card  >
                                <CardItem header style={{backgroundColor: "#3bcbff"}}>
                                    <Thumbnail  square large source={{uri: "https://images.unsplash.com/photo-1561629910-39ca0ecfbc19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"}} />
                                    <Text>{"         "}Shivani Verma</Text>
                                </CardItem>
                                <CardItem style={{backgroundColor: "#3bcbff"}}>
                                    <Body>
                                        <Text>
                                            Peace Control, Builder & pro-player 
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer style={{backgroundColor: "#3bcbff"}}>
                                    <Text>Rating : {"   "} 
                                    </Text>
                                    <Badge warning style={{position: 'relative' ,paddingTop: -10}}>
                                            <Text> 4.5 <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 22 }} /></Text>
                                        </Badge>
                                </CardItem>
                            </Card>
                            <Card  >
                                <CardItem header style={{backgroundColor: "#d0ff4f"}}>
                                    <Thumbnail  square large source={{uri: "https://images.unsplash.com/photo-1614270292166-d5ea354118de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}} />
                                    <Text>{"         "}Dhruv Pathak</Text>
                                </CardItem>
                                <CardItem style={{backgroundColor: "#d0ff4f"}}>
                                    <Body>
                                        <Text>
                                            Shotgun Specialist & pro-player
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer style={{backgroundColor: "#d0ff4f"}}>
                                    <Text>Rating : {"   "} 
                                    </Text>
                                    <Badge warning style={{position: 'relative' ,paddingTop: -10}}>
                                            <Text> 5 <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 22 }} /></Text>
                                        </Badge>
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
							<Button vertical active>
								<Icon active name="person"  onPress={() => { this.props.navigation.navigate('Members') }} />
								<Text>Members</Text>
							</Button>
							<Button vertical >
								<Icon name="stats-chart"  onPress={() => { this.props.navigation.navigate('Wins') }} />
								<Text>Wins</Text>
							</Button>
							<Button vertical>
								<Icon name="calendar"  onPress={() => { this.props.navigation.navigate('Schedule') }} />
								<Text>Schedule</Text>
							</Button>
						</FooterTab>
                    </Footer>
                </Drawer>
            </Container>
        );
    }
}

export default Members;