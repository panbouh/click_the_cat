// A simple grid with a colored block who change place when clicked


let         items_tab = document.getElementsByClassName("item");
let         m_list_ok = ["Weell Donne ! ~", "Good job !", "Another time?", "Not so hard !"];
let         m_list_ko = ["Cheh !", "Im not here !", "Come on ! Try again", "Missed."];

function    new_green(cur_id) {
    let     nb; 
    let     n_green;

    do
        nb = Math.floor(Math.random() * items_tab.length + 1);
    while (nb == 0 || ('i' + nb) == cur_id);
    n_green = document.getElementById('i'+ nb);
    n_green.style.backgroundColor = "green";
    n_green.innerHTML = '<img src="img/cat.pnj" alt="potichat">';
}

function    get_random_message(m_tab) {
    let     n_mess = "";

    do
        n_mess = m_tab[Math.floor(Math.random() * m_tab.length)];
    while  (n_mess === document.getElementById("message").innerHTML)
    return n_mess
}

new_green(0);
for (i = 0; items_tab[i]; i++) {

    items_tab[i].addEventListener("click", function() {
        console.log(`Color is : ${this.id}`)
        if (this.style.backgroundColor === "green") {
            console.log("if");
            document.getElementById("message").innerHTML = get_random_message(m_list_ok);
            this.style.backgroundColor = 'bisque';
            this.innerHTML = ""
            new_green(this.id);
        }
        else {
            console.log("else")
            document.getElementById("message").innerHTML = get_random_message(m_list_ko);
        }
    });
};
