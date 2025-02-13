(function ($) {
   

    Drupal.behaviors.chelt1 = {
        attach: function (context, settings) {
            jQuery("input.numeric").on("keypress", function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery("input.float").on("keypress", function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
        },
    };


})(jQuery);

webform.validators.chelt1 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;


    // Example usage:
    let filled_cells = countFilledCells(Drupal.settings.mywebform.values);
    
    document.getElementById("filled_cells").value = filled_cells;

    var fieldError = validateFieldNoHieroglyphs('Entitatea', values.ENT_NAME);
    if (fieldError) {
        webform.warnings.push({
            'fieldName': fieldError.fieldName,
            'index': 0,
            'weight': 10,
            'msg': fieldError.message
        });
    }
    
    validatePhoneNumber(values.PHONE);
    validate_CUATM_FILIAL(values);
    validateSumRows(values);
    validateCol1EqualsCol2PlusCol3(values);
    validate60_003(values);
    validateRow108Col1EqualsCol2(values);
    validateCap2Row200Sum(values);
    validateCap2Row300Sum(values)

    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.validatorsStatus["chelt1"] = 1;
    validateWebform();

};
//----------------------------------------------------------------------


function validateCap2Row300Sum(values) {
    // Define columns and rows for validation
    let columns = ["C1", "C2", "C3", "C4"]; // Adapt column list if necessary
    let rowsToSum = [301, 302, 303]; // Rows to sum for validation

    // Validation for general data (without filials)
    columns.forEach(col => {
        let r300 = Number(values[`CAP2_R300_${col}`] || 0); // Default to 0 if undefined

        let sum = rowsToSum.reduce((acc, row) => {
            let value = Number(values[`CAP2_R${row}_${col}`] || 0); // Default to 0 if undefined
            return acc + value;
        }, 0);

        if (r300 !== sum) {
            webform.errors.push({
                fieldName: `CAP2_R300_${col}`,
                weight: 1,
                msg: `Cod eroare: 60-006 (Col.${col}) - (Rînd.300) = SUM(Rînd.301 - Rînd.303) - [${r300} ≠ ${sum}]`,
            });
        }
    });

    // Validation for filial data
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0; // Number of filials

    for (let i = 0; i < numFilials; i++) {
        columns.forEach(col => {
            let r300Filial = Number(
                (values[`CAP2_R300_${col}_FILIAL`] && values[`CAP2_R300_${col}_FILIAL`][i]) || 0
            ); // Default to 0 if undefined

            let sumFilial = rowsToSum.reduce((acc, row) => {
                let value = Number(
                    (values[`CAP2_R${row}_${col}_FILIAL`] && values[`CAP2_R${row}_${col}_FILIAL`][i]) || 0
                ); // Default to 0 if undefined
                return acc + value;
            }, 0);

            if (r300Filial !== sumFilial) {
                webform.errors.push({
                    fieldName: `CAP2_R300_${col}_FILIAL`,
                    index: i,
                    weight: 2,
                    msg: `Cod eroare: 60-006 (Col.${col}, Filiala ${i + 1}) - (Rînd.300) = SUM(Rînd.301 - Rînd.303) - [${r300Filial} ≠ ${sumFilial}]`,
                });
            }
        });
    }
}


//---------------------------------------------------------------------
function validateCap2Row200Sum(values) {
    // Define columns and rows for validation
    let columns = ["C1", "C2", "C3", "C4"]; // Adapt column list if necessary
    let rowsToSum = [201, 202, 203]; // Rows to sum for validation

    // Validation for general data (without filials)
    columns.forEach(col => {
        let r200 = Number(values[`CAP2_R200_${col}`] || 0); // Default to 0 if undefined

        let sum = rowsToSum.reduce((acc, row) => {
            let value = Number(values[`CAP2_R${row}_${col}`] || 0); // Default to 0 if undefined
            return acc + value;
        }, 0);

        if (r200 !== sum) {
            webform.errors.push({
                fieldName: `CAP2_R200_${col}`,
                weight: 1,
                msg: `Cod eroare: 60-005 (Col.${col}) - (Rînd.200) = SUM(Rînd.201 - Rînd.203) - [${r200} ≠ ${sum}]`,
            });
        }
    });

    // Validation for filial data
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0; // Number of filials

    for (let i = 0; i < numFilials; i++) {
        columns.forEach(col => {
            // Safely access filial values, default to 0 if undefined
            let r200Filial = Number(
                (values[`CAP2_R200_${col}_FILIAL`] && values[`CAP2_R200_${col}_FILIAL`][i]) || 0
            );

            let sumFilial = rowsToSum.reduce((acc, row) => {
                let value = Number(
                    (values[`CAP2_R${row}_${col}_FILIAL`] && values[`CAP2_R${row}_${col}_FILIAL`][i]) || 0
                );
                return acc + value;
            }, 0);

            if (r200Filial !== sumFilial) {
                webform.errors.push({
                    fieldName: `CAP2_R200_${col}_FILIAL`,
                    index: i,
                    weight: 2,
                    msg: `Cod eroare: 60-005 (Col.${col}, Filiala ${i + 1}) - (Rînd.200) = SUM(Rînd.201 - Rînd.203) - [${r200Filial} ≠ ${sumFilial}]`,
                });
            }
        });
    }
}


//---------------------------------------------------------
function validateRow108Col1EqualsCol2(values) {
    // Validare pentru datele generale (fără filiale)
    let col1 = Number(values[`CAP1_R108_C1`]);
    let col2 = Number(values[`CAP1_R108_C2`]);

    // Validăm dacă valorile sunt numere, în caz contrar le considerăm 0
    col1 = isNaN(col1) ? 0 : col1;
    col2 = isNaN(col2) ? 0 : col2;

    if (col1 !== col2) {
        webform.errors.push({
            fieldName: `CAP1_R108_C1`,
            weight: 1,
            msg: `Cod eroare: 60-004 (Rînd.108) - (Col.1) = (Col.2) - [${col1} ≠ ${col2}]`,
        });
    }

    // Validare pentru datele din filiale
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0; // Numărul de filiale

    for (let i = 0; i < numFilials; i++) {
        let col1Filial = Number(values[`CAP1_R108_C1_FILIAL`][i]);
        let col2Filial = Number(values[`CAP1_R108_C2_FILIAL`][i]);

        // Validăm dacă valorile sunt numere, în caz contrar le considerăm 0
        col1Filial = isNaN(col1Filial) ? 0 : col1Filial;
        col2Filial = isNaN(col2Filial) ? 0 : col2Filial;

        if (col1Filial !== col2Filial) {
            webform.errors.push({
                fieldName: `CAP1_R108_C1_FILIAL`,
                index: i,
                weight: 2,
                msg: `Cod eroare: 60-004 (Rînd.108, Filiala ${i + 1}) - (Col.1) = (Col.2) - [${col1Filial} ≠ ${col2Filial}]`,
            });
        }
    }
}


//--------------------------------------------------

function validate60_003(values) {
    // Definim coloanele pentru validare
    let columns = ["C1", "C2", "C3", "C4"]; // Adaptați lista coloanelor dacă este necesar

    // Validare pentru datele generale (fără filiale)
    columns.forEach(col => {
        let r108 = Number(values[`CAP1_R108_${col}`]);
        let r100 = Number(values[`CAP1_R100_${col}`]);

        // Validăm dacă valorile sunt numere, în caz contrar le considerăm 0
        r108 = isNaN(r108) ? 0 : r108;
        r100 = isNaN(r100) ? 0 : r100;

        if (r108 > r100) {
            webform.errors.push({
                fieldName: `CAP1_R108_${col}`,
                weight: 1,
                msg: `Cod eroare: 60-003 -  (Rînd.108) <= (Rînd.100) (Col.${col}) - [${r108} > ${r100}]`,
            });
        }
    });

    // Validare pentru datele din filiale
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0; // Numărul de filiale

    for (let i = 0; i < numFilials; i++) {
        columns.forEach(col => {
            let r108 = Number(values[`CAP1_R108_${col}_FILIAL`][i]);
            let r100 = Number(values[`CAP1_R100_${col}_FILIAL`][i]);

            // Validăm dacă valorile sunt numere, în caz contrar le considerăm 0
            r108 = isNaN(r108) ? 0 : r108;
            r100 = isNaN(r100) ? 0 : r100;

            if (r108 > r100) {
                webform.errors.push({
                    fieldName: `CAP1_R108_${col}_FILIAL`,
                    index: i,
                    weight: 2,
                    msg: `Cod eroare: 60-003 - (Rînd.108) <= (Rînd.100) (Col.${col}, Filiala ${i + 1}) - [${r108} > ${r100}]`,
                });
            }
        });
    }
}


//-------------------------------------------------------------------------------

function validateCol1EqualsCol2PlusCol3(values) {
    // Definim rândurile din CAP 1 care trebuie validate
    let rows = [100, 101, 102, 103, 104, 105, 106, 107]; // Adaptați lista de rânduri, dacă este necesar

    // Validare pentru datele generale (fără filiale)
    rows.forEach(row => {
        let col1 = Number(values[`CAP1_R${row}_C1`]);
        let col2 = Number(values[`CAP1_R${row}_C2`]);
        let col3 = Number(values[`CAP1_R${row}_C3`]);

        // Validăm dacă valorile sunt numere, în caz contrar le considerăm 0
        col1 = isNaN(col1) ? 0 : col1;
        col2 = isNaN(col2) ? 0 : col2;
        col3 = isNaN(col3) ? 0 : col3;

        if (col1 !== col2 + col3) {
            webform.errors.push({
                fieldName: `CAP1_R${row}_C1`,
                weight: 1,
                msg: `Cod eroare: 60-002 (Rînd.${row}) - (Col.1) = (Col.2) + (Col.3) - [${col1} ≠ ${col2} + ${col3}]`,
            });
        }
    });

    // Validare pentru datele din filiale
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0; // Numărul de filiale

    for (let i = 0; i < numFilials; i++) {
        rows.forEach(row => {
            let col1 = Number(values[`CAP1_R${row}_C1_FILIAL`][i]);
            let col2 = Number(values[`CAP1_R${row}_C2_FILIAL`][i]);
            let col3 = Number(values[`CAP1_R${row}_C3_FILIAL`][i]);

            // Validăm dacă valorile sunt numere, în caz contrar le considerăm 0
            col1 = isNaN(col1) ? 0 : col1;
            col2 = isNaN(col2) ? 0 : col2;
            col3 = isNaN(col3) ? 0 : col3;

            if (col1 !== col2 + col3) {
                webform.errors.push({
                    fieldName: `CAP1_R${row}_C1_FILIAL`,
                    index: i,
                    weight: 2,
                    msg: `Cod eroare: 60-002 (Rînd.${row}, Filiala ${i + 1}) - (Col.1) = (Col.2) + (Col.3) - [${col1} ≠ ${col2} + ${col3}]`,
                });
            }
        });
    }
}


//-----------------------------------------------------------------------
function validateSumRows(values) {
    // Definim rândurile pentru validare și coloanele disponibile
    let columns = ["C1", "C2", "C3", "C4"]; // Adaptați lista coloanelor dacă este necesar
    let rowsToSum = [101, 102, 103, 104, 105, 106, 107]; // Rândurile care trebuie însumate

    // Validare pentru datele generale (fără filiale)
    columns.forEach(col => {
        let r100 = Number(values[`CAP1_R100_${col}`]);
        r100 = isNaN(r100) ? 0 : r100;

        let sum = rowsToSum.reduce((acc, row) => {
            let value = Number(values[`CAP1_R${row}_${col}`]);
            return acc + (isNaN(value) ? 0 : value);
        }, 0);

        if (r100 !== sum) {
            webform.errors.push({
                fieldName: `CAP1_R100_${col}`,
                weight: 1,
                msg: `Cod eroare: 60-001 (Col.${col}) - (Rînd.100) = SUM(Rînd.101 - Rînd.107) - [${r100} ≠ ${sum}]`,
            });
        }
    });

    // Validare pentru datele din filiale
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0; // Numărul de filiale

    for (let i = 0; i < numFilials; i++) {
        columns.forEach(col => {
            let r100 = Number(values[`CAP1_R100_${col}_FILIAL`][i]);
            r100 = isNaN(r100) ? 0 : r100;

            let sum = rowsToSum.reduce((acc, row) => {
                let value = Number(values[`CAP1_R${row}_${col}_FILIAL`][i]);
                return acc + (isNaN(value) ? 0 : value);
            }, 0);

            if (r100 !== sum) {
                webform.errors.push({
                    fieldName: `CAP1_R100_${col}_FILIAL`,
                    index: i,
                    weight: 2,
                    msg: `Cod eroare: 60-001 (Col.${col}, Filiala ${i + 1}) - (Rînd.100) = SUM(Rînd.101 - Rînd.107) - [${r100} ≠ ${sum}]`,
                });
            }
        });
    }
}


//----------------------------------------------------------------------
function validateFieldNoHieroglyphs(fieldName, fieldValue) {
    // Define a regular expression to allow only letters, numbers, spaces, and basic punctuation
    var allowedCharacters = /^[a-zA-Z0-9\s.,'-]+$/;

    // Check if the field contains hieroglyphs or unwanted characters
    if (!allowedCharacters.test(fieldValue)) {
        // Add error message including the invalid value
        return {
            fieldName: fieldName,
            message: `Câmpul "${fieldName}" conține caractere nepermise sau hieroglife. Valoarea introdusă: "${fieldValue}".`
        };
    }

    // Return null if no errors
    return null;
}

//---------------------------------------------------------------------------
//-----------------------------------------------------------------------
function validate_CUATM_FILIAL(values) {
    var seenCUATM = new Set(); // Set to track duplicates

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j] || "").trim(); // Safely handle undefined or null
        var CAP_NUM_FILIAL = Number(values.CAP_NUM_FILIAL[j]);
        

        // Check if CAP_NUM_FILIAL exists but CAP_CUATM_FILIAL is missing
        if (CAP_NUM_FILIAL && CAP_CUATM_FILIAL === "") {
            webform.errors.push({
                'fieldName': 'CAP_CUATM_FILIAL',
                'index': j,
                'weight': 20,
                'msg': Drupal.t('Raion: @CAP_NUM_FILIAL - Cod eroare: 60-007.  - Dacă există Nr. [@CAP_NUM_FILIAL], atunci trebuie să existe și cod CUATM.', {
                    '@CAP_NUM_FILIAL': CAP_NUM_FILIAL,
                    '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                })
            });
        }

        // Check for duplicate CAP_CUATM_FILIAL values
        if (CAP_CUATM_FILIAL) {
            if (seenCUATM.has(CAP_CUATM_FILIAL)) {
                webform.errors.push({
                    'fieldName': 'CAP_CUATM_FILIAL',
                    'index': j,
                    'weight': 10,
                    'msg': Drupal.t('Codul CUATM: @CAP_CUATM_FILIAL  este duplicat. Fiecare cod CUATM trebuie să fie unic.', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL
                    })
                });
            } else {
                seenCUATM.add(CAP_CUATM_FILIAL);
            }
        }
    }
}


//-----------------------------------------------------------------------
function validatePhoneNumber(phone) {
    // Check if the phone number is valid (exactly 9 digits)
    if (!phone || !/^[0-9]{9}$/.test(phone)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))
        });
    }

    // Check if the first digit is 0
    if (phone && phone[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
}



//--------------------------

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



//------------------------------


function concatMessage(errorCode, fieldTitle, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }

    if (fieldTitle) {
        titleParts.push(fieldTitle);
    }

    if (titleParts.length) {
        msg = titleParts.join(", ") + ". " + msg;
    }

    return msg;
}

function getErrorMessage(errorCode) {
    return Drupal.t("Error code: @error_code", { "@error_code": errorCode });
}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty("weight")) {
        a.error_code = 9999;
    }
    if (!b.hasOwnProperty("weight")) {
        b.error_code = 9999;
    }
    return toFloat(a.error_code) - toFloat(b.error_code);
}
