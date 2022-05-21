const labelFilter = (notes, labels) => {
    let filteredLables =
      labels.length !== 0
        ? notes.filter((l) => labels.includes(l.typeOfNote))
        : notes;
    return filteredLables;
  };
  
  const priorityfiltering = (notes, priority) => {
      let filteredPriorities = [];
      for(let i= 0;i< priority.length;i++){
          const result = notes.filter(note=> note.priority === priority[i])
          filteredPriorities.push(...result)
      }
      return filteredPriorities;
    };
  
  const getSortedDates = (notes, timeSort) => {
    const dateToTime = (date) => {
      const dt = new Date(date);
      return dt.getTime();
    };
  
    if (timeSort === "Latest") {
      const noteDate = [...notes].sort(
        (itemOne, itemTwo) =>
          dateToTime(itemTwo.createdAtDate) - dateToTime(itemOne.createdAtDate)
      );
      return noteDate;
    } else if (timeSort === "Old") {
      const noteDate = [...notes].sort(
        (itemOne, itemTwo) =>
          dateToTime(itemOne.createdAtDate) - dateToTime(itemTwo.createdAtDate)
      );
      return noteDate;
    } else {
      return notes;
    }
  };
  
  const searchBarHandler = (notes, searchTerm) => {
    return notes.filter((value) => {
      if (searchTerm === "") {
        return value;
      } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
    });
  };
  
  export { labelFilter, priorityfiltering, searchBarHandler, getSortedDates };