class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  
    initialize_controller() {
  
      this.view.bindCookieClick(this.handleCookieClick.bind(this))
      this.view.bindNameUpload(this.handleDataUpload.bind(this))
      this.view.bindDataDownload(this.handleDataDownload.bind(this))
  
    }
  
    handleCookieClick() {
  
      this.model.increment_score()
      this.view.score.textContent = `Your Score: ${this.model.get_score()}`
  
    }
  
    handleDataDownload() {
  
      this.model.download_high_score()
      this.view.high_score.textContent = `High Score: ${this.model.get_high_score()} by ${this.model.get_name()}`
  
    }
  
    handleDataUpload(name) {
  
      if (this.model.get_score() > this.model.get_high_score()) {
  
        this.model.upload_new_high_score(name,this.model.get_score())
        this.view.cookie.style.animationDuration = '0.2s'
        this.view.high_score.textContent = `High Score: ${this.model.get_high_score()} by ${this.model.get_name()}`
  
      }
  
    }
  
  }
  
  const app = new Controller(new Model(), new View())
  app.initialize_controller()
  