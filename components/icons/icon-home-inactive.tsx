import { colors } from "@/constants/theme";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface TabIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const IconHomeInactive = ({
  color = colors.background,
  size = 50,
  ...props
}: TabIconProps) => (
  <Svg
    width={size}
    height={size * (35 / 42)}
    viewBox="0 0 42 35"
    fill="none"
    {...props}
  >
    <Path
      d="M17.9 25.345v-8.47h5.647v8.47h7.059V14.051h4.235L20.724 1.345 6.606 14.051h4.235v11.294h7.06Z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);
