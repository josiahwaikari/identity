import React from "react";
import styled from "styled-components/native";

interface ProgressBarProps {
  progress: number;
  colour?: string;
}

export default function ProgressBar(props: ProgressBarProps) {
  const colour = props.colour || "#1657FF";
  return (
    <ProgressBarContainer>
      <ProgressBarFiller progress={props.progress} colour={colour} />
    </ProgressBarContainer>
  );
}

const ProgressBarFiller = styled.View<{ progress: number; colour: string }>`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: ${(props) => props.colour};
`;

const ProgressBarContainer = styled.View`
  height: 20px;
  width: 100%;
`;
