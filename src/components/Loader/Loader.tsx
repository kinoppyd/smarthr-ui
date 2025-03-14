import React, { HTMLAttributes, ReactNode, VFC } from 'react'
import styled, { css } from 'styled-components'

import { VISUALLY_HIDDEN_STYLE } from '../../constants'
import { Theme, useTheme } from '../../hooks/useTheme'

import {
  cogDuration,
  containerRotate,
  fillUnfillRotate,
  leftSpin,
  line1FadeInOut,
  line2FadeInOut,
  line3FadeInOut,
  line4FadeInOut,
  lineDuration,
  rightSpin,
  spinnerEasing,
} from './loaderAnimation'
import { useClassNames } from './useClassNames'

type Props = {
  /** ローダーの大きさ */
  size?: 's' | 'm'
  /** 代替テキスト */
  alt?: ReactNode
  /** 表示するメッセージ */
  text?: ReactNode
  /** コンポーネントの色調 */
  type?: 'primary' | 'light'
}
type ElementProps = Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

export const Loader: VFC<Props & ElementProps> = ({
  size = 'm',
  alt = '処理中',
  text,
  type = 'primary',
  className = '',
  ...props
}) => {
  const theme = useTheme()
  const classNames = useClassNames()

  return (
    <Wrapper {...props} className={`${className} ${classNames.wrapper}`} role="status">
      <Spinner className={size}>
        {[...Array(4)].map((_, index) => (
          <Line className={`line${index + 1} ${type}`} key={index} themes={theme}>
            <Cog>
              <CogInner className="cogInner left"></CogInner>
            </Cog>
            <Ticker>
              <CogInner className="cogInner center"></CogInner>
            </Ticker>
            <Cog>
              <CogInner className="cogInner right"></CogInner>
            </Cog>
          </Line>
        ))}
        <VisuallyHidden>{alt}</VisuallyHidden>
      </Spinner>
      {text && (
        <Text className={type} themes={theme}>
          {text}
        </Text>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  overflow: hidden;
`

const VisuallyHidden = styled.span`
  ${VISUALLY_HIDDEN_STYLE}
`

const Spinner = styled.div`
  position: relative;
  animation: ${containerRotate} 1600ms linear infinite;
  margin: 0 auto;

  &.m {
    width: 48px;
    height: 48px;

    .cogInner {
      border-width: 4px;
    }
  }
  &.s {
    width: 24px;
    height: 24px;

    .cogInner {
      border-width: 2px;
    }
  }
`

const Line = styled.div<{ themes: Theme }>`
  ${({ themes }) => {
    const { color } = themes

    return css`
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;

      &.line1 {
        /* stylelint-disable */
        animation: ${fillUnfillRotate} ${lineDuration} ${spinnerEasing} infinite both,
          ${line1FadeInOut} ${lineDuration} ${spinnerEasing} infinite both;
      }
      &.line2 {
        animation: ${fillUnfillRotate} ${lineDuration} ${spinnerEasing} infinite both,
          ${line2FadeInOut} ${lineDuration} ${spinnerEasing} infinite both;
      }
      &.line3 {
        animation: ${fillUnfillRotate} ${lineDuration} ${spinnerEasing} infinite both,
          ${line3FadeInOut} ${lineDuration} ${spinnerEasing} infinite both;
      }
      &.line4 {
        animation: ${fillUnfillRotate} ${lineDuration} ${spinnerEasing} infinite both,
          ${line4FadeInOut} ${lineDuration} ${spinnerEasing} infinite both;
      }
      /* stylelint-enable */

      &.primary {
        border-color: ${color.BRAND};
      }
      &.light {
        border-color: ${color.WHITE};
      }
    `
  }}
`

const Cog = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
`

const CogInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  box-sizing: border-box;
  height: 100%;
  border-style: solid;
  border-color: inherit;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: none;

  &.left {
    border-right-color: transparent;
    transform: rotate(129deg);
    animation: ${leftSpin} ${cogDuration} ${spinnerEasing} infinite both;
  }
  &.center {
    width: 1000%;
    left: -450%;
  }
  &.right {
    left: -100%;
    border-left-color: transparent;
    transform: rotate(-129deg);
    animation: ${rightSpin} ${cogDuration} ${spinnerEasing} infinite both;
  }
`

const Ticker = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
`

const Text = styled.p<{ themes: Theme }>`
  ${({ themes }) => {
    const { fontSize, color, spacingByChar } = themes

    return css`
      margin-top: ${spacingByChar(1)};
      font-size: ${fontSize.M};
      text-align: center;

      &.primary {
        color: ${color.TEXT_BLACK};
      }
      &.light {
        color: ${color.TEXT_WHITE};
      }
    `
  }}
`
