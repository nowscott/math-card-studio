import React, { useMemo } from "react";
import katex from "katex";

export function Formula({ tex, display = false, className = "" }) {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        displayMode: display,
        output: "htmlAndMathml",
        strict: "ignore",
        throwOnError: false,
        trust: false,
      }),
    [display, tex],
  );

  return (
    <span
      className={`formula ${display ? "formula-display" : "formula-inline"} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
