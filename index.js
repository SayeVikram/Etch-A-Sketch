let slider = document.querySelector('#slider');
const outer = document.getElementById("outer-box");


function sliderChange(val){
    document.getElementById('slider-val').innerHTML = val;
    let outer = document.getElementById("outer-box");
    outer.replaceChildren();
    setGrid(val);
}


function setGrid(val){
    tot = val*val;
    outer.style.gridTemplateColumns = "repeat(" + val + " , 1fr)";
    outer.style.gridTemplateRows = "repeat(" + val + " , 1fr)";


   
        for(let n = 1; n < (tot+1); n++){
            let item = document.createElement('div');
            item.setAttribute("class", "grid-items");
            item.style.backgroundColor = "white";
            outer.appendChild( item);
            
        }

    set_listeners(outer);
}

function set_listeners(box){
    var childDivs = box.children;
    for(let i = 0; i < childDivs.length; i++){
        let singleChild = childDivs[i];
        singleChild.addEventListener("mouseover", function(){
            singleChild.style.backgroundColor = "black";
        } );
    }

}

const reset = document.getElementById('reset-btn');

reset.addEventListener("click", function(){
    let childs = outer.children;
    for(let i = 0 ; i < childs.length; i++){
        let child_inst = childs[i];
        child_inst.style.backgroundColor = "white";
    }
})
