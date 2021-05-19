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
							<Title>Epic News</Title>
						</Body>
						<Right />
					</Header>
					<Notices />
					<Updates />
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

export default Home;