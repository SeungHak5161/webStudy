import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Icon, Label } from "semantic-ui-react";

export default function ButtonExample() {
  return (
    <>
      <div>
        <Button icon="like" color="red" />
        <Button as="div" labelPosition="left">
          <Label as="a" basic color="red" pointing="right">
            2,048
          </Label>
          <Button color="red">
            <Icon name="heart" />
            Like
          </Button>
        </Button>
        <Button as="div" labelPosition="right">
          <Button color="blue">
            <Icon name="fork" />
            Fork
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            2,048
          </Label>
        </Button>
        <br />
        <Button loading primary>
          Loading
        </Button>
        <br />
        <Button color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
        <br />
        <Button.Group size="large">
          <Button>One</Button>
          <Button.Or />
          <Button>Two</Button>
          <Button.Or text="vs" />
          <Button>Three</Button>
        </Button.Group>
      </div>
    </>
  );
}
