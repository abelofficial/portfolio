import { Box } from "@mantine/core";
import React, { Dispatch, SetStateAction } from "react";

export interface SwitchableIconProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;

  activeIcon: JSX.Element;
  inactiveIcon: JSX.Element;
}

const SwitchableIcon = ({
  value,
  setValue,
  activeIcon,
  inactiveIcon,
}: SwitchableIconProps) => {
  return (
    <Box onClickCapture={() => setValue(!value)}>
      {value ? activeIcon : inactiveIcon}
    </Box>
  );
};

export default SwitchableIcon;
