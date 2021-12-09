class View {

    constructor() {
  
      this.app = this.getElement('#root')
  
      this.high_score = this.createElement('h1')
      this.high_score.textContent = 'High Score: 0'
  
      this.downloadButton = this.createElement('button', 'download_button')
      this.downloadButton.textContent = 'Download High Score'
  
      this.cookie = this.getElement('img')
  
      this.score = this.createElement('h3')
      this.score.textContent = 'Your Score: 0'
  
      this.form = this.createElement('form')
  
      this.uploadButton = this.createElement('button', 'upload_button')
      this.uploadButton.textContent = 'Upload High Score'
  
      this.input = this.createElement('input')
      this.input.type = 'text'
      this.input.placeholder = 'Cookie God'
      this.input.name = 'name'
  
      this.form.append(this.input, this.uploadButton)
  
      this.app.append(this.high_score, this.downloadButton, this.score, this.form)
  
  
    }
  
    createElement(tag, className) {
  
      const element = document.createElement(tag)
  
      if (className) {
  
        element.classList.add(className)
  
      }
  
      return element
      
    }
  
    getElement(selector) {
  
      const element = document.querySelector(selector)
  
      return element
  
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
  
    bindDataDownload(handler) {
  
      this.downloadButton.addEventListener("click", event => {
        event.preventDefault()
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
  
  }