(function ($) {
    var activity_options_default_value = "";
    var caem_sorted = false;

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

    /*webform.afterLoad.bns_split_tables = function() {
        if (Drupal.settings.mywebform.preview) {
          if (typeof(split_tables) == "function") {
            split_tables();
          }
        }
      }*/
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

    if (!isNaN(Number(values.CAP1_R100_C1))) {
        var r1001 = Number(values.CAP1_R100_C1);
    }
    if (!isNaN(Number(values.CAP1_R100_C2))) {
        var r1002 = Number(values.CAP1_R100_C2);
    }
    if (!isNaN(Number(values.CAP1_R100_C3))) {
        var r1003 = Number(values.CAP1_R100_C3);
    }
    if (!isNaN(Number(values.CAP1_R100_C4))) {
        var r1004 = Number(values.CAP1_R100_C4);
    }
    if (!isNaN(Number(values.CAP1_R101_C1))) {
        var r1011 = Number(values.CAP1_R101_C1);
    }
    if (!isNaN(Number(values.CAP1_R101_C2))) {
        var r1012 = Number(values.CAP1_R101_C2);
    }
    if (!isNaN(Number(values.CAP1_R101_C3))) {
        var r1013 = Number(values.CAP1_R101_C3);
    }
    if (!isNaN(Number(values.CAP1_R101_C4))) {
        var r1014 = Number(values.CAP1_R101_C4);
    }
    if (!isNaN(Number(values.CAP1_R102_C1))) {
        var r1021 = Number(values.CAP1_R102_C1);
    }
    if (!isNaN(Number(values.CAP1_R102_C2))) {
        var r1022 = Number(values.CAP1_R102_C2);
    }
    if (!isNaN(Number(values.CAP1_R102_C3))) {
        var r1023 = Number(values.CAP1_R102_C3);
    }
    if (!isNaN(Number(values.CAP1_R102_C4))) {
        var r1024 = Number(values.CAP1_R102_C4);
    }
    if (!isNaN(Number(values.CAP1_R103_C1))) {
        var r1031 = Number(values.CAP1_R103_C1);
    }
    if (!isNaN(Number(values.CAP1_R103_C2))) {
        var r1032 = Number(values.CAP1_R103_C2);
    }
    if (!isNaN(Number(values.CAP1_R103_C3))) {
        var r1033 = Number(values.CAP1_R103_C3);
    }
    if (!isNaN(Number(values.CAP1_R103_C4))) {
        var r1034 = Number(values.CAP1_R103_C4);
    }
    if (!isNaN(Number(values.CAP1_R104_C1))) {
        var r1041 = Number(values.CAP1_R104_C1);
    }
    if (!isNaN(Number(values.CAP1_R104_C2))) {
        var r1042 = Number(values.CAP1_R104_C2);
    }
    if (!isNaN(Number(values.CAP1_R104_C3))) {
        var r1043 = Number(values.CAP1_R104_C3);
    }
    if (!isNaN(Number(values.CAP1_R104_C4))) {
        var r1044 = Number(values.CAP1_R104_C4);
    }
    if (!isNaN(Number(values.CAP1_R105_C1))) {
        var r1051 = Number(values.CAP1_R105_C1);
    }
    if (!isNaN(Number(values.CAP1_R105_C2))) {
        var r1052 = Number(values.CAP1_R105_C2);
    }
    if (!isNaN(Number(values.CAP1_R105_C3))) {
        var r1053 = Number(values.CAP1_R105_C3);
    }
    if (!isNaN(Number(values.CAP1_R105_C4))) {
        var r1054 = Number(values.CAP1_R105_C4);
    }
    if (!isNaN(Number(values.CAP1_R106_C1))) {
        var r1061 = Number(values.CAP1_R106_C1);
    }
    if (!isNaN(Number(values.CAP1_R106_C2))) {
        var r1062 = Number(values.CAP1_R106_C2);
    }
    if (!isNaN(Number(values.CAP1_R106_C3))) {
        var r1063 = Number(values.CAP1_R106_C3);
    }
    if (!isNaN(Number(values.CAP1_R106_C4))) {
        var r1064 = Number(values.CAP1_R106_C4);
    }
    if (!isNaN(Number(values.CAP1_R107_C1))) {
        var r1071 = Number(values.CAP1_R107_C1);
    }
    if (!isNaN(Number(values.CAP1_R107_C2))) {
        var r1072 = Number(values.CAP1_R107_C2);
    }
    if (!isNaN(Number(values.CAP1_R107_C3))) {
        var r1073 = Number(values.CAP1_R107_C3);
    }
    if (!isNaN(Number(values.CAP1_R107_C4))) {
        var r1074 = Number(values.CAP1_R107_C4);
    }
    if (!isNaN(Number(values.CAP1_R108_C1))) {
        var r1081 = Number(values.CAP1_R108_C1);
    }
    if (!isNaN(Number(values.CAP1_R108_C2))) {
        var r1082 = Number(values.CAP1_R108_C2);
    }
    if (!isNaN(Number(values.CAP1_R108_C4))) {
        var r1084 = Number(values.CAP1_R108_C4);
    }
    if (!isNaN(Number(values.CAP1_R999_C1))) {
        var r9991 = Number(values.CAP1_R999_C1);
    }
    if (!isNaN(Number(values.CAP1_R999_C2))) {
        var r9992 = Number(values.CAP1_R999_C2);
    }
    if (!isNaN(Number(values.CAP1_R999_C3))) {
        var r9993 = Number(values.CAP1_R999_C3);
    }
    if (!isNaN(Number(values.CAP1_R999_C4))) {
        var r9994 = Number(values.CAP1_R999_C4);
    }

    var SUM_60_01_1 = r1011 + r1021 + r1031 + r1041 + r1051 + r1061 + r1071;
    if (Number(values.CAP1_R100_C1) != SUM_60_01_1 && SUM_60_01_1 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R100_C1",
            weight: 1,
            msg: Drupal.t(
                "Cod eroare: 60-001.1 [@r1001] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001.1]",
                { "@r1001": r1001, "@SUM_60_001.1": SUM_60_01_1 }
            ),
        });
    }
    var SUM_60_01_2 = r1012 + r1022 + r1032 + r1042 + r1052 + r1062 + r1072;
    if (Number(values.CAP1_R100_C2) != SUM_60_01_2 && SUM_60_01_2 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R100_C2",
            weight: 2,
            msg: Drupal.t(
                "Cod eroare: 60-001.2 [@r1002] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001.2]",
                { "@r1002": r1002, "@SUM_60_001.2": SUM_60_01_2 }
            ),
        });
    }
    var SUM_60_01_3 = r1013 + r1023 + r1033 + r1043 + r1053 + r1063 + r1073;
    if (Number(values.CAP1_R100_C3) != SUM_60_01_3 && SUM_60_01_3 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R100_C3",
            weight: 3,
            msg: Drupal.t(
                "Cod eroare: 60-001.3 [@r1003] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001.3]",
                { "@r1003": r1003, "@SUM_60_001.3": SUM_60_01_3 }
            ),
        });
    }
    var SUM_60_01_4 = r1014 + r1024 + r1034 + r1044 + r1054 + r1064 + r1074;
    if (Number(values.CAP1_R100_C4) != SUM_60_01_4 && SUM_60_01_4 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R100_C4",
            weight: 4,
            msg: Drupal.t(
                "Cod eroare: 60-001.4 [@r1004] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001.4]",
                { "@r1004": r1004, "@SUM_60_001.4": SUM_60_01_4 }
            ),
        });
    }
    var SUM_60_02_1 = r1002 + r1003;
    if (Number(values.CAP1_R100_C1) != SUM_60_02_1 && SUM_60_02_1 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R100_C1",
            weight: 5,
            msg: Drupal.t(
                "Cod eroare: 60-002.1 [@r1001] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.1]",
                { "@r1001": r1001, "@SUM_60_002.1": SUM_60_02_1 }
            ),
        });
    }
    var SUM_60_02_2 = r1012 + r1013;
    if (Number(values.CAP1_R101_C1) != SUM_60_02_2 && SUM_60_02_2 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R101_C1",
            weight: 6,
            msg: Drupal.t(
                "Cod eroare: 60-002.2 [@r1011] - (Col.1) = (Col.2 ) + (Col.3)  (Rînd.*) - [@SUM_60_002.2]",
                { "@r1011": r1011, "@SUM_60_002.2": SUM_60_02_2 }
            ),
        });
    }
    var SUM_60_02_3 = r1022 + r1023;
    if (Number(values.CAP1_R102_C1) != SUM_60_02_3 && SUM_60_02_3 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R102_C1",
            weight: 7,
            msg: Drupal.t(
                "Cod eroare: 60-002.3 [@r1021] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.3]",
                { "@r1021": r1021, "@SUM_60_002.3": SUM_60_02_3 }
            ),
        });
    }
    var SUM_60_02_4 = r1032 + r1033;
    if (Number(values.CAP1_R103_C1) != SUM_60_02_4 && SUM_60_02_4 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R103_C1",
            weight: 8,
            msg: Drupal.t(
                "Cod eroare: 60-002.4 [@r1031] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.4]",
                { "@r1031": r1031, "@SUM_60_002.4": SUM_60_02_4 }
            ),
        });
    }
    var SUM_60_02_5 = r1042 + r1043;
    if (Number(values.CAP1_R104_C1) != SUM_60_02_5 && SUM_60_02_5 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R104_C1",
            weight: 9,
            msg: Drupal.t(
                "Cod eroare: 60-002.5 [@r1041] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.5]",
                { "@r1041": r1041, "@SUM_60_002.5": SUM_60_02_5 }
            ),
        });
    }
    var SUM_60_02_6 = r1052 + r1053;
    if (Number(values.CAP1_R105_C1) != SUM_60_02_6 && SUM_60_02_6 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R105_C1",
            weight: 10,
            msg: Drupal.t(
                "Cod eroare: 60-002.6 [@r1051] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.6]",
                { "@r1051": r1051, "@SUM_60_002.6": SUM_60_02_6 }
            ),
        });
    }
    var SUM_60_02_7 = r1062 + r1063;
    if (Number(values.CAP1_R106_C1) != SUM_60_02_7 && SUM_60_02_7 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R106_C1",
            weight: 11,
            msg: Drupal.t(
                "Cod eroare: 60-002.7 [@r1061] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.7]",
                { "@r1061": r1061, "@SUM_60_002.7": SUM_60_02_7 }
            ),
        });
    }
    var SUM_60_02_8 = r1072 + r1073;
    if (Number(values.CAP1_R107_C1) != SUM_60_02_8 && SUM_60_02_8 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R107_C1",
            weight: 12,
            msg: Drupal.t(
                "Cod eroare: 60-002.8 [@r1071] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.8]",
                { "@r1071": r1071, "@SUM_60_002.8": SUM_60_02_8 }
            ),
        });
    }
    var SUM_60_02_9 = r1082;
    if (Number(values.CAP1_R108_C1) != SUM_60_02_9 && SUM_60_02_9 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R108_C1",
            weight: 13,
            msg: Drupal.t(
                "Cod eroare: 60-002.9 [@r1081] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.9]",
                { "@r1081": r1081, "@SUM_60_002.9": SUM_60_02_9 }
            ),
        });
    }
    var SUM_60_02_10 = r9992 + r9993;
    if (Number(values.CAP1_R999_C1) != SUM_60_02_10 && SUM_60_02_10 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R999_C1",
            weight: 14,
            msg: Drupal.t(
                "Cod eroare: 60-002.10 [@r9991] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002.10]",
                { "@r9991": r9991, "@SUM_60_002.10": SUM_60_02_10 }
            ),
        });
    }
    if (!(r1081 <= r1001) && r1081 != 0 && r1001 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R108_C1",
            weight: 15,
            msg: Drupal.t(
                "Cod eroare: 60-003.1 [@r1081] - (Rînd.108) <= (Rînd.100) - [@r1081 <> @r1001]",
                { "@r1081": r1081, "@r1001": r1001 }
            ),
        });
    }
    if (!(r1082 <= r1002) && r1082 != 0 && r1002 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R108_C2",
            weight: 16,
            msg: Drupal.t(
                "Cod eroare: 60-003.2 [@r1082] - (Rînd.108) <= (Rînd.100) - [@r1082 <> @r1002]",
                { "@r1082": r1082, "@r1002": r1002 }
            ),
        });
    }
    if (!(r1084 <= r1004) && r1084 != 0 && r1004 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R108_C3",
            weight: 17,
            msg: Drupal.t(
                "Cod eroare: 60-003.3 [@r1084] - (Rînd.108) <= (Rînd.100) - [@r1084 <> @r1004]",
                { "@r1084": r1084, "@r1004": r1004 }
            ),
        });
    }
    if (!(r1081 == r1082) && r1081 != 0 && r1082 != 0) {
        webform.errors.push({
            fieldName: "CAP1_R108_C2",
            weight: 18,
            msg: Drupal.t(
                "Cod eroare: 60-004 [@r1082] - (Col.1) = (Col.2)  (Rînd.108) - [@r1081 <> @r1082]",
                { "@r1081": r1081, "@r1082": r1082 }
            ),
        });
    }

    if (!isNaN(Number(values.CAP2_R200_C1))) {
        var r22001 = Number(values.CAP2_R200_C1);
    }
    if (!isNaN(Number(values.CAP2_R200_C2))) {
        var r22002 = Number(values.CAP2_R200_C2);
    }
    if (!isNaN(Number(values.CAP2_R201_C1))) {
        var r22011 = Number(values.CAP2_R201_C1);
    }
    if (!isNaN(Number(values.CAP2_R201_C2))) {
        var r22012 = Number(values.CAP2_R201_C2);
    }
    if (!isNaN(Number(values.CAP2_R202_C1))) {
        var r22021 = Number(values.CAP2_R202_C1);
    }
    if (!isNaN(Number(values.CAP2_R202_C2))) {
        var r22022 = Number(values.CAP2_R202_C2);
    }
    if (!isNaN(Number(values.CAP2_R203_C1))) {
        var r22031 = Number(values.CAP2_R203_C1);
    }
    if (!isNaN(Number(values.CAP2_R203_C2))) {
        var r22032 = Number(values.CAP2_R203_C2);
    }
    if (!isNaN(Number(values.CAP2_R300_C1))) {
        var r23001 = Number(values.CAP2_R300_C1);
    }
    if (!isNaN(Number(values.CAP2_R300_C2))) {
        var r23002 = Number(values.CAP2_R300_C2);
    }
    if (!isNaN(Number(values.CAP2_R301_C1))) {
        var r23011 = Number(values.CAP2_R301_C1);
    }
    if (!isNaN(Number(values.CAP2_R301_C2))) {
        var r23012 = Number(values.CAP2_R301_C2);
    }
    if (!isNaN(Number(values.CAP2_R302_C1))) {
        var r23021 = Number(values.CAP2_R302_C1);
    }
    if (!isNaN(Number(values.CAP2_R302_C2))) {
        var r23022 = Number(values.CAP2_R302_C2);
    }
    if (!isNaN(Number(values.CAP2_R303_C1))) {
        var r23031 = Number(values.CAP2_R303_C1);
    }
    if (!isNaN(Number(values.CAP2_R303_C2))) {
        var r23032 = Number(values.CAP2_R303_C2);
    }
    if (!isNaN(Number(values.CAP2_R999_C1))) {
        var r29991 = Number(values.CAP2_R999_C1);
    }
    if (!isNaN(Number(values.CAP2_R999_C2))) {
        var r29992 = Number(values.CAP2_R999_C2);
    }

    var SUM2_60_01_1 = r22011 + r22021 + r22031;
    if (Number(values.CAP2_R200_C1) != SUM2_60_01_1 && SUM2_60_01_1 != 0) {
        webform.errors.push({
            fieldName: "CAP2_R200_C1",
            weight: 19,
            msg: Drupal.t(
                "Cod eroare: 60-001.1 [@r22001] - (Rînd.200) = (Rînd.201) + (Rînd.202) + (Rînd.203) (Col.*) - [@SUM2_60_001.1]",
                { "@r22001": r22001, "@SUM2_60_001.1": SUM2_60_01_1 }
            ),
        });
    }
    var SUM2_60_01_2 = r22012 + r22022 + r22032;
    if (Number(values.CAP2_R200_C2) != SUM2_60_01_2 && SUM2_60_01_2 != 0) {
        webform.errors.push({
            fieldName: "CAP2_R200_C2",
            weight: 20,
            msg: Drupal.t(
                "Cod eroare: 60-001.2 [@r22002] - (Rînd.200) = (Rînd.201) + (Rînd.202) + (Rînd.203) (Col.*) - [@SUM2_60_001.2]",
                { "@r22002": r22002, "@SUM2_60_001.2": SUM2_60_01_2 }
            ),
        });
    }
    var SUM2_60_02_1 = r23011 + r23021 + r23031;
    if (Number(values.CAP2_R300_C1) != SUM2_60_02_1 && SUM2_60_02_1 != 0) {
        webform.errors.push({
            fieldName: "CAP2_R300_C1",
            weight: 21,
            msg: Drupal.t(
                "Cod eroare: 60-002.1 [@r23001] - (Rînd.300) = (Rînd.301) + (Rînd.302) + (Rînd.303) (Col.*) - [@SUM2_60_002.1]",
                { "@r23001": r23001, "@SUM2_60_002.1": SUM2_60_02_1 }
            ),
        });
    }
    var SUM2_60_02_2 = r23012 + r23022 + r23032;
    if (Number(values.CAP2_R300_C2) != SUM2_60_02_2 && SUM2_60_02_2 != 0) {
        webform.errors.push({
            fieldName: "CAP2_R300_C2",
            weight: 22,
            msg: Drupal.t(
                "Cod eroare: 60-002.2 [@r23002] - (Rînd.300) = (Rînd.301) + (Rînd.302) + (Rînd.303) (Col.*) - [@SUM2_60_002.2]",
                { "@r23002": r23002, "@SUM2_60_002.2": SUM2_60_02_2 }
            ),
        });
    }

    // Start dynamic validations ----------------------------------------------------------------------------------------------
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        if (!isNaN(String(values.CAP_CUATM_FILIAL[j]))) {
            var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R100_C1_FILIAL[j]))) {
            var r1001_FILIAL = Number(values.CAP1_R100_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R100_C2_FILIAL[j]))) {
            var r1002_FILIAL = Number(values.CAP1_R100_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R100_C3_FILIAL[j]))) {
            var r1003_FILIAL = Number(values.CAP1_R100_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R100_C4_FILIAL[j]))) {
            var r1004_FILIAL = Number(values.CAP1_R100_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R101_C1_FILIAL[j]))) {
            var r1011_FILIAL = Number(values.CAP1_R101_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R101_C2_FILIAL[j]))) {
            var r1012_FILIAL = Number(values.CAP1_R101_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R101_C3_FILIAL[j]))) {
            var r1013_FILIAL = Number(values.CAP1_R101_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R101_C4_FILIAL[j]))) {
            var r1014_FILIAL = Number(values.CAP1_R101_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R102_C1_FILIAL[j]))) {
            var r1021_FILIAL = Number(values.CAP1_R102_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R102_C2_FILIAL[j]))) {
            var r1022_FILIAL = Number(values.CAP1_R102_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R102_C3_FILIAL[j]))) {
            var r1023_FILIAL = Number(values.CAP1_R102_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R102_C4_FILIAL[j]))) {
            var r1024_FILIAL = Number(values.CAP1_R102_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R103_C1_FILIAL[j]))) {
            var r1031_FILIAL = Number(values.CAP1_R103_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R103_C2_FILIAL[j]))) {
            var r1032_FILIAL = Number(values.CAP1_R103_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R103_C3_FILIAL[j]))) {
            var r1033_FILIAL = Number(values.CAP1_R103_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R103_C4_FILIAL[j]))) {
            var r1034_FILIAL = Number(values.CAP1_R103_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R104_C1_FILIAL[j]))) {
            var r1041_FILIAL = Number(values.CAP1_R104_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R104_C2_FILIAL[j]))) {
            var r1042_FILIAL = Number(values.CAP1_R104_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R104_C3_FILIAL[j]))) {
            var r1043_FILIAL = Number(values.CAP1_R104_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R104_C4_FILIAL[j]))) {
            var r1044_FILIAL = Number(values.CAP1_R104_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R105_C1_FILIAL[j]))) {
            var r1051_FILIAL = Number(values.CAP1_R105_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R105_C2_FILIAL[j]))) {
            var r1052_FILIAL = Number(values.CAP1_R105_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R105_C3_FILIAL[j]))) {
            var r1053_FILIAL = Number(values.CAP1_R105_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R105_C4_FILIAL[j]))) {
            var r1054_FILIAL = Number(values.CAP1_R105_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R106_C1_FILIAL[j]))) {
            var r1061_FILIAL = Number(values.CAP1_R106_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R106_C2_FILIAL[j]))) {
            var r1062_FILIAL = Number(values.CAP1_R106_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R106_C3_FILIAL[j]))) {
            var r1063_FILIAL = Number(values.CAP1_R106_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R106_C4_FILIAL[j]))) {
            var r1064_FILIAL = Number(values.CAP1_R106_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R107_C1_FILIAL[j]))) {
            var r1071_FILIAL = Number(values.CAP1_R107_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R107_C2_FILIAL[j]))) {
            var r1072_FILIAL = Number(values.CAP1_R107_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R107_C3_FILIAL[j]))) {
            var r1073_FILIAL = Number(values.CAP1_R107_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R107_C4_FILIAL[j]))) {
            var r1074_FILIAL = Number(values.CAP1_R107_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R108_C1_FILIAL[j]))) {
            var r1081_FILIAL = Number(values.CAP1_R108_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R108_C2_FILIAL[j]))) {
            var r1082_FILIAL = Number(values.CAP1_R108_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R108_C4_FILIAL[j]))) {
            var r1084_FILIAL = Number(values.CAP1_R108_C4_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R999_C1_FILIAL[j]))) {
            var r9991_FILIAL = Number(values.CAP1_R999_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R999_C2_FILIAL[j]))) {
            var r9992_FILIAL = Number(values.CAP1_R999_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R999_C3_FILIAL[j]))) {
            var r9993_FILIAL = Number(values.CAP1_R999_C3_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R999_C4_FILIAL[j]))) {
            var r9994_FILIAL = Number(values.CAP1_R999_C4_FILIAL[j]);
        }

        var SUM_60_01_1_FILIAL =
            r1011_FILIAL +
            r1021_FILIAL +
            r1031_FILIAL +
            r1041_FILIAL +
            r1051_FILIAL +
            r1061_FILIAL +
            r1071_FILIAL;
        if (r1001_FILIAL != SUM_60_01_1_FILIAL && SUM_60_01_1_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R100_C1_FILIAL",
                index: j,
                weight: 1,
                msg: Drupal.t(
                    "Cod eroare: 60-001.1 [@r1001_FILIAL] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001_1_FILIAL]",
                    {
                        "@r1001_FILIAL": r1001_FILIAL,
                        "@SUM_60_001_1_FILIAL": SUM_60_01_1_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_01_2_FILIAL =
            r1012_FILIAL +
            r1022_FILIAL +
            r1032_FILIAL +
            r1042_FILIAL +
            r1052_FILIAL +
            r1062_FILIAL +
            r1072_FILIAL;
        if (r1002_FILIAL != SUM_60_01_2_FILIAL && SUM_60_01_2_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R100_C2_FILIAL",
                index: j,
                weight: 2,
                msg: Drupal.t(
                    "Cod eroare: 60-001.2 [@r1002_FILIAL] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001_2_FILIAL]",
                    {
                        "@r1002_FILIAL": r1002_FILIAL,
                        "@SUM_60_001_2_FILIAL": SUM_60_01_2_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_01_3_FILIAL =
            r1013_FILIAL +
            r1023_FILIAL +
            r1033_FILIAL +
            r1043_FILIAL +
            r1053_FILIAL +
            r1063_FILIAL +
            r1073_FILIAL;
        if (r1003_FILIAL != SUM_60_01_3_FILIAL && SUM_60_01_3_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R100_C3_FILIAL",
                index: j,
                weight: 3,
                msg: Drupal.t(
                    "Cod eroare: 60-001.3 [@r1003_FILIAL] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001_3_FILIAL]",
                    {
                        "@r1003_FILIAL": r1003_FILIAL,
                        "@SUM_60_001_3_FILIAL": SUM_60_01_3_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_01_4_FILIAL =
            r1014_FILIAL +
            r1024_FILIAL +
            r1034_FILIAL +
            r1044_FILIAL +
            r1054_FILIAL +
            r1064_FILIAL +
            r1074_FILIAL;
        if (r1004_FILIAL != SUM_60_01_4_FILIAL && SUM_60_01_4_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R100_C4_FILIAL",
                index: j,
                weight: 4,
                msg: Drupal.t(
                    "Cod eroare: 60-001.4 [@r1004_FILIAL] - (Rînd.100) = (Rînd.101) + (Rînd.102) + (Rînd.103) + (Rînd.104) + (Rînd.105) + (Rînd.106) + (Rînd.107) (Col.*) - [@SUM_60_001_4_FILIAL]",
                    {
                        "@r1004_FILIAL": r1004_FILIAL,
                        "@SUM_60_001_4_FILIAL": SUM_60_01_4_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_1_FILIAL = r1002_FILIAL + r1003_FILIAL;
        if (r1001_FILIAL != SUM_60_02_1_FILIAL && SUM_60_02_1_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R100_C1_FILIAL",
                index: j,
                weight: 5,
                msg: Drupal.t(
                    "Cod eroare: 60-002.1 [@r1001_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_1_FILIAL]",
                    {
                        "@r1001_FILIAL": r1001_FILIAL,
                        "@SUM_60_002_1_FILIAL": SUM_60_02_1_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_2_FILIAL = r1012_FILIAL + r1013_FILIAL;
        if (r1011_FILIAL != SUM_60_02_2_FILIAL && SUM_60_02_2_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R101_C1_FILIAL",
                index: j,
                weight: 6,
                msg: Drupal.t(
                    "Cod eroare: 60-002.2 [@r1011_FILIAL] - (Col.1) = (Col.2 ) + (Col.3)  (Rînd.*) - [@SUM_60_002_2_FILIAL]",
                    {
                        "@r1011_FILIAL": r1011_FILIAL,
                        "@SUM_60_002_2_FILIAL": SUM_60_02_2_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_3_FILIAL = r1022_FILIAL + r1023_FILIAL;
        if (r1021_FILIAL != SUM_60_02_3_FILIAL && SUM_60_02_3_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R102_C1_FILIAL",
                index: j,
                weight: 7,
                msg: Drupal.t(
                    "Cod eroare: 60-002.3 [@r1021_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_3_FILIAL]",
                    {
                        "@r1021_FILIAL": r1021_FILIAL,
                        "@SUM_60_002_3_FILIAL": SUM_60_02_3_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_4_FILIAL = r1032_FILIAL + r1033_FILIAL;
        if (r1031_FILIAL != SUM_60_02_4_FILIAL && SUM_60_02_4_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R103_C1_FILIAL",
                index: j,
                weight: 8,
                msg: Drupal.t(
                    "Cod eroare: 60-002.4 [@r1031_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_4_FILIAL]",
                    {
                        "@r1031_FILIAL": r1031_FILIAL,
                        "@SUM_60_002_4_FILIAL": SUM_60_02_4_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_5_FILIAL = r1042_FILIAL + r1043_FILIAL;
        if (r1041_FILIAL != SUM_60_02_5_FILIAL && SUM_60_02_5_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R104_C1_FILIAL",
                index: j,
                weight: 9,
                msg: Drupal.t(
                    "Cod eroare: 60-002.5 [@r1041_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_5_FILIAL]",
                    {
                        "@r1041_FILIAL": r1041_FILIAL,
                        "@SUM_60_002_5_FILIAL": SUM_60_02_5_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_6_FILIAL = r1052_FILIAL + r1053_FILIAL;
        if (r1051_FILIAL != SUM_60_02_6_FILIAL && SUM_60_02_6_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R105_C1_FILIAL",
                index: j,
                weight: 10,
                msg: Drupal.t(
                    "Cod eroare: 60-002.6 [@r1051_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_6_FILIAL]",
                    {
                        "@r1051_FILIAL": r1051_FILIAL,
                        "@SUM_60_002_6_FILIAL": SUM_60_02_6_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_7_FILIAL = r1062_FILIAL + r1063_FILIAL;
        if (r1061_FILIAL != SUM_60_02_7_FILIAL && SUM_60_02_7_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R106_C1_FILIAL",
                index: j,
                weight: 11,
                msg: Drupal.t(
                    "Cod eroare: 60-002.7 [@r1061_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_7_FILIAL]",
                    {
                        "@r1061_FILIAL": r1061_FILIAL,
                        "@SUM_60_002_7_FILIAL": SUM_60_02_7_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_8_FILIAL = r1072_FILIAL + r1073_FILIAL;
        if (r1071_FILIAL != SUM_60_02_8_FILIAL && SUM_60_02_8_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R107_C1_FILIAL",
                index: j,
                weight: 12,
                msg: Drupal.t(
                    "Cod eroare: 60-002.8 [@r1071_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_8_FILIAL]",
                    {
                        "@r1071_FILIAL": r1071_FILIAL,
                        "@SUM_60_002_8_FILIAL": SUM_60_02_8_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_9_FILIAL = r1082_FILIAL;
        if (r1081_FILIAL != SUM_60_02_9_FILIAL && SUM_60_02_9_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R108_C1_FILIAL",
                index: j,
                weight: 13,
                msg: Drupal.t(
                    "Cod eroare: 60-002.9 [@r1081_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_9_FILIAL]",
                    {
                        "@r1081_FILIAL": r1081_FILIAL,
                        "@SUM_60_002_9_FILIAL": SUM_60_02_9_FILIAL,
                    }
                ),
            });
        }
        var SUM_60_02_10_FILIAL = r9992_FILIAL + r9993_FILIAL;
        if (r9991_FILIAL != SUM_60_02_10_FILIAL && SUM_60_02_10_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP1_R999_C1_FILIAL",
                index: j,
                weight: 14,
                msg: Drupal.t(
                    "Cod eroare: 60-002.10 [@r9991_FILIAL] - (Col.1) = (Col.2) + (Col.3)  (Rînd.*) - [@SUM_60_002_10_FILIAL]",
                    {
                        "@r9991_FILIAL": r9991_FILIAL,
                        "@SUM_60_002_10_FILIAL": SUM_60_02_10_FILIAL,
                    }
                ),
            });
        }
        if (
            !(r1081_FILIAL <= r1001_FILIAL) &&
            r1081_FILIAL != 0 &&
            r1001_FILIAL != 0
        ) {
            webform.errors.push({
                fieldName: "CAP1_R108_C1_FILIAL",
                index: j,
                weight: 15,
                msg: Drupal.t(
                    "Cod eroare: 60-003.1 [@r1081_FILIAL] - (Rînd.108) <= (Rînd.100) - [@r1081 <> @r1001]",
                    { "@r1081_FILIAL": r1081_FILIAL, "@r1001_FILIAL": r1001_FILIAL }
                ),
            });
        }
        if (
            !(r1082_FILIAL <= r1002_FILIAL) &&
            r1082_FILIAL != 0 &&
            r1002_FILIAL != 0
        ) {
            webform.errors.push({
                fieldName: "CAP1_R108_C2_FILIAL",
                index: j,
                weight: 16,
                msg: Drupal.t(
                    "Cod eroare: 60-003.2 [@r1082_FILIAL] - (Rînd.108) <= (Rînd.100) - [@r1082 <> @r1002]",
                    { "@r1082_FILIAL": r1082_FILIAL, "@r1002_FILIAL": r1002_FILIAL }
                ),
            });
        }
        if (
            !(r1084_FILIAL <= r1004_FILIAL) &&
            r1084_FILIAL != 0 &&
            r1004_FILIAL != 0
        ) {
            webform.errors.push({
                fieldName: "CAP1_R108_C3_FILIAL",
                index: j,
                weight: 17,
                msg: Drupal.t(
                    "Cod eroare: 60-003.3 [@r1084_FILIAL] - (Rînd.108) <= (Rînd.100) - [@r1084 <> @r1004]",
                    { "@r1084_FILIAL": r1084_FILIAL, "@r1004_FILIAL": r1004_FILIAL }
                ),
            });
        }
        if (
            !(r1081_FILIAL == r1082_FILIAL) &&
            r1081_FILIAL != 0 &&
            r1082_FILIAL != 0
        ) {
            webform.errors.push({
                fieldName: "CAP1_R108_C2_FILIAL",
                index: j,
                weight: 18,
                msg: Drupal.t(
                    "Cod eroare: 60-004 [@r1082_FILIAL] - (Col.1) = (Col.2)  (Rînd.108) - [@r1081 <> @r1082]",
                    { "@r1081_FILIAL": r1081_FILIAL, "@r1082_FILIAL": r1082_FILIAL }
                ),
            });
        }

        if (!isNaN(Number(values.CAP2_R200_C1_FILIAL[j]))) {
            var r22001_FILIAL = Number(values.CAP2_R200_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R200_C2_FILIAL[j]))) {
            var r22002_FILIAL = Number(values.CAP2_R200_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R201_C1_FILIAL[j]))) {
            var r22011_FILIAL = Number(values.CAP2_R201_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R201_C2_FILIAL[j]))) {
            var r22012_FILIAL = Number(values.CAP2_R201_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R202_C1_FILIAL[j]))) {
            var r22021_FILIAL = Number(values.CAP2_R202_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R202_C2_FILIAL[j]))) {
            var r22022_FILIAL = Number(values.CAP2_R202_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R203_C1_FILIAL[j]))) {
            var r22031_FILIAL = Number(values.CAP2_R203_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R203_C2_FILIAL[j]))) {
            var r22032_FILIAL = Number(values.CAP2_R203_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R300_C1_FILIAL[j]))) {
            var r23001_FILIAL = Number(values.CAP2_R300_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R300_C2_FILIAL[j]))) {
            var r23002_FILIAL = Number(values.CAP2_R300_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R301_C1_FILIAL[j]))) {
            var r23011_FILIAL = Number(values.CAP2_R301_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R301_C2_FILIAL[j]))) {
            var r23012_FILIAL = Number(values.CAP2_R301_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R302_C1_FILIAL[j]))) {
            var r23021_FILIAL = Number(values.CAP2_R302_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R302_C2_FILIAL[j]))) {
            var r23022_FILIAL = Number(values.CAP2_R302_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R303_C1_FILIAL[j]))) {
            var r23031_FILIAL = Number(values.CAP2_R303_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R303_C2_FILIAL[j]))) {
            var r23032_FILIAL = Number(values.CAP2_R303_C2_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R999_C1_FILIAL[j]))) {
            var r29991_FILIAL = Number(values.CAP2_R999_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP2_R999_C2_FILIAL[j]))) {
            var r29992_FILIAL = Number(values.CAP2_R999_C2_FILIAL[j]);
        }

        var SUM2_60_01_1_FILIAL = r22011_FILIAL + r22021_FILIAL + r22031_FILIAL;
        if (r22001_FILIAL != SUM2_60_01_1_FILIAL && SUM2_60_01_1_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP2_R200_C1_FILIAL",
                index: j,
                weight: 19,
                msg: Drupal.t(
                    "Cod eroare: 60-001.1 [@r22001_FILIAL] - (Rînd.200) = (Rînd.201) + (Rînd.202) + (Rînd.203) (Col.*) - [@SUM2_60_001_1_FILIAL]",
                    {
                        "@r22001_FILIAL": r22001_FILIAL,
                        "@SUM2_60_001_1_FILIAL": SUM2_60_01_1_FILIAL,
                    }
                ),
            });
        }
        var SUM2_60_01_2_FILIAL = r22012_FILIAL + r22022_FILIAL + r22032_FILIAL;
        if (r22002_FILIAL != SUM2_60_01_2_FILIAL && SUM2_60_01_2_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP2_R200_C2_FILIAL",
                index: j,
                weight: 20,
                msg: Drupal.t(
                    "Cod eroare: 60-001.2 [@r22002_FILIAL] - (Rînd.200) = (Rînd.201) + (Rînd.202) + (Rînd.203) (Col.*) - [@SUM2_60_001_2_FILIAL]",
                    {
                        "@r22002_FILIAL": r22002_FILIAL,
                        "@SUM2_60_001_2_FILIAL": SUM2_60_01_2_FILIAL,
                    }
                ),
            });
        }
        var SUM2_60_02_1_FILIAL = r23011_FILIAL + r23021_FILIAL + r23031_FILIAL;
        if (r23001_FILIAL != SUM2_60_02_1_FILIAL && SUM2_60_02_1_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP2_R300_C1_FILIAL",
                index: j,
                weight: 21,
                msg: Drupal.t(
                    "Cod eroare: 60-002.1 [@r23001_FILIAL] - (Rînd.300) = (Rînd.301) + (Rînd.302) + (Rînd.303) (Col.*) - [@SUM2_60_002_1_FILIAL]",
                    {
                        "@r23001_FILIAL": r23001_FILIAL,
                        "@SUM2_60_002_1_FILIAL": SUM2_60_02_1_FILIAL,
                    }
                ),
            });
        }
        var SUM2_60_02_2_FILIAL = r23012_FILIAL + r23022_FILIAL + r23032_FILIAL;
        if (r23002_FILIAL != SUM2_60_02_2_FILIAL && SUM2_60_02_2_FILIAL != 0) {
            webform.errors.push({
                fieldName: "CAP2_R300_C2_FILIAL",
                index: j,
                weight: 22,
                msg: Drupal.t(
                    "Cod eroare: 60-002.2 [@r23002_FILIAL] - (Rînd.300) = (Rînd.301) + (Rînd.302) + (Rînd.303) (Col.*) - [@SUM2_60_002_2_FILIAL]",
                    {
                        "@r23002_FILIAL": r23002_FILIAL,
                        "@SUM2_60_002_2_FILIAL": SUM2_60_02_2_FILIAL,
                    }
                ),
            });
        }
    }
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
;
