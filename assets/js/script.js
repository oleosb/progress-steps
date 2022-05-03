let steps = document.querySelectorAll('.step')
let bars = document.querySelectorAll('.bar')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let stepProgress = 0
let barProgress = -1

disableBtns()

next.addEventListener('click', () => {
        stepProgress++
        barProgress++

        if (stepProgress > steps.length) {
                stepProgress = steps.length
        }

        if (barProgress > bars.length) {
                barProgress = bars.length
        }

        disableBtns()
        updateProgress()
})

prev.addEventListener('click', () => {
        stepProgress--
        barProgress--


        if (stepProgress < 0) {
                stepProgress = 0
        }

        if (barProgress < -1) {
                barProgress = -1
        }

        disableBtns()
        updateProgress()
})

function updateProgress() {
        steps.forEach((step, idx) => {
                if (idx < stepProgress) {
                        step.classList.add('active')
                } else {
                        step.classList.remove('active')
                }
        })
        
        bars.forEach((bar, idx) => {
                if (idx < barProgress) {
                        bar.classList.add('active')
                } else {
                        bar.classList.remove('active')
                }
        })
}

function disableBtns() {
        
        if (stepProgress == 0) {
                prev.classList.add('disable')
        } else {
                prev.classList.remove('disable')
        }

        
        if (stepProgress == steps.length) {
                next.classList.add('disable')
        }else {
                next.classList.remove('disable')
        }

}