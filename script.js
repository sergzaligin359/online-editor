document.querySelectorAll('textarea')
.forEach(el => {
    el.addEventListener('keydown', e => {
        if(e.key === 'Tab') {
            e.preventDefault();
            console.log('currentTarget', e.currentTarget);
            console.log('selectionStart', e.currentTarget.selectionStart);
            console.log('selectionEnd', e.currentTarget.selectionEnd);
        };
    })
});