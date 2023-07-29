const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

    
 function superbowlWin (record) {
    let winningYear = record.find(X => X.result === "W")
    if (winningYear) {
        return winningYear.year
    }
    else {
        return winningYear
    }
 }

//         return winningYear.year
//     }
//     else {
//         return undefined;
//     }
//  }   

console.log(superbowlWin(record));


