function elemLeaved () {
    event.target.removeEventListener('mouseout', elemLeaved);
    event.target.style.border="";
}

function elemHovered () {
    event.preventDefault();
    event.stopPropagation();

    event.target.style.border="5px solid #f00";
    event.target.addEventListener('click', elemSelected);
    event.target.addEventListener('mouseout', elemLeaved);
}

function elemSelected () {
    alert(event.target.innerText.length);
    document.getElementsByTagName('body')[0].removeEventListener('mouseover', elemHovered);
    event.target.removeEventListener('mouseout', elemLeaved);
    event.target.removeEventListener('click', elemSelected);
}

function postTextCounts () {
    document.getElementsByTagName('body')[0].addEventListener('mouseover', elemHovered);
}

postTextCounts();