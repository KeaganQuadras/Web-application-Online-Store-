function checkForm(divID){
  var count = 0;
  var e = document.getElementById("lens");
var selectedValue = e.options[e.selectedIndex].value;
var ef = document.getElementById("lens1");
var selectedValue1 = ef.options[ef.selectedIndex].value;
var stateVal = document.getElementById("fstate");
var selectedstateVal = stateVal.options[stateVal.selectedIndex].value;
document.getElementById("AcuveQuantity").textContent = parseInt(selectedValue);
var acuTotal = document.getElementById("Total").textContent =(parseInt(selectedValue) * 7.99);
 document.getElementById("BiotrueQuantity").textContent = parseInt(selectedValue1);
var bioTotal =  document.getElementById("BiotrueTotal").textContent = parseInt(selectedValue1) * 6.99;
console.log(selectedstateVal);
var totalWithouttax = acuTotal + bioTotal;
      console.log(totalWithouttax);
      var tax ;
      if(selectedstateVal == "ON"){
        tax =  totalWithouttax * 0.13;
      }
      else if(selectedstateVal == "BC"){
        tax =  totalWithouttax * 0.12;
      }
      else if(selectedstateVal == "QC"){
        tax =  totalWithouttax * 0.1497;
      }
      else if(selectedstateVal == "NS"){
        tax =  totalWithouttax * 0.15;
      }
      else if(selectedstateVal == "MB"){
        tax =  totalWithouttax * 0.12;
      }
      else{
        tax =  totalWithouttax * 0.15;
      }
      console.log("tax is " +tax);
      document.getElementById("provinceTax").textContent = tax;
      var cost = totalWithouttax + tax ; 
  var email_Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var pwd = document.getElementById("fpassword").value
  var confirmPwd = document.getElementById("fconfirmpassword").value
  var resultEmailId = email_Regex.test(document.getElementById("femail").value);
    if(document.getElementById("fname").value == ""){
      document.getElementById("input-FirstName").textContent = "Please enter your FirstName";
      document.getElementById('fname').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-FirstName").textContent = "";
      document.getElementById('fname').style.borderColor = '#ccc';
    }
    if(document.getElementById("lname").value == ""){
      document.getElementById("input-LastName").textContent = "Please enter your LastName";
      document.getElementById('lname').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-LastName").textContent = "";
      document.getElementById('lname').style.borderColor = '#ccc';
    }
    if(document.getElementById("femail").value == ""){
      document.getElementById("input-Email").textContent = "Please enter your Email";
      document.getElementById('femail').style.borderColor = 'red';
      count+= 1;
    }
    else if (!resultEmailId) {
     document.getElementById("input-Email").textContent = "Invalid Email Id.";
     document.getElementById('femail').style.borderColor = 'red';
     count = count + 1;
    }
    else{
      document.getElementById("input-Email").textContent = "";
      document.getElementById('femail').style.borderColor = '#ccc';
    }
    if(document.getElementById("lphone").value == ""){
      document.getElementById("input-phone").textContent = "Please enter your Phone";
      document.getElementById('lphone').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-phone").textContent = "";
      document.getElementById('lphone').style.borderColor = '#ccc';
      
    }
    if(document.getElementById("fpassword").value == ""){
      document.getElementById("input-password").textContent = "Please enter your Password";
      document.getElementById('fpassword').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-password").textContent = "";
      document.getElementById('fpassword').style.borderColor = '#ccc';
    }
    if(document.getElementById("fconfirmpassword").value == ""){
      document.getElementById("input-fconfirmpassword").textContent = "Please enter your Confirm Password";
      document.getElementById('fconfirmpassword').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-fconfirmpassword").textContent = "";
      document.getElementById('fconfirmpassword').style.borderColor = '#ccc';
    }
    if(pwd !="" && confirmPwd != "" && pwd != confirmPwd){
      document.getElementById("input-password").textContent = " Password and Confirm-Password doesnt match";
      document.getElementById("input-fconfirmpassword").textContent = "Password and Confirm-Password doesnt match";
      document.getElementById('fconfirmpassword').style.borderColor = 'red';
      document.getElementById('fpassword').style.borderColor = 'red';
      count+= 1;
    }
    if(document.getElementById("faddress").value == ""){
      document.getElementById("input-faddress").textContent = "Please enter your Address";
      document.getElementById('faddress').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-faddress").textContent = "";
      document.getElementById('faddress').style.borderColor = '#ccc';
    }
    if(document.getElementById("lcity").value == ""){
      document.getElementById("input-lcity").textContent = "Please enter your City";
      document.getElementById('lcity').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-lcity").textContent = "";
      document.getElementById('lcity').style.borderColor = '#ccc';
    }
    if(document.getElementById("fstate").value == ""){
      document.getElementById("input-fstate").textContent = "Please enter your State";
      document.getElementById('fstate').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-fstate").textContent = "";
      document.getElementById('fstate').style.borderColor = '#ccc';
    }
    if(document.getElementById("lzip").value == ""){
      document.getElementById("input-lzip").textContent = "Please enter your Zip";
      document.getElementById('lzip').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-lzip").textContent = "";
      document.getElementById('lzip').style.borderColor = '#ccc';
    }
    if(document.getElementById("fcardname").value == ""){
      document.getElementById("input-fcardname").textContent = "Please enter CardName";
      document.getElementById('fcardname').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-fcardname").textContent = "";
      document.getElementById('fcardname').style.borderColor = '#ccc';
    }
    if(document.getElementById("fcardnumber").value == ""){
      document.getElementById("input-fcardnumber").textContent = "Please enter CardNumber";
      document.getElementById('fcardnumber').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-fcardnumber").textContent = "";
      document.getElementById('femail').style.borderColor = '#ccc';
    }
    if(document.getElementById("fexpiry").value == ""){
      document.getElementById("input-fexpiry").textContent = "Please enter Expiry";
      document.getElementById('fexpiry').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-fexpiry").textContent = "";
      document.getElementById('fexpiry').style.borderColor = '#ccc';
    }
    if(document.getElementById("lcvv").value == ""){
      document.getElementById("input-lcvv").textContent = "Please enter your Cvv";
      document.getElementById('lcvv').style.borderColor = 'red';
      count+= 1;
    }
    else{
      document.getElementById("input-lcvv").textContent = "";
      document.getElementById('lcvv').style.borderColor = '#ccc';
    }
    if(cost < 10){
      document.getElementById("input-amountLess").textContent = "Minimum purchase should be of $10.";
      count+= 1;
    } 
    if(count >0){
      return false;
    }
    else{
               
       document.getElementById("totalPrice").textContent = cost;
      document.getElementById("totalCost").textContent = (parseFloat(selectedValue) * 7.99) + ( parseFloat(selectedValue1) * 6.99);
      document.getElementById("name").textContent = "Name : " + document.getElementById("fname").value + " " + document.getElementById("lname").value;
      document.getElementById("email").textContent = "Email : " + document.getElementById("femail").value ;
      document.getElementById("addressDet").textContent = "Address : " + document.getElementById("faddress").value + "," + document.getElementById("lcity").value  + "," + document.getElementById("fstate").value  ;

      var divElements = document.getElementById(divID).innerHTML;
      //Get the HTML of whole page
      var oldPage = document.body.innerHTML;
      //Reset the page's HTML with div's HTML only
      document.body.innerHTML = 
        "<html><head><title></title></head><body>" + 
        divElements + "</body>";
      //Print Page
      window.print();
      //Restore orignal HTML
      document.body.innerHTML = oldPage; 
    }
  }

function buyProduct(){
  if(document.getElementById("details").style.display = "none"){
  document.getElementById("details").style.display = "block"
  }
}


function cc_format(value) {
  console.log({value})
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  var matches = v.match(/\d{4,16}/g);
  var match = matches && matches[0] || ''
  var parts = []
  for (i=0, len=match.length; i<len; i+=4) {
    parts.push(match.substring(i, i+4))
  }
  if (parts.length) {
    console.log(parts.join('-'))
    return parts.join('-')
  } else {
    console.log("return")
    return value
  }
}
onload = function(){
    document.getElementById("fcardnumber").oninput = function(){
      this.value = cc_format(this.value);
    }
}
function formatString(e) {
  var inputChar = String.fromCharCode(event.keyCode);
  var code = event.keyCode;
  var allowedKeys = [8];
  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  event.target.value = event.target.value.replace(
    /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
  ).replace(
    /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
  ).replace(
    /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
  ).replace(
    /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
  ).replace(
    /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
  ).replace(
    /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
  ).replace(
    /\/\//g, '/' // Prevent entering more than 1 `/`
  );
}

