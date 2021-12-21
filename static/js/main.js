const menu=document.querySelector('.fa-bars');
const sidebar=document.querySelector('.hide-sidebar')
const sidebarContent=document.querySelector('.sidebar-content-hide')
const close=document.querySelector('.fa-times')


menu.addEventListener('click',(e)=>{
    showSidebar();
})

close.addEventListener('click',(e)=>{
    hideSidebar()
})


function showSidebar(){
    sidebar.classList.remove("hide-sidebar");
    sidebar.classList.add("show-sidebar")
    sidebarContent.classList.remove("sidebar-content-hide")
    sidebarContent.classList.add("sidebar-content")

}

function hideSidebar(){
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("hide-sidebar")
    sidebarContent.classList.remove("sidebar-content")
    sidebarContent.classList.add("sidebar-content-hide")
}

