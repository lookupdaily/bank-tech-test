var dateSortDesc = function(date1, date2) { 
  if (date1.date > date2.date) return -1
  if (date1.date < date2.date) return 1
  return 0
}