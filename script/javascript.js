var page = 0;
var pageNames = ["page0", "page1", "page2", "page3", "page4"]
var radioButtonError = " Please select an option";

//back() function gets called when 'back' is clicked
function back(){
    if(page > 0){
        page--;
    }
    displayPage();
}

//next() function gets called when 'next' is clicked
function next(){
    var input = document.getElementById(pageNames[page]).getElementsByTagName('input');
    for (var i = 0; i < input.length; i++) {
        //Check all textboxes have text in them before you are allowed onto the next page
        if (input[i].type === "text") {
            if(input[i].value == ""){
                input[i].focus();
                input[i].blur();
                return;
            }
        }
        //Check an option is selected in radio buttons
        else if(input[i].type === "radio"){
            var selected = document.querySelector('input[name="bloodPressure_treatment"]:checked');
            if (!selected) {
                displayErrorRadio(input[i].parentNode, radioButtonError);
                return;
            }
            else if(selected){
                clearErrorRadio(input[i].parentNode);
            } 
        }
    }

    //Increment then display, because page0 is displayed upon loading the website
    if(page < 4){
        page++;
    }
    displayPage();
}

//hideContent hides every div on the page
function hideContent(){
    var divs = content.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++){
        divs[i].style.display = "none";
    }
}

//showDiv shows the div passed it and hides all other content
function showDiv(divId){
    hideContent(); 
    var divToShow = document.getElementById(divId);
    divToShow.style.display = 'block';
    //Show the next and back buttons
    var buttons = document.getElementById("buttons");
    buttons.style.display = 'block';
    // Show child divs of the divToShow
    var childDivs = divToShow.querySelectorAll('div');
    childDivs.forEach(function(childDiv) {
        childDiv.style.display = 'block';
        if(childDiv.className == "textErrorContainer"){
            childDiv.style.display = "flex";
        }
    });
}

//Display the current page
function displayPage(){
    showDiv(pageNames[page]);
    calculateRiskScore();
}

//Calculates the risk score in percentage, display it to user
function calculateRiskScore(){
    var riskScore = 0;
    var point = 0;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var totalCholesterol = document.getElementById("tcholesterol").value;
    var hdlCholesterol = document.getElementById("hcholesterol").value;
    var smoker = document.getElementById("smoker").value;
    var bloodPressure = document.getElementById("blood-pressure").value;
    var temp_bp = document.getElementsByName("bloodPressure_treatment");
    var bp_treated;
    //Get the value of selected radio button. treated/untreated
    for (var k = 0; k < temp_bp.length; k++) {
        if (temp_bp[k].checked){
            bp_treated = temp_bp[k].value;
        }
    }

    if(gender == "male"){
        //Add/minus points using age
        if(age == "20-34"){
            //Age
            point = point - 9;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 4;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 7;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 9;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 11;
            }

            if(smoker == "yes"){
                point = point + 8;
            }
        }
        else if(age == "35-39"){
            //Age
            point = point - 4;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 4;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 7;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 9;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 11;
            }

            if(smoker == "yes"){
                point = point + 8;
            }
        }
        else if(age == "40-44"){
            //0 points for age

            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 3;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 5;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 6;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 8;
            }

            if(smoker == "yes"){
                point = point + 5;
            }
        }
        else if(age == "45-49"){
            //Age
            point = point + 3;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 3;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 5;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 6;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 8;
            }

            if(smoker == "yes"){
                point = point + 5;
            }
        }
        else if(age == "50-54"){
            //Age
            point = point + 6;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 2;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 3;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 4;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 5;
            }

            if(smoker == "yes"){
                point = point + 3;
            }
        }
        else if(age == "55-59"){
            //Age
            point = point + 8;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 2;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 3;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 4;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 5;
            }

            if(smoker == "yes"){
                point = point + 3;
            }
        }
        else if(age == "60-64"){
            //Age
            point = point + 10;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 1;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 1;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 2;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 3;
            }

            if(smoker == "yes"){
                point = point + 1;
            }
        }
        else if(age == "65-69"){
            //Age
            point = point + 11;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 1;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 1;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 2;
            }
            //280+
            else if(totalCholesterol >=
                 280){
                point = point + 3;
            }

            if(smoker == "yes"){
                point = point + 1;
            }
        }
        else if(age == "70-74"){
            //Age
            point = point + 12;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 0;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 0;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 1;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 1;
            }

            if(smoker == "yes"){
                point = point + 1;
            }
        }
        else if(age == "75-79"){
            //Age
            point = point + 13;
            //Total cholesterol
            //160 - 199
            if(totalCholesterol >= 160 && totalCholesterol < 200){
                point = point + 0;
            }
            //200 - 239
            else if(totalCholesterol >= 200 && totalCholesterol < 240){
                point = point + 0;
            }
            //240 - 279
            else if(totalCholesterol >= 240 && totalCholesterol < 280){
                point = point + 1;
            }
            //280+
            else if(totalCholesterol >= 280){
                point = point + 1;
            }

            if(smoker == "yes"){
                point = point + 1;
            }
        }

        //HDL Cholesterol
        //60+
        if(hdlCholesterol >= 60){
            point = point - 1;
        }
        //50 - 59
        else if(hdlCholesterol >= 50 && hdlCholesterol < 60){
            //0 points
        }
        //40 - 49
        else if(hdlCholesterol >= 40 && hdlCholesterol < 50){
            point = point + 1;
        }
        //40-
        else if(hdlCholesterol < 40){
            point = point + 2;
        }

        //Systolic blood pressure (Untreated)
        if(bp_treated == "untreated"){
            //120 - 129
            if(bloodPressure >= 120 && bloodPressure < 130){
                //0 points
            }
            //130 - 139
            else if(bloodPressure >= 130 && bloodPressure < 140){
                point = point + 1;
            }
            //140 - 159
            else if(bloodPressure >= 140 && bloodPressure < 160){
                point = point + 1;
            }
            //160+
            else if(bloodPressure >= 160){
                point = point + 2;
            }
        }
        //Treated
        else if(bp_treated == "treated"){
            //120 - 129
            if(bloodPressure >= 120 && bloodPressure < 130){
                point = point + 1;
            }
            //130 - 139
            else if(bloodPressure >= 130 && bloodPressure < 140){
                point = point + 2;
            }
            //140 - 159
            else if(bloodPressure >= 140 && bloodPressure < 160){
                point = point + 2;
            }
            //160+
            else if(bloodPressure >= 160){
                point = point + 3;
            }
        }
        

        //Risk score in percentage
        if(point <= 0){
            riskScore = "<1";
        }
        //1 - 4
        else if(point >= 1 && point < 5){
            riskScore = 1;
        }
        //5 - 6
        else if(point >= 5 && point < 7){
            riskScore = 2;
        }
        //7
        else if(point > 6 && point < 8){
            riskScore = 3;
        }
        //8
        else if(point > 7 && point < 9){
            riskScore = 4;
        }
        //9
        else if(point > 8 && point < 10){
            riskScore = 5;
        }
        //10
        else if(point > 9 && point < 11){
            riskScore = 6;
        }
        //11
        else if(point > 10 && point < 12){
            riskScore = 8;
        }
        //12
        else if(point > 11 && point < 13){
            riskScore = 10;
        }
        //13
        else if(point > 12 && point < 14){
            riskScore = 12;
        }
        //14
        else if(point > 13 && point < 15){
            riskScore = 16;
        }
        //15
        else if(point > 14 && point < 16){
            riskScore = 20;
        }
        //16
        else if(point > 15 && point < 17){
            riskScore = 25;
        }
        //17+
        else if(point > 17){
            riskScore = "30+";
        }
    }

    if(gender == "female"){
        //Calculate the points added for age
        var ageGroup = ["20-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79"];
        var agePoint = [-7, -3, 0, 3, 6, 8, 10, 12, 14, 16];

        var i;
        for(i = 0; i < ageGroup.length; i++){
            if(ageGroup[i] == age){
                break;
            }
        }
        point = point + agePoint[i];


        //Calculate the points added for total cholesterol
        var ageGroup2_index;
        var ageGroup2 = ["20-39", "40-49", "50-59", "60-69", "70-79"];
        if(age == "20-34" || age == "35-39"){
            ageGroup2_index = 0;
        }
        else if(age == "40-44" || age == "45-49"){
            ageGroup2_index = 1;
        }
        else if(age == "50-54" || age == "55-59"){
            ageGroup2_index = 2;
        }
        else if(age == "60-64" || age == "65-69"){
            ageGroup2_index = 3;
        }
        else if(age == "70-74" || age == "75-79"){
            ageGroup2_index = 4;
        }
        
        var array_tcholesterol_number = [0, 160, 200, 240, 280];
        var arrayOfArrays_tcholesterol = [
            [0, 4, 8, 11, 13],
            [0, 3, 6, 8, 10],
            [0, 2, 4, 5, 7],
            [0, 1, 2, 3, 4],
            [0, 1, 1, 2, 2]
        ];
        //Search for which array is wanted using the ageGroup index
        var tcholesterol_wantedArray = arrayOfArrays_tcholesterol[ageGroup2_index];
        //For the array just found, find the position of the number of points to add on
        var wantedIndex = 0;
        if(totalCholesterol < 280){
            for(wantedIndex = 0; wantedIndex < array_tcholesterol_number.length; wantedIndex++){
                if(totalCholesterol >= array_tcholesterol_number[wantedIndex] && totalCholesterol < array_tcholesterol_number[wantedIndex + 1]){
                    break;
                }
            }
        }
        else if(totalCholesterol >= 280){
            wantedIndex = tcholesterol_wantedArray.length - 1;
        }
        //Using the array for the correct age group, indexed by the position just found, use that number to add the points on
        point = point + tcholesterol_wantedArray[wantedIndex];

        //Calculate points added for HDL cholesterol
        var array_hdlCholesterol_number = [0, 40, 50, 60];
        var array_hdlCholesterol_point = [2, 1, 0, -1];
        var hdlIndex = 0;
        //If hdl Cholesterol is less than the largest number used for calculation (60)
        if(hdlCholesterol < array_hdlCholesterol_number[array_hdlCholesterol_number.length - 1]){
            //Find the index position of the array for how many points to add on
            for(hdlIndex = 0; hdlIndex < array_hdlCholesterol_number.length; hdlIndex++){
                if(hdlCholesterol >= array_hdlCholesterol_number[hdlIndex] && hdlCholesterol < array_hdlCholesterol_number[hdlIndex + 1]){
                    break;
                }
            }
        }
        //If hdl Cholesterol is more than the largest number used for calculation (60), index is last index
        else if(hdlCholesterol >= array_hdlCholesterol_number[array_hdlCholesterol_number.length - 1]){
            hdlIndex = array_hdlCholesterol_number.length - 1;
        }

        //Add the points on for hdl Cholesterol
        point = point + array_hdlCholesterol_point[hdlIndex];

        if(smoker == "yes"){
            //Calculate points added for smokers
            var smoker_points = [9, 7, 4, 2, 1];
            point = point + smoker_points[ageGroup2_index];
        }

        //Calculate points added for blood pressure (Untreated)
        var array_bloodPressure_number = [0, 120, 130, 140, 160];
        var array_bloodPressure_point = [0, 1, 2, 3, 4];
        var bpIndex = 0;

        //Different set of points for treated
        if(bp_treated == "treated"){
            array_bloodPressure_point = [0, 3, 4, 5, 6];
        }
        
        //If blood pressure is less than the highest value we need (160)
        if(bloodPressure < array_bloodPressure_number[array_bloodPressure_number.length - 1]){
            //Find the index we need
            for(bpIndex = 0; bpIndex < array_bloodPressure_number.length; bpIndex++){
                if(bloodPressure >= array_bloodPressure_number[bpIndex] && bloodPressure < array_bloodPressure_number[bpIndex + 1]){
                    break;
                }
            }
        }
        //If blood pressure is more than the highest value we need (160), index is last index
        else if(bloodPressure >= array_bloodPressure_number[array_bloodPressure_number.length - 1]){
            bpIndex = array_bloodPressure_number.length - 1;
        }
        
        //array_bloodPressure_point at position index is the value we add to point
        point = point + array_bloodPressure_point[bpIndex];

        //Calculate risk score
        if(point < 9){
            riskScore = "<1";
        }
        else if(point >= 9 && point <= 12){
            riskScore = 1;
        }
        else if(point >= 13 && point <= 14){
            riskScore = 2;
        }
        else if(point == 15){
            riskScore = 3;
        }
        else if(point == 16){
            riskScore = 4;
        }
        else if(point == 17){
            riskScore = 5;
        }
        else if(point == 18){
            riskScore = 6;
        }
        else if(point == 19){
            riskScore = 8;
        }
        else if(point == 20){
            riskScore = 11;
        }
        else if(point == 21){
            riskScore = 14;
        }
        else if(point == 22){
            riskScore = 17;
        }
        else if(point == 23){
            riskScore = 22;
        }
        else if(point == 24){
            riskScore = 27;
        }
        else if(point >= 25){
            riskScore = ">30";
        }
    }

    //Display risk score
    var paragraph = document.getElementById("risk-score");
    paragraph.textContent = riskScore + "%";
}

//Only number keys are allowed
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

//Check if total cholesterol textbox has value in it. If not, display error
function validateTCholesterol(){
    var tcholesterolInput = document.getElementById("tcholesterol");
    var msg = " Total cholesterol cannot be blank";

    if(tcholesterolInput.value == ""){
        displayError(tcholesterolInput.parentNode, msg);
    }
    else {
        clearError(tcholesterolInput.parentNode);
    }
}

//Check if hdl cholesterol textbox has value in it. If not, display error
function validateHCholesterol(){
    var hcholesterolInput = document.getElementById("hcholesterol");
    var msg = " HDL cholesterol cannot be blank";

    if(hcholesterolInput.value == ""){
        displayError(hcholesterolInput.parentNode, msg);
    }
    else {
        clearError(hcholesterolInput.parentNode);
    }
}

//Check if blood pressure textbox has value in it. If not, display error
function validateBloodPressure(){
    var bloodPressureInput = document.getElementById("blood-pressure");
    var msg = " Blood pressure cannot be blank";

    if(bloodPressureInput.value == ""){
        displayError(bloodPressureInput.parentNode, msg);
    }
    else {
        clearError(bloodPressureInput.parentNode);
    }
}

//Display error message
function displayError(element, msg){
    if(element.nextElementSibling.childNodes[2].tagName=="SPAN" && element.nextElementSibling.childNodes[2].textContent.trim==msg.trim)
        return;
    var msgElement=document.createElement("span");
    msgElement.textContent=msg;
    msgElement.style.color="red";
    msgElement.style.flex = 1;
    element.nextElementSibling.insertBefore(msgElement, element.nextElementSibling.childNodes[2]);
}

//Clear error message
function clearError(element) {
    if (element.nextElementSibling.childNodes[2].tagName == "SPAN") {
        element.nextElementSibling.removeChild(element.nextElementSibling.childNodes[2]);
    }
}

//Display error message for radio buttons
function displayErrorRadio(element, msg){
    if(element.parentNode.nextSibling.tagName=="DIV" && element.nextSibling.textContent.trim==msg.trim)
        return;
    var msgElement=document.createElement("div");
    msgElement.style.textAlign = "center";
    msgElement.textContent=msg;
    msgElement.style.color="red";
    element.parentNode.parentNode.insertBefore(msgElement, element.parentNode.nextSibling);
}

//Clear error message for radio buttons
function clearErrorRadio(element) {
    //Search for a span node if it exists
    var errorSpan = element.parentNode.parentNode.querySelector("div");
    //If it (the error message) exists, remove it
    if (errorSpan && errorSpan.tagName === "DIV" && errorSpan.nextSibling.textContent == radioButtonError) {
        element.parentNode.parentNode.removeChild(errorSpan.nextSibling); 
    }
}