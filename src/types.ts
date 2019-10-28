export type GoogleSheetsRowType = {
  gsx$name: {
    $t: string;
  };
  gsx$type: {
    $t: string;
  };
  gsx$link: {
    $t: string;
  };
};

export type GoogleSheetsEntryType = Array<GoogleSheetsRowType>;

type RecipeType = {
  id: number;
  name: string;
  type: string;
  link: string;
};

export type RecipesType = Array<RecipeType>;

export interface RecipeProps {
  name: string;
  type: string;
  link: string;
}

type RecipeTypeType = {
  value: string;
  active: boolean;
  disabled: boolean;
};

export type RecipeTypeOptionsType = Array<RecipeTypeType>;

export interface SearchFilterProps {
  recipeType: string | null;
  recipeTypeOptions: RecipeTypeOptionsType;
  handleRecipeTypeChange: Function;
  handleClear: Function;
}

export type FiltersType = {
  recipeType: string | null;
};
