


let imgList = document.querySelectorAll('img');
let length = imgList.length;

const lazyLoad = (function (){
    let count = 0
    return function (){
        let deleteIndexList = []
        imgList.forEach((img, index) => {
            let rect = img.getBoundingClientRect()
            if (rect.top < window.innerHeight){
                img.src = img.dataset.src
                deleteIndexList.push(index)
                count++
                if (count === length){
                    document.removeEventListener('scroll', lazyLoad)
                }
            }
        })
        imgList = imgList.filter((img, index) => !deleteIndexList.indexOf(index))
    }
})()


document.addEventListener('scroll', lazyLoad)
