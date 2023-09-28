export interface FilterButton {
  type: Filter;
  label: String;
  isActive: boolean;
}

export  enum Filter {
  All,
  Active,
  Completed,
}
