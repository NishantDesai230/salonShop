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

    var cutting;
    var color;
    var highlight;

    var hair_cutting=parseInt(cutting);
    var hair_color=parseInt(color);
    var hair_highlight=parseInt(highlight);

    var sub_total=hair_cutting+hair_color+hair_highlight;
    var tax=(sub_total*18)/100;


    document.getElementById('sub').innerHTML=sub_total+"₹";
    document.getElementById('tax').innerHTML=tax+"₹";
    document.getElementById('gtotal').innerHTML=(sub_total+tax)+"₹";
    
});

window.onload = function(){
    const a = document.getElementById("download");
        a.addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'invoice.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf(invoice,opt).save();
        })
}

