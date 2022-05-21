export const reducer = (state, action) => {
    switch (action.type) {
  
      // label filter
      case "LABEL_FILTER":
        return {
          ...state,
          [action.filterType]: state[action.filterType].includes(action.filter)
            ? state[action.filterType].filter((type) => type !== action.filter)
            : [...state[action.filterType], action.filter],
        };
  
      // priority filter
      case "PRIORITY_FILTER":
        return {
          ...state,
          [action.filterType]: state[action.filterType].includes(action.filter)
            ? state[action.filterType].filter((type) => type !== action.filter)
            : [...state[action.filterType], action.filter],
        };

      case "SEARCH_BAR":
        return {
          ...state,
          searchTerm: action.payload,
        };
  
      // priority reset
      case "RESET":
        return {
          ...state,
          priority: [],
          timeSort: null,
          labels: [] 
        };
  
  
      // sort of high to low
      case "LATEST":
        return {
          ...state,
          timeSort: "Latest",
        };
  
      // sort of low to high
      case "OLD":
        return {
          ...state,
          timeSort: "Old",
        };
  
  
      default:
        throw new Error(`Error: ${action.type}`);
    }
  };