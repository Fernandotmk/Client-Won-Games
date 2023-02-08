/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighlightFragment
// ====================================================

export interface HighlightFragment_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment_background_data {
  __typename: "UploadFileEntity";
  attributes: HighlightFragment_background_data_attributes | null;
}

export interface HighlightFragment_background {
  __typename: "UploadFileEntityResponse";
  data: HighlightFragment_background_data | null;
}

export interface HighlightFragment_floatimage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment_floatimage_data {
  __typename: "UploadFileEntity";
  attributes: HighlightFragment_floatimage_data_attributes | null;
}

export interface HighlightFragment_floatimage {
  __typename: "UploadFileEntityResponse";
  data: HighlightFragment_floatimage_data | null;
}

export interface HighlightFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighlightFragment_background;
  floatimage: HighlightFragment_floatimage | null;
  buttonLabel: string;
  buttonLink: string;
  aligment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT | null;
}
