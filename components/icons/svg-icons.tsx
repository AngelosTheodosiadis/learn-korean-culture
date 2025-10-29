import * as React from "react";
import { colors } from "@/constants/theme";
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  Rect,
  Image,
  SvgProps,
} from "react-native-svg";

const CultureActivePng = require("../../assets/icons/icon-culture-active.png");
const CultureInactivePng = require("../../assets/icons/icon-culture-inactive.png");

export type TabIconType = "home" | "culture" | "card" | "account";

interface TabIconProps extends SvgProps {
  type: TabIconType;
  active?: boolean;
  size?: number;
  color?: string;
}

const IconHomeActive = ({
  color = colors.background,
  size = 42,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size * (35 / 42)} viewBox="0 0 42 35" fill="none">
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
  </Svg>
);

const IconHomeInactive = ({
  color = colors.background,
  size = 42,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size * (35 / 42)} viewBox="0 0 42 35" fill="none">
    <Path
      d="M17.9 25.345v-8.47h5.647v8.47h7.059V14.051h4.235L20.724 1.345 6.606 14.051h4.235v11.294h7.06Z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

const IconCultureActive = ({ size = 42 }: { size?: number }) => (
  <Svg width={size} height={size * (35 / 42)} viewBox="0 0 42 35" fill="none">
    <Image
      href={CultureActivePng}
      width={42}
      height={35}
      preserveAspectRatio="xMidYMid slice"
    />
  </Svg>
);

const IconCultureInactive = ({ size = 42 }: { size?: number }) => (
  <Svg width={size} height={size * (35 / 42)} viewBox="0 0 42 35" fill="none">
    <Image
      href={CultureInactivePng}
      width={42}
      height={35}
      preserveAspectRatio="xMidYMid slice"
    />
  </Svg>
);

const IconCardActive = ({
  color = colors.background,
  size = 42,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size * (35 / 42)} viewBox="0 0 62 50" fill="none">
    <G transform="translate(5, 8)">
      <G transform="scale(0.64) translate(10,5)">
        <Rect width={23.981} height={27.568} x={8} y={4} fill={color} rx={5} />
        <Rect
          width={25.981}
          height={29.568}
          x={7}
          y={3}
          stroke={color}
          strokeWidth={2}
          rx={6}
        />
        <Rect
          width={23.981}
          height={27.568}
          x={29.743}
          y={10.432}
          fill={color}
          rx={5}
        />
        <Rect
          width={25.981}
          height={29.568}
          x={28.743}
          y={9.432}
          stroke="#8C4242"
          strokeWidth={2}
          rx={6}
        />
        <Path
          fill="#6F6F6F"
          d="m23.153 20.853-3.72-8.868h-1.296l-3.696 8.868h1.812l.984-2.292h3.156l.948 2.292h1.812Zm-3.42-3.864h-1.896l.948-2.688.948 2.688Z"
        />
      </G>
    </G>
  </Svg>
);

const IconCardInactive = ({
  color = colors.background,
  size = 42,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size * (35 / 42)} viewBox="0 0 62 50" fill="none">
    <G transform="translate(5, 8)">
      <G transform="scale(0.64) translate(10,5)">
        <Rect
          width={25.981}
          height={29.568}
          x={7}
          y={3}
          stroke={color}
          strokeWidth={2}
          rx={6}
        />
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
        <Path
          fill={color}
          d="m23.153 20.853-3.72-8.868h-1.296l-3.696 8.868h1.812l.984-2.292h3.156l.948 2.292h1.812Zm-3.42-3.864h-1.896l.948-2.688.948 2.688Z"
        />
      </G>
    </G>
  </Svg>
);

const IconAccountActive = ({
  color = colors.background,
  size = 42,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 35 35" fill="none">
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

const IconAccountInactive = ({
  color = colors.background,
  size = 42,
}: {
  color?: string;
  size?: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 35 35" fill="none">
    <G clipPath="url(#a)">
      <Path
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

export const TabIcon: React.FC<TabIconProps> = ({
  type,
  active = false,
  size = 42,
  color = colors.background,
}) => {
  switch (type) {
    case "home":
      return active ? (
        <IconHomeActive size={size} color={color} />
      ) : (
        <IconHomeInactive size={size} color={color} />
      );
    case "culture":
      return active ? (
        <IconCultureActive size={size} />
      ) : (
        <IconCultureInactive size={size} />
      );
    case "card":
      return active ? (
        <IconCardActive size={size} color={color} />
      ) : (
        <IconCardInactive size={size} color={color} />
      );
    case "account":
      return active ? (
        <IconAccountActive size={size} color={color} />
      ) : (
        <IconAccountInactive size={size} color={color} />
      );
    default:
      return null;
  }
};
