$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    $("#warning_signs-responses").show();
    $("input:checkbox[name=warning_signs]:checked").each(function(){
      var warning_signsMode = $(this).val();
      $('#warning_signs-responses').append(warning_signsMode + "<br>");
    });
    $("#symptoms-responses").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptomsMode = $(this).val();
      $('#symptoms-responses').append(symptomsMode + "<br>");
    });
    $("#stressManagement-responses").show();
    $("input:checkbox[name=stressManagement]:checked").each(function(){
      var stressManagementMode = $(this).val();
      $('#stressManagement-responses').append(stressManagementMode + "<br>");
    });

    $('#stress_survey').hide();
  });
});
