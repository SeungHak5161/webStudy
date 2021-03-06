import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Image, List } from "semantic-ui-react";

export default function ListExample() {
  return (
    <>
      <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lena.png"
          />
          <List.Content>Lena</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content>Lindsay</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/mark.png"
          />
          <List.Content>Mark</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image src="https://react.semantic-ui.com/images/avatar/small/molly.png" />
          <List.Content>Molly without Avatar</List.Content>
        </List.Item>
      </List>
    </>
  );
}
