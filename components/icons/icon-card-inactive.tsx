import { colors } from "@/constants/theme";
import * as React from "react";
import Svg, { G, Rect, Path, Defs, SvgProps } from "react-native-svg";

interface TabIconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const IconCardInactive = ({
  color = colors.background,
  size = 65,
  ...props
}: TabIconProps) => (
  <Svg
    width={size}
    height={size * (50 / 62)}
    viewBox="0 0 62 50"
    fill="none"
    {...props}
  >
    <G transform="translate(0, 3.5)">
      <G>
        <Rect
          width={25.981}
          height={29.568}
          x={7}
          y={3}
          stroke={color}
          strokeWidth={2}
          rx={6}
        />
      </G>
      <G>
        <Rect
          width={23.981}
          height={27.568}
          x={29.743}
          y={10.432}
          fill="#8C4242"
          rx={5}
        />
        <Rect
          width={25.981}
          height={29.568}
          x={28.743}
          y={9.432}
          stroke={color}
          strokeWidth={2}
          rx={6}
        />
      </G>
      <G>
        <Path
          fill={color}
          d="m23.153 20.853-3.72-8.868h-1.296l-3.696 8.868h1.812l.984-2.292h3.156l.948 2.292h1.812Zm-3.42-3.864h-1.896l.948-2.688.948 2.688Z"
        />
      </G>
    </G>
    <Defs />
  </Svg>
);
