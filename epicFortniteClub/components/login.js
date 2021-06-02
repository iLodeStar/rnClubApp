import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Item as FormItem, Label, Input, Form } from 'native-base';

import Sidebar from './sidebar';
import { Image, View } from 'react-native';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {
        return (
            <Container >
                <Header style={{ backgroundColor: "black" }}>
                    <Left>
                        <Title>Login</Title>
                    </Left>

                    <Right />
                </Header>
                <Content>
                    <Body>
                        <Image source={require('../assets/logo.jpeg')} style={{ marginTop: 10, width: 160, height: 160 }} resizeMode="contain" />

                    </Body>
                    <Form>
                        <FormItem floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(data) => { this.setState({ email: data }) }} />
                        </FormItem>
                        <FormItem floatingLabel >
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(data) => { this.setState({ password: data }) }} />
                        </FormItem>

                        <Button block primary style={{ paddingBottom: 4, marginTop: 60 }} onPress={() => { this.props.login(this.state.email, this.state.password) }}>
                            <Text> Login </Text>
                        </Button>
                        <View style={{ paddingBottom: 4, marginTop: 30, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Text>New User?</Text>
                            <Button onPress={() => this.props.signup()} transparent style={{ marginLeft: -10 }}>
                                <Text>Sign Up</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Copyright epic centre 2021.</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Login;