function goToLogin(){
    window.location.href = "../login/memberLogin.html"
}

function submitData(){
    let phonenumber = document.querySelector('input[name = phonenumber]')
    let firstname = document.querySelector('input[name = firstname]')
    let username = document.querySelector('input[name = username]')
    let email = document.querySelector('input[name = email]')
    let password = document.querySelector('input[name = password]')
    let confirmPassword = document.querySelector('input[name = confirmPassword]')
    let userData = {
        เบอร์โทร: phonenumber.value,
        ชื่อจริง: firstname.value,
        ชื่อผู้ใช้งาน: username.value,
        อีเมล: email.value,
        รหัสผ่าน: password.value,
        ยืนยันรหัสผ่าน: confirmPassword.value
        

    }
   console.log(userData)
} 
function submitData() {
    const phoneNumber = document.getElementById('phonenumber').value;
    const firstName = document.getElementById('firstname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'รหัสผ่านไม่ตรงกัน',
            text: 'กรุณากรอกรหัสผ่านให้ตรงกัน',
            confirmButtonText: 'ตกลง'
        });
        return;
    }

    if (phoneNumber && firstName && username && email && password && confirmPassword) {
        // ให้แสดง SweetAlert2 เมื่อสมัครสมาชิกเสร็จสิ้น
        Swal.fire({
            icon: 'success',
            title: 'สมัครสมาชิกเสร็จสิ้น',
            text: 'คุณได้เข้าสู่ระบบสมาชิกแล้ว',
            confirmButtonText: 'ตกลง'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            text: 'โปรดกรอกข้อมูลให้ครบถ้วนทุกช่อง',
            confirmButtonText: 'ตกลง'
        });
    }
}

