function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  
  const result = [...cars];
  // Tulis code-mu disini
  result.sort((a, b) => {
    // Jika tahunnya berbeda, langsung urutkan berdasarkan tahun
    if (a.year !== b.year) {
      return b.year - a.year;
    } else {
      // Jika tahunnya sama, urutkan berdasarkan ID
      return a.id - b.id;
    }
  });
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
