import React from "react";

export function Fraction({ numerator, denominator }) {
  return (
    <math>
      <mfrac>
        <mrow>{numerator}</mrow>
        <mrow>{denominator}</mrow>
      </mfrac>
    </math>
  );
}

export function DistanceFormula() {
  return (
    <math>
      <mi>d</mi>
      <mo>=</mo>
      <msqrt>
        <mrow>
          <msup>
            <mrow>
              <mo>(</mo>
              <msub>
                <mi>x</mi>
                <mn>1</mn>
              </msub>
              <mo>-</mo>
              <msub>
                <mi>x</mi>
                <mn>2</mn>
              </msub>
              <mo>)</mo>
            </mrow>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mrow>
              <mo>(</mo>
              <msub>
                <mi>y</mi>
                <mn>1</mn>
              </msub>
              <mo>-</mo>
              <msub>
                <mi>y</mi>
                <mn>2</mn>
              </msub>
              <mo>)</mo>
            </mrow>
            <mn>2</mn>
          </msup>
        </mrow>
      </msqrt>
    </math>
  );
}

export function CosineLaw() {
  return (
    <math>
      <msup>
        <mi>a</mi>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <msup>
        <mi>b</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
      <mo>-</mo>
      <mn>2</mn>
      <mi>b</mi>
      <mi>c</mi>
      <mi>cos</mi>
      <mi>A</mi>
    </math>
  );
}

export function SlopeProduct() {
  return (
    <math>
      <msub>
        <mi>k</mi>
        <mn>1</mn>
      </msub>
      <mo>·</mo>
      <msub>
        <mi>k</mi>
        <mn>2</mn>
      </msub>
      <mo>=</mo>
      <mo>-</mo>
      <mn>1</mn>
    </math>
  );
}

export function VectorParallel() {
  return (
    <math>
      <mover>
        <mi>a</mi>
        <mo>→</mo>
      </mover>
      <mo>=</mo>
      <mi>λ</mi>
      <mover>
        <mi>b</mi>
        <mo>→</mo>
      </mover>
    </math>
  );
}
