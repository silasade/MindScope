import { Popover, PopoverProps } from "antd";
import React from "react";

type ReuseablePopoverProps = PopoverProps & {
  children: React.ReactNode;
};

function ReuseablePopover({ children, ...popoverProps }: ReuseablePopoverProps) {
  return (
    <Popover {...popoverProps}>
      {children}
    </Popover>
  );
}

export default ReuseablePopover;
