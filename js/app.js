$(document).ready(function()
{
    var count = 0;

    $(".navbar-toggler-icon").click(function()
    {
      const navBtn = document.querySelector('.navbar-toggler-icon');
      const navClose = document.querySelector('.btn-close');
      console.log("Entered");
      navBtn.style.display = 'none';
      navClose.style.display = 'block';

    });
    $(".btn-close").click(function()
    {
      const navBtn = document.querySelector('.navbar-toggler-icon');
      const navClose = document.querySelector('.btn-close');
      navClose.style.display = 'none';
      navBtn.style.display = 'block';
    });
});