function eventHand () {
    let navBar = document.getElementById('navbar')
    function removeHidden(){
        console.log("hiddenoff")
        navContent.classList.remove("hidden")
    }
    function addHidden(){
        console.log("hiddenon")
        navContent.classList.add("hidden")
    }
    let navContent= document.getElementById('navContent')
    navBar.addEventListener("mouseover",removeHidden)
    navBar.addEventListener("mouseout",addHidden)

    
}
eventHand()