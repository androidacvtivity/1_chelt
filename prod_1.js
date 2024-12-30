function countFilledCells(values) {
    let filledCells = 0;

    // Columns and rows for CAP1 and CAP2
    let cap1Rows = [100, 101, 102, 103, 104, 105, 106, 107, 108];
    let cap2Rows = [200, 201, 202, 203, 300, 301, 302, 303];
    let columns = ["C1", "C2", "C3", "C4"];

    // Count filled cells in CAP1
    cap1Rows.forEach(row => {
        columns.forEach(col => {
            if (values[`CAP1_R${row}_${col}`] && values[`CAP1_R${row}_${col}`].toString().trim() !== "") {
                filledCells++;
            }
        });
    });

    // Count filled cells in CAP2
    cap2Rows.forEach(row => {
        columns.forEach(col => {
            if (values[`CAP2_R${row}_${col}`] && values[`CAP2_R${row}_${col}`].toString().trim() !== "") {
                filledCells++;
            }
        });
    });

    // Count filled cells for filial data
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0;

    for (let i = 0; i < numFilials; i++) {
        // CAP1 filial rows
        cap1Rows.forEach(row => {
            columns.forEach(col => {
                if (
                    values[`CAP1_R${row}_${col}_FILIAL`] &&
                    values[`CAP1_R${row}_${col}_FILIAL`][i] &&
                    values[`CAP1_R${row}_${col}_FILIAL`][i].toString().trim() !== ""
                ) {
                    filledCells++;
                }
            });
        });

        // CAP2 filial rows
        cap2Rows.forEach(row => {
            columns.forEach(col => {
                if (
                    values[`CAP2_R${row}_${col}_FILIAL`] &&
                    values[`CAP2_R${row}_${col}_FILIAL`][i] &&
                    values[`CAP2_R${row}_${col}_FILIAL`][i].toString().trim() !== ""
                ) {
                    filledCells++;
                }
            });
        });
    }

    return filledCells;
}

// Example usage:
let filled_cells = countFilledCells(Drupal.settings.mywebform.values);
console.log("Total filled cells:", filled_cells);
