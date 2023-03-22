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

// Stampare su console e sul DOM le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log("Membro del team:", teamMember);
    let memberInfos = `Membro ${i+1} `;
    for (const key in teamMember) {
        console.log(key, teamMember[key]);
        if (key !== "foto") {
            memberInfos += `- ${key}: ${teamMember[key]} `;
        } else {
            memberInfos += `<img src="img/${teamMember[key]}" alt="${teamMember.nome}">`
        }
    }
    console.log(memberInfos);
    const teamMembers = document.querySelector(".team");
    const member = createTeamMember(memberInfos);
    teamMembers.append(member);
}

/////////////////////////
// FUNCTIONS

/**
 * Description creo il membro del team
 * @param {string} infos
 * @returns {any}
 */
function createTeamMember(infos) {
    const member = document.createElement("li");
    member.innerHTML = infos;
    return member;
}