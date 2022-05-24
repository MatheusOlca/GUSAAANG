const routes = ['tabela', 'quem', 'mundos', 'Main']
function goTo(route) {
    if(routes.includes(route)){
        document.location.href = `${route}.html`
    }
}

function selectPlan(plan) {
    planElement = document.getElementById(`plan-${plan}`);
    if (planElement != null) {
        totalElement = document.getElementById('total');
        value = planElement.getAttribute('value');
        if (totalElement) {
            totalElement.setAttribute('plan', value);
            recalc();
        }
    }
}

function selectMult(mult) {
    totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.setAttribute('mult', mult);
        recalc();
    }
}

function recalc() {
    totalElement = document.getElementById('total');
    if (totalElement) {
        plan = ifHasAttribute(totalElement, 'plan', 0);
        mult = ifHasAttribute(totalElement, 'mult', 1);
        totalElement.textContent = `Preço: R$${plan*mult}`
    }
}

function ifHasAttribute(element, attribute, ifnot){
    return element.hasAttribute(attribute) ? element.getAttribute(attribute) : ifnot;
}