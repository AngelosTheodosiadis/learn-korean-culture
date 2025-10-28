import * as React from "react";
import Svg, { Image, SvgProps } from "react-native-svg";

interface TabIconProps extends SvgProps {
  size?: number;
}

export const IconCultureActive = ({ size = 50, ...props }: TabIconProps) => (
  <Svg
    width={size}
    height={size * (35 / 42)}
    viewBox="0 0 42 35"
    fill="none"
    {...props}
  >
    <Image
      href={require("@/assets/icons/icon-culture-active.png")}
      width={42}
      height={35}
      preserveAspectRatio="xMidYMid slice"
    />
  </Svg>
);
