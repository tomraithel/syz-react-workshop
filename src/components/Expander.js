import React from "react";
import Button from "./Button";
import Box from "./Box";

export default function Expander({ toggled, onToggle, children }) {
  return (
    <div>
      <Button onClick={onToggle}>{toggled ? "Zuklappen" : "Aufklappen"}</Button>

      {toggled && <Box>{children}</Box>}
    </div>
  );
}
