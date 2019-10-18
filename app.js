function process() {
    const un = document.getElementById('un');
    const pw = document.getElementById('pw');
    const con = document.getElementById('con');
    hidden.style.visibility = "visible";
    hidden.style.color = "red";
    if (test_len(un.value)) {
        if (test_len(pw.value)) {
            if (test_len(con.value)) {
                if (pw.value === con.value) {
                    hidden.innerHTML = 'All good.';
                    hidden.style.color = "green";
                } else {
                    hidden.innerHTML = "Password does not match";
                }
            }
        }
    }
}

function test_len(inputStr) {
    if (inputStr.length > 3 && inputStr.length < 9)
        return true;
    hidden.innerHTML = "Length of user name or password not correct";
}
const hidden = document.getElementById('hidden');