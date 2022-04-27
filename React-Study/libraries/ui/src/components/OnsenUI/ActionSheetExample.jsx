import React, { useState } from "react";
import { Button, ActionSheet, ActionSheetButton } from "react-onsenui";

export default function ActionSheetExample() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <Button onClick={handleClick}>Open Action Sheet</Button>
      <ActionSheet isOpen={open}>
        <ActionSheetButton>Label 1</ActionSheetButton>
        <ActionSheetButton>Label 2</ActionSheetButton>
        <ActionSheetButton>Label 3</ActionSheetButton>
        <ActionSheetButton>Cancel</ActionSheetButton>
        <ActionSheetButton>Save</ActionSheetButton>
      </ActionSheet>
    </>
  );
}
