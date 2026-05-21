import React from "react";

declare module "react" {
  interface HTMLAttributes<T> {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<T>;
    onPointerLeaveCapture?: React.PointerEventHandler<T>;
    onResize?: React.ReactEventHandler<T>;
    onResizeCapture?: React.ReactEventHandler<T>;
  }
  interface RefAttributes<T> {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<T>;
    onPointerLeaveCapture?: React.PointerEventHandler<T>;
    onResize?: React.ReactEventHandler<T>;
    onResizeCapture?: React.ReactEventHandler<T>;
  }
}
