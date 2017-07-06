// //Business logic
//
// var a = parseInt($("input:checkbox[name=warning_signs]:checked").val());
// var b = parseInt($("input:checkbox[name=symptoms]:checked").val());
// var c = parseInt($("input:checkbox[name=stressManagement]:checked").val());
//
// var result = a + b - c;





//User Interface logic

$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();

    $("#warning_signs-responses").show();
    var answers = [];

    $("input:checkbox[name=warning_signs]:checked").each(function(){
      var answer = parseInt($(this).val());
      answers.push(answer);
    });

    var totalScore = 0;
    for (i = 0; i < answers.length; i++) {
      totalScore += answers[i];
    };

    if (totalScore <= 6) {
      return true;
    };

    // $("#symptoms-responses").show();
    // $("input:checkbox[name=symptoms]:checked").each(function(){
    //   var symptomsMode = $(this).val();
    //   $('#symptoms-responses').append(symptomsMode + "<br>");
    // });
    // $("#stressManagement-responses").show();
    // $("input:checkbox[name=stressManagement]:checked").each(function(){
    //   var stressManagementMode = $(this).val();
    //   $('#stressManagement-responses').append(stressManagementMode + "<br>");
    // });
    console.log(totalScore);
    $('#stress_survey').hide();
  });
});
