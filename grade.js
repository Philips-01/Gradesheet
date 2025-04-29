function calculate_grade(value, grade_input){
    var graded = document.getElementById(grade_input);
    if (value < 0){
        alert('Score cannot be less than 0, please input a positive score number.')
        graded.value = "NaN"
        return;
    }


    if (value > 100){
        alert('Score cannot be more than 100, please input an appropiate score number')
        graded.value = "NaN"
        return;
    }

    if (value == ""){
        graded.value = ""
        return;
    }

    // if (value < 40){
    //     graded.value = "F"
    // }else if (value >=40 && value < 45){
    //     graded.value = "E"
    // }else if (value >=45 && value < 50){
    //     graded.value = "D"
    // }else if (value >=50 && value < 60){
    //     graded.value = "C"
    // }else if (value >=60 && value < 70){
    //     graded.value = "B"
    // }else{
    //     graded.value = "A"
    // }

    graded.value = calc_grade(value);
}

function calc_grade(value){
    if (value < 40){
        return "F"
    }else if (value >=40 && value < 45){
        return "E"
    }else if (value >=45 && value < 50){
        return "D"
    }else if (value >=50 && value < 60){
        return "C"
    }else if (value >=60 && value < 70){
        return "B"
    }else{
        return "A"
    }
}


function accumulate_result(){
    var score_ids = ['math_score', 'eng_score', 'chem_score', 'phy_score', 'bio_score', 'agric_score', 'econs_score', 'civic_score'],
    total_score_display = document.getElementById('total_score'),
    average_score_display = document.getElementById('average_score'),
    average_grade_display = document.getElementById('average_grade'),
    remark_text_display = document.getElementById('remark_text'),
    remark_img = document.getElementById('remark_img'),
    total_scores = 0;

    //total score loop
    for(i=0; i < score_ids.length; i++){
        var new_score_ids = document.getElementById(score_ids[i]).value;
        total_scores = Number(total_scores) + Number(new_score_ids)
    }



    //average
    var average_score = total_scores / score_ids.length

    var average_grade = calc_grade(average_score)

    var remark_text = average_score > 50 ? 'You did well, we are proud of you' : 'You need to work better';

    var remark_imgs = average_score > 50 ? 'like_img.png' : 'cry_img.png';

    //perform functionality

    total_score_display.innerHTML = total_scores;

    average_score_display.innerHTML = average_score;

    average_grade_display.innerHTML = average_grade;

    remark_text_display.innerHTML = remark_text;

    remark_img.src = remark_imgs;
    remark_img.style.display = 'block';

    //more conditions
    if(total_scores > 800){
        alert('Invalid Score Inputs')
        total_score_display.innerHTML = '';

        average_score_display.innerHTML = '';
    
        average_grade_display.innerHTML = '';
    
        remark_text_display.innerHTML = '';
    
        remark_img.src = '';
        remark_img.style.display = '';
    }
}