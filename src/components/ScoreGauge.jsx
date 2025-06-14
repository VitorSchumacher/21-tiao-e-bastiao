import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  display: block;
  overflow: visible;
`;

const ScoreText = styled.text`
  font-size: 0.75rem;
  fill: #111;
`;

const ScoreGauge = ({ score = 0 }) => {
  const clamped = Math.max(0, Math.min(score, 1000));
  const angle = (clamped / 1000) * 180;
  const largeArc = angle > 90 ? 1 : 0;
  let color = "#22c55e"; // green
  if (clamped < 400) color = "#ef4444"; // red
  else if (clamped < 650) color = "#f59e0b"; // yellow
  return (
    <Svg width="80" height="40" viewBox="0 0 80 40">
      <path
        d="M0 40 A40 40 0 0 1 80 40"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
      />
      <path
        d={`M0 40 A40 40 0 ${largeArc} 1 ${80} ${40}`}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <ScoreText x="40" y="30" textAnchor="middle">
        {clamped}
      </ScoreText>
    </Svg>
  );
};

export default ScoreGauge;
