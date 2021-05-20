
function s(){
    const features = document.getElementById('features');
    let featuresposition = getBoundingClientRect().top;
    let screenposition = window.innerHeight

    if(featuresposition <= screenposition){
        features.classList.add('animationForSection')
    }
}
window.addEventListener('scroll',s())