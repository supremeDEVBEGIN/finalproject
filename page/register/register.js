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
