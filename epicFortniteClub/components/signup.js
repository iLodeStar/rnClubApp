import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Item as FormItem, Label, Input, Form } from 'native-base';

import Sidebar from './sidebar';

class SignUp extends React.Component {

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
                            <Title>Sign Up</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Form>
                            <FormItem floatingLabel>
                                <Label>Email</Label>
                                <Input />
                            </FormItem>
                            <FormItem floatingLabel >
                                <Label>Password</Label>
                                <Input secureTextEntry={true} />
                            </FormItem>
                            <FormItem floatingLabel >
                                <Label>Confirm Password</Label>
                                <Input secureTextEntry={true} />
                            </FormItem>
                            <Button full primary style={{ paddingBottom: 4, marginTop: 60 }}>
                                <Text> Sign Up </Text>
                            </Button>
                        </Form>
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

export default SignUp;