function ucfirst(chaine) {
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof(chaine) != "string" || chaine === "") return "";
    let str = "";
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        if (i > 0) {
            str += " ";
        }
        str += ucfirst(words[i]);
    }
    return str;
}

function camelCase(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).split(' ').join('');
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join('_').toLowerCase();
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    var crypt = { "A": 4, "E": 3, "I": 1, "O": "0", "U": "(_)", "Y": 7 };
    return chaine.split('').map(s => crypt[s] || s).join('');
}

function verlan(chaine){
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split('').reverse().join('');
}