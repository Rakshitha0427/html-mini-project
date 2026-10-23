function validateForm()
{
    let valid = true;

    const name = document.getElementById("name").value;

    if(name.trim() === "")
    {
        document.getElementById("nameError").innerText = "Name Is Required";
        valid = false;
    }
    else
    {
        document.getElementById("nameError").innerText = "";
    }

    const gender = document.querySelector('input[name="gender"]:checked');

    if(!gender)
    {
        document.getElementById("genderError").innerText = "Please Select Your Gender";
        valid = false;
    }
    else
    {
        document.getElementById("genderError").innerText = "";
    }


    const country = document.getElementById("country").value;

    if(country === "")
    {
        document.getElementById("countryError").innerText = "Please Select Your Country";
        valid = false;
    }
    else
    {
        document.getElementById("countryError").innerText = "";
    }


    const about = document.getElementById("about").value;

    if(about.trim() === "")
    {
        document.getElementById("aboutError").innerText = "Please Write Something About You";
        valid = false;
    }
    else
    {
        document.getElementById("aboutError").innerText = "";
    }


    
    const terms = document.getElementById("terms").checked;

    if(!terms)
    {
        document.getElementById("termsError").innerText = "You must accept the terms";
        valid = false;
    }
    else
    {
        document.getElementById("termsError").innerText = "";
    }



    if(valid)
    {
        alert("Valid Data");
    }

    return valid;
}
