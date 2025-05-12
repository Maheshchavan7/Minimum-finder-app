function find(){
    event.preventDefault();
    let a = document.getElementById("num1");
    let b = document.getElementById("num2");
    let msg = document.getElementById("msg");

            if(num1.value==="")
            {
                alert(" Please enter first number ");
                msg.innerHTML="";
                num1.focus();
                return;

            }
            if(num2.value==="")
            {
                alert(" Please enter second number ");
                msg.innerHTML="";
                num2.focus();
                return;
            }

    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);

    let result = Math.min(n1,n2);
    msg.innerHTML  = "The minimum value of number is " + result;



}