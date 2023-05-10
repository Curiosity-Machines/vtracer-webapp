/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
*/
export class BinaryImageConverter {
  free(): void;
/**
* @param {string} params
* @returns {BinaryImageConverter}
*/
  static new_with_string(params: string): BinaryImageConverter;
/**
*/
  init(): void;
/**
* @returns {boolean}
*/
  tick(): boolean;
/**
* @returns {number}
*/
  progress(): number;
}
/**
*/
export class ColorImageConverter {
  free(): void;
/**
* @param {string} params
* @returns {ColorImageConverter}
*/
  static new_with_string(params: string): ColorImageConverter;
/**
*/
  init(): void;
/**
* @returns {boolean}
*/
  tick(): boolean;
/**
* @returns {number}
*/
  progress(): number;
}
