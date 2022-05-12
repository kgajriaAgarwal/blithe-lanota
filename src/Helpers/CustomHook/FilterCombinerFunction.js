
import { useNotes, useReducerContext } from "../Context";
import {
  labelFilter,
  priorityfiltering,
  searchBarHandler,
  getSortedDates,
} from "../Reducer/filterFunctions";

export const useFunctionCombiner = () => {
  const { labels, priority, searchTerm, timeSort } = useReducerContext();
  const { notes } = useNotes();



  const filteredPriorites = priorityfiltering(notes, priority);

  const sortedLables = labelFilter(
        (notes.length && filteredPriorites.length) ?   filteredPriorites :
        notes.length? notes : []
    , labels);

  const sortedDates = getSortedDates(filteredPriorites, timeSort);

  const searchBarHandle = searchBarHandler(sortedDates, searchTerm);

  return { sortedLables, searchBarHandle };
};
