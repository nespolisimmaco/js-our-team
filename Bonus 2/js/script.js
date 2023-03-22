// Creare l’array di oggetti con le informazioni fornite
// Array di oggetti
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

// Organizzare i singoli membri in card/schede
const row = document.querySelector(".row");
let cards = "";
// Inserisco le card nel DOM
for (let i = 0; i < team.length; i++) {
    generateCard(i);
    row.innerHTML += cards;
}

/////////////////////////
// FUNCTIONS

/**
 * Description Genero la card da inserire nel DOM
 * @param {number} index Indice del ciclo for che scorre tutto l'array di oggetti
 */
function generateCard(index) {
    const teamMember = team[index];
    console.log("Membro del team:", teamMember);
    cards = `
    <div class="col">
        <div class="card rounded">
            <img class="card-img-top" src="img/${teamMember.foto}" alt="${teamMember.nome}">
            <div class="card-body">
                <h5 class="card-title text-center">${teamMember.nome}</h5>
                <p class="card-text text-center">${teamMember.ruolo}</p>
            </div>
        </div>
    </div>`;
}