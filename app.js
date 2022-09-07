const skillSection = document.querySelector('#Our-Skills');
const percents = document.querySelectorAll('.static-detail span');
console.log(percents);

const animi = function(entries){
    entries.forEach(entry => console.log(entry))
    const [entry] = entries;
    if(entry.isIntersecting){
        percents.forEach(per => {
            per.classList.remove('hidden');
        })
    }
}
const observerPercent = new IntersectionObserver(animi , {
    root:null,
    threshold:0
})

percents.forEach(per => {
    per.classList.add('hidden');   
})

observerPercent.observe(skillSection);