const skillSection = document.querySelector('#Our-Skills');
const percents = document.querySelectorAll('.static-detail span');
const sections = document.querySelectorAll('section');
const cardTestmonial = document.querySelectorAll('.test-card');
const testContainer = document.querySelector('.test-container');
console.log(percents);

const animi = function(entries){
    entries.forEach(entry => console.log(entry))
    const [entry] = entries;
    if(entry.isIntersecting){
        percents.forEach(per => {
            per.classList.add('active');
        })
    }
}
const observerPercent = new IntersectionObserver(animi , {
    root:null,
    threshold:0
})

observerPercent.observe(skillSection);
const cardTest = function(entries){

    const [entry] = entries;
    if(entry.isIntersecting){
        console.log('test')
        cardTestmonial.forEach(card => {
            card.classList.add('active');
        })
    }
}
const observerTest = new IntersectionObserver(cardTest , {
    root:null,
    threshold:0
})

observerTest.observe(testContainer);



const showSec = function(entries){
    const [entry] = entries;
   
    if(entry.isIntersecting){
        entry.target.classList.remove('hidden')
        }
}

const observerSection = new IntersectionObserver(showSec, {
    root:null,
    threshold:0
})

sections.forEach(sec => {
    observerSection.observe(sec);
    sec.classList.add('hidden');
})