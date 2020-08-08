function showInvests(){
  document.getElementById('projects').style.display ='none';
  document.getElementById('investments').style.display = 'block';
  document.getElementById('hr_2').style.display = 'none';
  document.getElementById('hr_2_2').style.display = 'block';
  document.getElementById('hr_1').style.display = 'none';
  document.getElementById('hr_1_1').style.display = 'block';
}
function showProjects(){
  document.getElementById('investments').style.display = 'none';
  document.getElementById('projects').style.display = 'block';
  document.getElementById('hr_2').style.display = 'block';
  document.getElementById('hr_2_2').style.display = 'none';
  document.getElementById('hr_1').style.display = 'block';
  document.getElementById('hr_1_1').style.display = 'none';
}
$(document).ready(function(){
  $('.investments_link').click(function(){
    $('.projects_link').removeClass('pp_bold');
  });
  $('.projects_link').click(function(){
    $('.projects_link').addClass('pp_bold');
  });


  $('.investments_link').click(function(){
    $('.investments_link').removeClass('pp_reg');
  });
  $('.projects_link').click(function(){
    $('.investments_link').addClass('pp_reg');
  });
  $('.dropd0').focus(function () {
     $('.dropdown-menu0').show();
   });
   $('.dropd_1').focus(function () {
      $('.dropdown-menu1').show();
    });
   $('.dropd0').focusout(function () {
      $('.dropdown-menu0').hide();
    });
    $('.dropd_1').focusout(function () {
       $('.dropdown-menu1').hide();
     });
});
function showInvestsmbl(){
  document.getElementById('projects_mbl').style.display ='none';
  document.getElementById('investments_mbl').style.display = 'block';
  document.getElementById('hr_2_mbl').style.display = 'none';
  document.getElementById('hr_2_2_mbl').style.display = 'block';
  document.getElementById('hr_1_mbl').style.display = 'none';
  document.getElementById('hr_1_1_mbl').style.display = 'block';
}
function showProjectsmbl(){
  document.getElementById('investments_mbl').style.display = 'none';
  document.getElementById('projects_mbl').style.display = 'block';
  document.getElementById('hr_2_mbl').style.display = 'block';
  document.getElementById('hr_2_2_mbl').style.display = 'none';
  document.getElementById('hr_1_mbl').style.display = 'block';
  document.getElementById('hr_1_1_mbl').style.display = 'none';
}
