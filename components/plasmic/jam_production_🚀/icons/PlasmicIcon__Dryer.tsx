/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DryerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DryerIcon(props: DryerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.072 2.28c-.53.068-1.05.381-1.396.841-.236.313-.35.604-.4 1.019-.024.199-.034 3.25-.027 8.1l.011 7.78.093.26c.227.638.729 1.14 1.367 1.367l.26.093 6.9.011c4.535.008 7.016-.002 7.238-.029a2.17 2.17 0 001.762-1.472c.078-.252.079-.402.081-8.245.001-7.896 0-7.992-.079-8.25-.233-.754-.958-1.375-1.722-1.474-.351-.045-13.735-.047-14.088-.001zm14.091 1.571c.074.05.176.152.226.226.089.132.091.157.091 1.229V6.4l-7.27.001c-3.999 0-7.311.011-7.362.025l-.092.024.012-1.155c.012-1.119.015-1.159.101-1.279.195-.274-.386-.254 7.255-.255l6.904-.001.135.091zm.317 9.983v5.954l-.091.135a1.01 1.01 0 01-.226.226l-.135.091H12.13c-7.638 0-7.065.02-7.261-.255l-.089-.125-.01-5.99-.011-5.99H19.48v5.954zm-7.8-4.567c-1.184.094-2.23.572-3.037 1.387-.37.357-.67.78-.884 1.246-1.253 2.54-.05 5.555 2.617 6.557.964.363 2.284.363 3.248 0a4.798 4.798 0 002.836-2.841c.359-.955.358-2.28-.003-3.24-.595-1.583-1.969-2.747-3.577-3.03a5.872 5.872 0 00-1.2-.079zm1.3 1.627c.528.174.874.392 1.304.822.428.427.644.769.824 1.304.101.296.109.369.109.98s-.008.684-.109.98c-.18.535-.396.877-.824 1.304-.427.428-.769.644-1.304.824-.296.101-.369.109-.98.109s-.684-.008-.98-.109c-.535-.18-.877-.396-1.304-.824-.43-.43-.648-.776-.821-1.304-.152-.463-.178-1.216-.061-1.708a3.077 3.077 0 01.911-1.594c.471-.45.893-.688 1.487-.839.462-.117 1.304-.09 1.748.055z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DryerIcon;
/* prettier-ignore-end */
