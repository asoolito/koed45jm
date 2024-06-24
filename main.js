let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

data.forEach(item => {
    let newText = document.createElement("p")
    newText.textContent = item;
    document.body.appendChild(newText);
if(item > 50){
newText.style.backgroundColor = "red"
}else{
    newText.style.backgroundColor = "green"
}
newText.style.color = "white";
newText.style.textAlign = "center";
})
