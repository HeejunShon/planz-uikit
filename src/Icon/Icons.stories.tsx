// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon, { iconTypes } from './Icon';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'components|Icons',
  component: Icon,
  decorators: [withKnobs],
};

export const camera = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="camera" color={color} size={size} />;
};

export const cameraOff = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cameraOff" color={color} size={size} />;
};

export const cast = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cast" color={color} size={size} />;
};

export const check = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="check" color={color} size={size} />;
};

export const checkCircle = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="checkCircle" color={color} size={size} />;
};

export const checkSquare = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="checkSquare" color={color} size={size} />;
};

export const chevronDown = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronDown" color={color} size={size} />;
};

export const chevronLeft = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronLeft" color={color} size={size} />;
};

export const chevronRight = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronRight" color={color} size={size} />;
};

export const chevronUp = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronUp" color={color} size={size} />;
};

export const chevronsDown = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronsDown" color={color} size={size} />;
};

export const chevronsLeft = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronsLeft" color={color} size={size} />;
};

export const chevronsRight = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronsRight" color={color} size={size} />;
};

export const chevronsUp = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chevronsUp" color={color} size={size} />;
};

export const chrome = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="chrome" color={color} size={size} />;
};

export const circle = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="circle" color={color} size={size} />;
};

export const clipboard = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="clipboard" color={color} size={size} />;
};

export const clock = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="clock" color={color} size={size} />;
};

export const cloud = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cloud" color={color} size={size} />;
};

export const cloudDrizzle = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cloudDrizzle" color={color} size={size} />;
};

export const cloudLightning = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cloudLightning" color={color} size={size} />;
};

export const cloudOff = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cloudOff" color={color} size={size} />;
};

export const cloudRain = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cloudRain" color={color} size={size} />;
};

export const cloudSnow = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cloudSnow" color={color} size={size} />;
};

export const cornerDownLeft = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerDownLeft" color={color} size={size} />;
};

export const cornerDownRight = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerDownRight" color={color} size={size} />;
};

export const cornerLeftDown = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerLeftDown" color={color} size={size} />;
};

export const cornerLeftUp = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerLeftUp" color={color} size={size} />;
};

export const cornerRightDown = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerRightDown" color={color} size={size} />;
};

export const cornerRightUp = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerRightUp" color={color} size={size} />;
};

export const cornerUpLeft = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerUpLeft" color={color} size={size} />;
};

export const cornerUpRight = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="cornerUpRight" color={color} size={size} />;
};

export const facebook = () => {
  const color = text('color', undefined);
  const size = text('size', undefined);

  return <Icon icon="facebook" color={color} size={size} />;
};

export const listOfIcons = () => (
  <ul css={iconListStyle}>
    {iconTypes.map(icon => (
      <li key={icon}>
        <Icon icon={icon} />
        {icon}
      </li>
    ))}
  </ul>
);

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
