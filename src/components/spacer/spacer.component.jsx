import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant = {
    top: "marginTop",
    right: "marginRight",
    bottom: "marginBottom",
    left: "marginLeft",
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];
    return `${property}: ${value}`;
};

// TO FIX OLD RENDER ISSUE ON ANDROID
const SpacerView = styled.View`
    ${({ variant }) => variant};
    justify-content: center;
`;

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>;
};
// END - TO FIX OLD RENDER ISSUE ON ANDROID

// THIS IS WORKING CURRENTLY BUT COMMENTED TO FOLLOW THE COURSE
// export const Spacer = styled.View`
//     ${({ position, size, theme }) => getVariant(position, size, theme)};
//     justify-content: center;
// `;

Spacer.defaultProps = {
    position: "top",
    size: "small",
};
