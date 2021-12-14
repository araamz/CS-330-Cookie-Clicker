class View {

    constructor() {

      this.app_window = window;
  
      this.high_score = document.getElementById('high_score')
      this.high_score.textContent = '0'

      this.score_background = document.getElementsByClassName('score_text')[0]

      this.high_scorer_name = document.getElementById('high_scorer_name')
      this.high_scorer_name.textContent = 'loading...'

      this.current_score = document.getElementById('current_score')
      this.current_score.textContent = '0'
  
      this.cookie = document.getElementById('cookie')
  
      this.form = document.querySelector('form')

      this.uploadButton = document.querySelector('button')
      this.uploadButton.textContent = 'Upload High Score'
  
      this.input = document.querySelector('input')
  
  
    }
  
    getName() {
  
      return this.input.value
  
    }
  
    clearName() {
  
      this.input.value = ''
  
    }
  
    bindCookieClick(handler) {
  
      this.cookie.addEventListener("click", event => {
  
        handler()
  
      })
  
    }
  
    bindNameUpload(handler) {
  
      this.form.addEventListener("submit", event => {

        event.preventDefault()
        handler(this.getName())
        this.clearName()
        
      })
  
    }

    bindWindowLoad(handler) {

      this.app_window.addEventListener("load", event => {

        handler()

      })

    }
  
  }