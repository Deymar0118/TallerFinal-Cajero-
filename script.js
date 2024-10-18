let balance = 100000; 
const user = "deymar"; 
const pin = "1003"; 

function login() {
    const inputUser = document.getElementById("user").value;
    const inputPin = document.getElementById("pin").value;
    const loginError = document.getElementById("login-error");

    if (inputUser === user && inputPin === pin) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("atm-section").style.display = "block";
        document.getElementById("welcome-message").textContent = `Bienvenido, ${user}`;
    } else {
        loginError.textContent = "Usuario o PIN incorrecto";
    }
}

function consultarSaldo() {
    const atmMessage = document.getElementById("atm-message");
    atmMessage.textContent = `Su saldo actual es: $${balance}`;
}

function mostrarRetiro() {
    document.getElementById("retirar-section").style.display = "block";
    document.getElementById("consignar-section").style.display = "none"; // Ocultar sección de consignación
    document.getElementById("atm-message").textContent = ""; // Limpiar mensajes anteriores
}

function mostrarConsignar() {
    document.getElementById("consignar-section").style.display = "block";
    document.getElementById("retirar-section").style.display = "none"; // Ocultar sección de retiro
    document.getElementById("atm-message").textContent = ""; // Limpiar mensajes anteriores
}

function retirar() {
    const atmMessage = document.getElementById("atm-message");
    const retiro = parseFloat(document.getElementById("monto-retiro").value);

    if (isNaN(retiro) || retiro <= 0) {
        atmMessage.textContent = "Operación cancelada. Monto inválido.";
        return;
    }

    if (retiro <= balance) {
        balance -= retiro;
        atmMessage.textContent = `Has retirado $${retiro}. Saldo restante: $${balance}`;
        cancelarRetiro();
    } else {
        atmMessage.textContent = "Saldo insuficiente. Operación cancelada.";
    }
}

function cancelarRetiro() {
    document.getElementById("retirar-section").style.display = "none";
    document.getElementById("monto-retiro").value = ""; 
}

function consignar() {
    const atmMessage = document.getElementById("atm-message");
    const consignacion = parseFloat(document.getElementById("monto-consignar").value);

    if (isNaN(consignacion) || consignacion <= 0) {
        atmMessage.textContent = "Operación cancelada. Monto inválido.";
        return;
    }

    balance += consignacion;
    atmMessage.textContent = `Has consignado $${consignacion}. Saldo actual: $${balance}`;
    cancelarConsignar();
}

function cancelarConsignar() {
    document.getElementById("consignar-section").style.display = "none";
    document.getElementById("monto-consignar").value = ""; 
}

function imprimirSaldo() {
    const atmMessage = document.getElementById("atm-message");
    atmMessage.textContent = `Saldo actual: $${balance}`;
}


function salir() {
    const atmMessage = document.getElementById("atm-message");
    atmMessage.textContent = "Gracias por usar el cajero. ¡Hasta luego!";
    setTimeout(() => {
        location.reload();
    }, 2000);
}
