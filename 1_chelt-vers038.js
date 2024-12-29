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

    var fieldError = validateFieldNoHieroglyphs('Entitatea', values.ENT_NAME);
    if (fieldError) {
        webform.errors.push({
            'fieldName': fieldError.fieldName,
            'index': 0,
            'weight': 10,
            'msg': fieldError.message
        });
    }
    
    validatePhoneNumber(values.PHONE);
    validate_CUATM_FILIAL(values);
    validateRow100(values);

    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.validatorsStatus["chelt1"] = 1;
    validateWebform();
};

//-----------------------------------------------------------------------
function validateRow100(values) {
    // Definim variabilele pentru fiecare coloană a rândurilor 100-107
    let columns = ["C1", "C2", "C3", "C4"]; // Adaptați în funcție de coloanele disponibile

    // Validare pentru datele generale (fără filiale)
    columns.forEach(col => {
        let r100 = Number(values[`CAP1_R100_${col}`]) || 0;
        let sumR101ToR107 = 0;

        for (let row = 101; row <= 107; row++) {
            sumR101ToR107 += Number(values[`CAP1_R${row}_${col}`]) || 0;
        }

        if (r100 !== sumR101ToR107) {
            webform.errors.push({
                fieldName: `CAP1_R100_${col}`,
                weight: 1,
                msg: `Cod eroare: 60-001 (Rînd.100) = SUM(Rînd.101 - Rînd.107) (Col.${col}) - [${r100} ≠ ${sumR101ToR107}]`,
            });
        }
    });

    // Validare pentru datele din filiale
    let numFilials = values.CAP_NUM_FILIAL ? values.CAP_NUM_FILIAL.length : 0; // Numărul de filiale

    for (let i = 0; i < numFilials; i++) {
        columns.forEach(col => {
            let r100 = Number(values[`CAP1_R100_${col}_FILIAL`][i]) || 0;
            let sumR101ToR107 = 0;

            for (let row = 101; row <= 107; row++) {
                sumR101ToR107 += Number(values[`CAP1_R${row}_${col}_FILIAL`][i]) || 0;
            }

            if (r100 !== sumR101ToR107) {
                webform.errors.push({
                    fieldName: `CAP1_R100_${col}_FILIAL`,
                    index: i,
                    weight: 1,
                    msg: `Cod eroare: 60-001  (Rînd.100) = SUM(Rînd.101 - Rînd.107) (Col.${col}, Filiala ${i + 1}) - [${r100} ≠ ${sumR101ToR107}]`,
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
