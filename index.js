function getInput() {
    var temp = document.getElementById("editor").value;
    
    var mark = marked(temp);

    document.getElementById("preview").innerHTML = mark;
}