document.addEventListener("DOMContentLoaded", () => {

    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");

    const deliveryBtn = document.getElementById("deliveryBtn");
    const pickupBtn = document.getElementById("pickupBtn");
    const submitBtn = document.getElementById("submitBtn");

    const shopInfo = document.getElementById("shopInfo");
    const addressBlock = document.getElementById("addressBlock");
    const message = document.getElementById("message");

 
    const shop = sessionStorage.getItem("shop");
    sessionStorage.clear();

    
    if (shop) {
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
        shopInfo.innerText = "Самовывоз: " + shop;
        addressBlock.style.display = "none";
    }

    deliveryBtn.onclick = () => {
        step1.classList.remove("visible");
        step2.classList.add("hidden");
        shopInfo.innerText = "Доставка";
        addressBlock.style.display = "block";
        step2.classList.remove("hidden");
        step2.classList.add("visible");
    };

    pickupBtn.onclick = () => {
        window.location.href = "pickup.html";
    };

    // submitBtn.onclick = () => {
    //     message.innerText = "✅ Заказ оформлен!";
    // };
    submitBtn.onclick = () => {
        document.body.innerHTML = `
            <div style="color:white; text-align:center; margin-top:20%;">
                <h1>✅ Заказ оформлен</h1>
                <p>Спасибо за покупку!</p>
            </div>
        `;
    };

});