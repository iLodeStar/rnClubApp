import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, List, ListItem, Card, CardItem, Badge, Thumbnail  } from 'native-base';

import Sidebar from './sidebar';

class Wins extends React.Component {

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
							<Title>Wins</Title>
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
                                <CardItem header style={{backgroundColor: "#5656ff"}}>
                                    <Thumbnail  square large source={{uri: "https://cdn.pixabay.com/photo/2018/07/15/11/27/online-3539412_1280.png"}} />
                                    <Text>{"         "}Tournaments Played : 38</Text>
                                </CardItem>
                            </Card>
                            <Card  >
                                <CardItem header style={{backgroundColor: "#56ff56"}}>
                                    <Thumbnail  square large source={{uri: "https://cdn.pixabay.com/photo/2015/10/28/16/47/cup-1010918_960_720.jpg"}} />
                                    <Text>{"         "}Tournaments Won : 23</Text>
                                </CardItem>
                            </Card>
                            <Card  >
                                <CardItem header style={{backgroundColor: "#ff4343"}}>
                                    <Thumbnail  square large source={{uri: "https://cdn.pixabay.com/photo/2016/10/04/13/52/fail-1714367_960_720.jpg"}} />
                                    <Text>{"         "}Tournaments Lost : 15</Text>
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
							<Button vertical active>
								<Icon active name="stats-chart"  onPress={() => { this.props.navigation.navigate('Wins') }} />
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

export default Wins;