document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav__link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
        })
    })
})

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')
})

document.querySelector('.burger__ws-menu').addEventListener('click', function(){
    document.querySelector('#menu__ws-menu').classList.toggle('is-active')
})



