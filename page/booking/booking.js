function submitData() {
    let userMember = document.querySelector('input[name="userMember"]')
    let phoneNumber = document.querySelector('input[name="phoneNumber"]')
    let date = document.querySelector('input[name="date"]')
    let zone = document.querySelector('select[name="zone"]')
    let people = document.querySelector('input[name="people"]')
    let userData = {
        "ชื่อผู้จอง": userMember.value,
        "เบอร์โทรศัพท์": phoneNumber.value,
        "วันที่จอง": date.value,
        "โซน": zone.value,
        "จำนวนคน": people.value,
    }
    console.log(userData)
}
const phoneNumberInput = document.getElementById("phoneNumber");
    const errorText = document.getElementById("errorText");

    phoneNumberInput.addEventListener("input", function() {
        const phoneNumber = phoneNumberInput.value;

        if (!/^[0-9]{1,10}$/.test(phoneNumber)) {
            errorText.textContent = "เบอร์โทรศัพท์ต้องเป็นตัวเลขไม่เกิน 10 ตัว";
        } else {
            errorText.textContent = "";
        }
    });