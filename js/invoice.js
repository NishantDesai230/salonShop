window.addEventListener('load', () => {
    const params=(new URL(document.location)).searchParams;
    const name=params.get('name');
    const date=params.get('birthday');
    const phone=params.get('phone');
    const email=params.get('email');
    const timing=params.get('Timings');

    var today=new Date();
    var cdate=today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear();


    document.getElementById('name').innerHTML=name;
    document.getElementById('phone').innerHTML=phone;
    document.getElementById('email').innerHTML=email;
    document.getElementById('date').innerHTML=date;
    document.getElementById('time').innerHTML=timing;
    document.getElementById('cdate').innerHTML=cdate;
    document.getElementById("invoice-id").innerHTML=Math.floor(Math.random() * 101);

    var cutting=document.getElementById('result12').innerHTML;
    var color=document.getElementById('result22').innerHTML;
    var highlight=document.getElementById('result32').innerHTML;

    var hair_cutting=parseInt(cutting);
    var hair_color=parseInt(color);
    var hair_highlight=parseInt(highlight);

    /* agad na page parthi levanu */
    // var qt1=parseInt(document.getElementById('result13').innerHTML);
    // var qt2=parseInt(document.getElementById('result23').innerHTML);
    // var qt3=parseInt(document.getElementById('result33').innerHTML);

    var sub_total=hair_cutting+hair_color+hair_highlight;
    var tax=(sub_total*18)/100;


    document.getElementById('sub').innerHTML=sub_total+"₹";
    document.getElementById('tax').innerHTML=tax+"₹";
    document.getElementById('gtotal').innerHTML=(sub_total+tax)+"₹";



    function generatePDF() {
        // Choose the element that our invoice is rendered in.
        const element = document.getElementById("printInvoice");
        // Choose the element and save the PDF for our user.
        html2pdf()
          .from(element)
          .save();
      }


})