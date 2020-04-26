let items=document.querySelectorAll('.task #opt');
var color=["red","blue","green","yellow","pink","silver","grey"];
// Object.prototype.slice(call(items));
// color[Math.floor(Math.random()*items.length)]

// console.log(items);
for(let i of items)
{
    let s=i.textContent.trim();
    if(s=="Home")
    i.style.backgroundColor = "goldenrod";
    else if(s=="Personal"){
        i.style.backgroundColor = "saddlebrown";
    }
    else if(s=="Clothing"){
        i.style.backgroundColor = "cadetblue";
    }
    else if(s=="Development"){
        i.style.backgroundColor = "maroon";
    }
    else{
       i.style.backgroundColor = "purple";
    }
}