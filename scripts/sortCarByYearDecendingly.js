function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  
  const result = [...cars];
   // Tulis code-mu disini
   let i, r, temp;
   for (i = 0; i < result.length; i++) {
    temp = result[i];
    for (r = i - 1; r >= 0 && result[r].year < temp.year; r--) {
        result[r + 1] = result[r];
    }
    result[r + 1] = temp;
}
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
