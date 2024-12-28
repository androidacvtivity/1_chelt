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

    // Checking  telefon
    if (!values.PHONE || !/^[0-9]{9}$/.test(values.PHONE)) {
        webform.errors.push({
            fieldName: "PHONE",
            weight: 29,
            // 'msg': Drupal.t(' Cod eroare: A.09 Introduceți doar un număr de telefon format din 9 cifre')
            msg: concatMessage(
                "A.09",
                "",
                Drupal.t("Introduceți doar un număr de telefon format din 9 cifre")
            ),
        });
    }

    // Check if the first digit is 0
    if (values.PHONE && values.PHONE[0] !== "0") {
        webform.errors.push({
            fieldName: "PHONE",
            weight: 30,
            // 'msg': Drupal.t(' Cod eroare: A.09 Prima cifră a numărului de telefon trebuie să fie 0')

            msg: concatMessage(
                "A.09",
                "",
                Drupal.t("Prima cifră a numărului de telefon trebuie să fie 0")
            ),
        });
    }
    //End  Checking  telefon

    
    
    // End dynamic validations ------------------------------------------------------------------------------------------------

    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });
    webform.validatorsStatus["chelt1"] = 1;
    validateWebform();
};

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
