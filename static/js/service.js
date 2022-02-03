const trendingUl=document.querySelector('.randomUl');
const trendingLi=document.querySelector('.randomLi');
const formPost=document.forms['formPost']


getData=()=>{
    getTrendingPost();
    WeddingDemo();
    eventDemo();
    fasionDemo();
}

getTrendingPost=  ()=>{
        axios.get('http://kkphoto.herokuapp.com/post').then((response)=>{
        const listdata=response.data
        
        for (let index = 0; index < listdata.length; index++) {
            const element = listdata[index];
            const trDiv=document.createElement('div')
            trDiv.classList.add('trDiv')
            trDiv.innerHTML=`<img src="${element.image}" alt="" class="trImg" />`
            trendingLi.appendChild(trDiv)
            trendingUl.appendChild(trendingLi)
        }
        
        
    })
}



WeddingDemo=()=>{
    axios.get('http://kkphoto.herokuapp.com/post/category/Wedding').then((res)=>{
        let listdata=res.data
        let ld= listdata.slice(0,3)
        for (let index = 0; index < ld.length; index++) {
            const element = ld[index];
            const demoDiv=document.querySelector('.wed-img')
            demoDiv.innerHTML=`<img src="${element.image}" alt="" class="vert-img wed-vert-img">`
        }
    })
}

eventDemo=()=>{
    axios.get('http://kkphoto.herokuapp.com/post/category/Events').then((res)=>{
        let listdata=res.data
        let ld= listdata.slice(0,3)
        for (let index = 0; index < ld.length; index++) {
            const element = ld[index];
            
        }
    })
}


fasionDemo=()=>{
    axios.get('http://kkphoto.herokuapp.com/post/category/Fasion').then((res)=>{
        let listdata=res.data
        let ld= listdata.slice(0,3)
        for (let index = 0; index < ld.length; index++) {
            const element = ld[index];
            
        }
    })
}



formPost.addEventListener('submit',(e)=>{
    e.preventDefault()
    const categoryBox=formPost.querySelector('#category')
    const category=categoryBox.options[categoryBox.selectedIndex].text
    const image=formPost.querySelector('#image').value
    const description=formPost.querySelector('#description').value

    axios.post('http://kkphoto.herokuapp.com/post',{
        category:category,
        image:image,
        description:description
    }).then((res)=>{
        document.location.href('admin.html')
    })
})
