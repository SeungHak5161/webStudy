import React from "react";
import { useState } from "react";
import { Button, Image, Header, Modal } from "semantic-ui-react";

export default function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color="red">Show Modal</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            as="p"
            alt="An example alt"
            size="small"
            src="https://react.semantic-ui.com/images/wireframe/image-text.png"
            srcSet="/images/wireframe/image.png 2x"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}
