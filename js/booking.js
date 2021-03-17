var count1 = 1;
var count2 = 1;
var count3 = 1;

$(document).ready(function()
{
    $("#color-minus").click(function()
    {
      count3 = 0;
    });
});

$(document).ready(function()
{
    $("#color-plus").click(function()
    {
      count3 = 1;
    });
});

console.log(count3);

$(document).ready(function()
{
    $("#highlight-minus").click(function()
    {
      count2 = 0;
    });
});

$(document).ready(function()
{
    $("#highlight-plus").click(function()
    {
      count2 = 1;
    });
});

$(document).ready(function()
{
    $("#haircut-minus").click(function()
    {
      count1 = 0;
    });
});

$(document).ready(function()
{
    $("#haircut-plus").click(function()
    {
      count1 = 1;
    });
});