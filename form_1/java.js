function check_the_form() {
    let form = document.querySelector("form");
    let name = document.getElementById("full_name");
    let chars = /^[A-Za-z\s]+$/;

    form.addEventListener("submit", function (event) {
        let checkname = name.value.trim();                                       //////check the full_name
        if (!chars.test(checkname)) {
            event.preventDefault();
            let f_input = document.querySelector("input");                      /////border
            f_input.style.borderBlockColor = "red";
            f_input.style.transition = "border-color 0.2s ease-in-out";
            f_input.style.borderRadius = "5px";

            let error_1= document.getElementById('1');                          ////alret
            error_1.classList.add('alert', 'alert-danger');
            error_1.innerText = 'Enter a valid full Name containing only alphabet characters and spaces';
            error_1.setAttribute('role', 'alert');
           
        }


        let check_input_interests = document.querySelectorAll('input[type="checkbox"][name="interests[]"]');        /////////interests[] check 3 time 
        let checkedCount = 0;
        check_input_interests.forEach(function (check_input_interests) {
            if (check_input_interests.checked) {
                checkedCount++;
            }
            else {
                check_input_interests.style.borderBlockColor = "red";
            }
        });
        if (checkedCount < 3) {
            event.preventDefault();
            
            let error_ = document.getElementById('parent');
            error_.classList.add('alert', 'alert-danger');
            error_.innerText = 'A simple danger alert—check it out!';
            error_.setAttribute('role', 'alert');
            error_.style.width="400px";
            error_.style.height="40px";

        }

    });
}


function list_age() {
    for (let i = 23; i <= 38; i++) {
        let option = document.createElement("option");
        option.innerHTML = i;
        let select_list = document.getElementById("select_1_list");
        select_list.appendChild(option);
    }
}





window.onload = () => {
    let form_ = document.getElementById("form_");
    form_.style.marginLeft=" 40px";
    list_age();
    check_the_form();
}



