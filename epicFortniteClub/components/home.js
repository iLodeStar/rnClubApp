import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';
import Notices from "./notices";
import Updates from "./updates";
import Sidebar from './sidebar';

class Home extends React.Component {

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
					content={<Sidebar logout={this.props.logout} navigation={this.props.navigation} />}
					onClose={() => this.closeDrawer()}
					tapToClose={true}>
					<Header style={{ backgroundColor: "black" }}>
						<Left>

							<Button transparent onPress={() => this.openDrawer()} >
								<Icon name='menu' />
							</Button>
						</Left>
						<Body>
							<Title>Home</Title>
						</Body>
						<Right >
							<Button transparent  onPress={() => { this.props.logout() }} >
								<Icon name='log-out' />
							</Button>
						</Right>
					</Header>
					<Notices />
					<Updates />
					<Footer>
						<FooterTab>
							<Button vertical active>
								<Icon active name="newspaper"  onPress={() => { this.props.navigation.navigate('Home') }}/>
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

export default Home;