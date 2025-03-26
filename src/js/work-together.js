import iziToast from 'izitoast';
import icon from '../img/icons.svg#close-icon';
const emailInput = document.querySelector(".form_input");
const textAreaInput = document.querySelector(".form_textarea");
const label = document.querySelector(".form_input_icon");
const btnSubmit = document.querySelector(".form_btn");
const form = document.querySelector(".form");

function validateEmail(email) {
    const valid = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return valid.test(email);
}

function emailValidation() {

    emailInput.addEventListener("input", function () {
        if (validateEmail(emailInput.value)) {
            label.style.display = "block";
            emailInput.style.color = "light-dark(#292929, #f0f0f0)";
        } else {
            label.style.display = "none";
            emailInput.style.color = "#E74A3B";
        }
    });
}

emailValidation();

const sendMessage = async (event) => {
    event.preventDefault();

    const formData = {
        email: emailInput.value.trim(),
        comment: textAreaInput.value.trim(),
    };

    try {
        const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            ShowModal(data.title, data.message); 
            form.reset(); 
            label.style.display = "none";
        } else {
            iziToast.error({
                title: "Error",
                message: data.message,
                position: "topRight",
                timeout: 5000,
            });
        }
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message,
            position: "topRight",
            timeout: 5000,
        });
    }
};

const ShowModal = (title, message) => {
    let backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
  
    backdrop.innerHTML = `
    <div class="modal">
        <svg class="modal_icon" aria-label="Close" width="24px" height="24px">
            <use href="${icon}"></use>
        </svg>
        <p class="modal_title">${title}</p>
        <p class="modal_text">${message}</p>
    </div>
    `;

    document.body.appendChild(backdrop);

    const closeBtn = backdrop.querySelector(".modal_icon"); 

    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";

    const closeModal = () => {
        backdrop.classList.remove("is-open");
        document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeModal);

    backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) closeModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeModal();
    });
};

btnSubmit.addEventListener("click", sendMessage);