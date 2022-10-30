import React from 'react' ;
import {
    Container,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text
} from 'native-base';

import {
    Avatar
} from 'react-native-elements' ;

const Clist = () => {
    return (
      <Container>
          <Content>
              <List>
                  <ListItem avatar style={{ marginTop:10}} button={true} selected>
                      <Left>  
                          <Avatar
                          rounded
                          size="medium"
                          title="Y"></Avatar>
                      </Left>
                      <Body>
                          <Text>Yash Gaidhani</Text>
                          <Text note> Hello !!!</Text>
                      </Body>
                      <Right>
                          <Text note>7:00 pm</Text>
                      </Right>
                  </ListItem>
                  <ListItem avatar style={{ marginTop:10}} button={true} >
                      <Left>
                      <Avatar
                          rounded
                          size="medium"
                          title="A"></Avatar>
                      </Left>
                      <Body>
                          <Text>Mr. A</Text>
                          <Text note>Hi . How are you</Text>
                      </Body>
                      <Right>
                          <Text note>9:00 pm</Text>
                      </Right>
                  </ListItem>
                  <ListItem avatar style={{ marginTop:10}} button={true} >
                      <Left>
                      <Avatar
                          rounded
                          size="medium"
                          title="N"></Avatar>
                      </Left>
                      <Body>
                          <Text>Nam</Text>
                          <Text note> Yo esustaus tu</Text>
                      </Body>
                      <Right>
                          <Text note>11:00 pm</Text>
                      </Right>
                  </ListItem>
              </List>
          </Content>
      </Container>  
    ) 
}

export default Clist ;