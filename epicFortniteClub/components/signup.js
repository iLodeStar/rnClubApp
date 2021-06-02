import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Item as FormItem, Label, Input, Form } from 'native-base';

import Sidebar from './sidebar';
import { Image, View } from 'react-native';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            cnfrmPass: ""
        };
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    register = () => {
        if(this.state.password === this.state.cnfrmPass){
            this.props.registerUser(this.state.email,this.state.password);
        }else{
            alert('Password and Confirm Password do not match')
        }
    }

    render() {
        return (
            <Container>
                    <Header style={{ backgroundColor: "black" }}>
                        <Body>
                        <Title >Create Account</Title>
                        </Body>
                    </Header>
                    <Content>
                    <Body>
                        <Image source={require('../assets/logo.jpeg')} style={{ marginTop: 10, width: 160, height: 160 }} resizeMode="contain" />

                    </Body>
                        <Form>
                            <FormItem floatingLabel>
                                <Label>Email</Label>
                                <Input onChangeText={(data) => {this.setState({ email: data })}}/>
                            </FormItem>
                            <FormItem floatingLabel >
                                <Label>Password</Label>
                                <Input secureTextEntry={true} onChangeText={(data) => {this.setState({ password: data })}} />
                            </FormItem>
                            <FormItem floatingLabel >
                                <Label>Confirm Password</Label>
                                <Input secureTextEntry={true} onChangeText={(data) => {this.setState({ cnfrmPass: data })}}/>
                            </FormItem>
                            <Button block primary style={{ paddingBottom: 4, marginTop: 60 }} onPress={() => this.register() }>
                            <Text> Sign Up </Text>
                        </Button>
                            <View style={{ paddingBottom: 4, marginTop: 30, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems:"center" }}>
                            <Text>Already Registered?</Text>
                            <Button onPress={() => { this.props.signin() }} transparent style={{marginLeft:-10}}>
                                <Text>Login</Text>
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

export default SignUp;