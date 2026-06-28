const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
    // Show alert with current (un-incremented) value
    alert(counter.textContent);

    // Increment the counter
    counter.textContent = Number(counter.textContent) + 1;
});//your JS code here. If required.
