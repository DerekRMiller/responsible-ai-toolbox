// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function isTwoDimArray(val: number[] | number[][]): val is number[][] {
  return val.some((v: number | number[]) => Array.isArray(v));
}