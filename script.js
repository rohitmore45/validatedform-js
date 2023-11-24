document.querySelector("#form1").addEventListener("submit", checkData);
// OR
// document.forms[0].addEventListener("submit", checkData);

function checkData(frm) {
    // checking name with regular expression with only alphabets
    let username = document.getElementById("username").value;
    const nameexpr = /^[a-zA-z ]*$/;
    if (nameexpr.test(username) == false || username == "") {
        frm.preventDefault(); //indicates browser to don't submit
        document.querySelector("#nameerror").innerHTML =
            "Please enter a valid name";
    } else {
        document.querySelector("#nameerror").innerHTML = "";
    }

    //checking phone number with regular expression with only 10 numbers
    let userphone = document.getElementById("userphone").value;
    let phoneexpre = /^[6789]\d{9}$/;
    if (phoneexpre.test(userphone) == false || userphone == "") {
        frm.preventDefault();
        document.querySelector("#phoneerror").innerHTML =
            "Please enter valid phone number";
    } else {
        document.querySelector("#phoneerror").innerHTML = "";
    }


    // checking pincode with regular expression with only 6 digits
    let userpincode = document.getElementById("userpincode").value;
    const pincodeexpr = /^\d{6}$/;
    if (pincodeexpr.test(userpincode) == false || userpincode == "") {
        frm.preventDefault();
        document.querySelector("#pincodeerror").innerHTML = "Enter Valid Pincode"
    }
    else {
        document.querySelector("#pincodeerror").innerHTML = "";
    }

    //checking password with regular expression with required pattern
    let userpwd = document.getElementById("userpwd").value;
    const pwdexpr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_$@#]).{8,25}$/;
    if (pwdexpr.test(userpwd) == false || userpwd == "") {
        frm.preventDefault();
        document.querySelector("#pwderror").innerHTML = "Enter Valid Password"
    }
    else {
        document.querySelector("#pwderror").innerHTML = "";
    }
}