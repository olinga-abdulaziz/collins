const button=document.querySelector('.fa-bars');
const x=document.querySelector('.x')
const sidebar=document.querySelector('.hideSidebar')



button.addEventListener('click',(e)=>{
    showSidebar();
})

x.addEventListener('click',(e)=>{
    hideSidebar()
})


function showSidebar(){
    sidebar.classList.remove("hideSidebar");
    sidebar.classList.add("showSidebar")
}

function hideSidebar(){
    sidebar.classList.remove("showSidebar");
    sidebar.classList.add("hideSidebar")
}

