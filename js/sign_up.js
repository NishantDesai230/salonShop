// function custValidate()
// {
//     console.log("Hello");
//     var selectedOpt = document.getElementById('3').selectedIndex.value;
//     const a = document.querySelector('.key');

//     if(selectedOpt == "owner")
//     {
//         // console.log("Owner");   
//     }

// }


$(document).ready(function()
{
    $("#3").change(function()
    {
      const a = document.querySelector('#k');
      a.style.display = "block";
      console.log(window.a);
    });
});

function validateKey()
{
    var pwd=document.form.key.value;

    if(pwd=="2021")
    {
        
    }
    else
    {
        alert("Invalid Key");
    }

}
