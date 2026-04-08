import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Text as SvgText, TextPath, Defs } from 'react-native-svg';

export const CircularProgress = () => {
  const size = 180;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 65;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius; // ~452.4
  const progress = 25;
  const strokeDashoffset = circumference * (1 - progress / 100); // ~339.3

  const textRadius = 92;
  const arcPath = `M ${cx - textRadius},${cy} A ${textRadius},${textRadius} 0 0,1 ${cx + textRadius},${cy}`;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Defs>
          <Path id="arcLabel" d={arcPath} />
        </Defs>

        <Circle
          cx={cx} cy={cy} r={radius}
          fill="none"
          stroke="#c0e2c5"
          strokeWidth={strokeWidth}
        />

     
        <Circle
          cx={cx} cy={cy} r={radius}
          fill="none"
          stroke="#54b977"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${cx}, ${cy}`}
        />

       
        <SvgText fontSize="13" fontWeight="500" fill="#111827" dy="12"> 
          <TextPath href="#arcLabel" startOffset="34%" textAnchor="middle">
          75% of daily goal
          </TextPath>
        </SvgText>

        {/* 1500 */}
        <SvgText
          x={cx} y={cy + 11}
          textAnchor="middle"
          fontSize="40"
          fontWeight="500"
          fill="#111827"
        >
          1500
        </SvgText>

        {/* kcal left */}
        <SvgText
          x={cx} y={cy + 34}
          textAnchor="middle"
          fontSize="14"
          fontWeight="400"
          fill="#111827"
        >
          kcal left
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});