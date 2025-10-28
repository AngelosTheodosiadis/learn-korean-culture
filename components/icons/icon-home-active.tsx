import { colors } from "@/constants/theme";
import * as React from "react";
import Svg, { G, Path, Defs, SvgProps } from "react-native-svg";

interface TabIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const IconHomeActive = ({
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
    <G>
      <Path
        fill={color}
        d="M17.9 25.346v-8.471h5.647v8.47h7.059V14.052h4.235L20.724 1.345 6.606 14.051h4.235v11.295h7.06Z"
      />
      <Path
        stroke={color}
        strokeWidth={2}
        d="M17.9 25.346v-8.471h5.647v8.47h7.059V14.052h4.235L20.724 1.345 6.606 14.051h4.235v11.295h7.06Z"
      />
    </G>
    <Defs />
  </Svg>
);
