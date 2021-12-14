class Controller {
    constructor(model, view) {

      this.model = model
      this.view = view
      
    }
  
    initialize_controller() {
  
      this.view.bindCookieClick(this.handleCookieClick.bind(this))
      this.view.bindNameUpload(this.handleDataUpload.bind(this))
      this.view.bindWindowLoad(this.handleWindowLoad.bind(this))
  
    }
  
    handleCookieClick() {
  
      this.model.increment_score()
      this.view.current_score.textContent = `${this.model.get_score()}`
  
    }
  
    handleDataUpload(name) {
  
      if (this.model.get_score() > this.model.get_high_score()) {
  
        this.model.upload_new_high_score(name,this.model.get_score())
        this.view.cookie.style.animationDuration = '0.2s'
        this.view.high_score.textContent = `${this.model.get_high_score()}`
        this.view.high_scorer_name.textContent = `${this.model.get_high_scorer_name()}`
        this.view.score_background.style.animation = "new_score 0.5s alternate infinite"
  
      }
  
    }

    handleWindowLoad() {

      setTimeout(() => {
        this.view.high_score.textContent = `${this.model.get_high_score()}`
        this.view.high_scorer_name.textContent = `${this.model.get_high_scorer_name()}`
      }, 500)


    }
  
  }
  
  const app = new Controller(new Model(), new View())
  app.initialize_controller()
  