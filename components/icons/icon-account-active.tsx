import { colors } from "@/constants/theme";
import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

interface TabIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const IconAccountActive = ({
  color = colors.background,
  size = 42,
  ...props
}: TabIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 35 35" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={color}
        stroke={color}
        strokeWidth={2}
        d="M17.5 21.416c1.822 0 4.612.466 6.921 1.391 1.154.462 2.126 1.015 2.792 1.63.66.609.953 1.21.953 1.813v1.916H6.833V26.25c0-.602.294-1.204.953-1.813.667-.615 1.638-1.168 2.792-1.63 2.31-.925 5.1-1.39 6.922-1.39Zm0-14.583a4.832 4.832 0 0 1 4.833 4.833A4.832 4.832 0 0 1 17.5 16.5a4.833 4.833 0 0 1-4.834-4.834A4.832 4.832 0 0 1 17.5 6.833Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h35v35H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
