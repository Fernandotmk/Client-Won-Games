/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_data_attributes_section_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryRecommended_recommended_data_attributes_section_highlight_background_data_attributes | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryRecommended_recommended_data_attributes_section_highlight_background_data | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_floatimage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_floatimage_data {
  __typename: "UploadFileEntity";
  attributes: QueryRecommended_recommended_data_attributes_section_highlight_floatimage_data_attributes | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight_floatimage {
  __typename: "UploadFileEntityResponse";
  data: QueryRecommended_recommended_data_attributes_section_highlight_floatimage_data | null;
}

export interface QueryRecommended_recommended_data_attributes_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryRecommended_recommended_data_attributes_section_highlight_background;
  floatimage: QueryRecommended_recommended_data_attributes_section_highlight_floatimage | null;
  buttonLabel: string;
  buttonLink: string;
  aligment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT | null;
}

export interface QueryRecommended_recommended_data_attributes_section_games {
  __typename: "GameRelationResponseCollection";
}

export interface QueryRecommended_recommended_data_attributes_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryRecommended_recommended_data_attributes_section_highlight | null;
  games: QueryRecommended_recommended_data_attributes_section_games | null;
}

export interface QueryRecommended_recommended_data_attributes {
  __typename: "Recommended";
  section: QueryRecommended_recommended_data_attributes_section;
}

export interface QueryRecommended_recommended_data {
  __typename: "RecommendedEntity";
  attributes: QueryRecommended_recommended_data_attributes | null;
}

export interface QueryRecommended_recommended {
  __typename: "RecommendedEntityResponse";
  data: QueryRecommended_recommended_data | null;
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null;
}
