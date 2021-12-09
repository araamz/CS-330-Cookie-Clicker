class Model {

    constructor() {
  
      this.score = 0
      this.high_score = 0
      this.name = ""
  
      this.url = "http://localhost:8000/retrieve_api"
      this.csrftoken = this.getCookie('csrftoken')
      this.download_high_score()
  
    }
  
    getCookie(name) {
  
      let cookieValue = null;
  
        if (document.cookie && document.cookie !== '') {
  
          const cookies = document.cookie.split(';');
  
          for (let i = 0; i < cookies.length; i++) {
  
            const cookie = cookies[i].trim();
                  
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
  
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
  
            }
  
          }
  
        }
  
      return cookieValue;
  
    }
  
    async download_high_score() {
  
      await fetch(`${this.url}/download_score/`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.high_score = data.score
        this.name = data.username
  
      })
  
    }
  
    async upload_new_high_score(name, score) {
  
      this.high_score = score
      this.name = name
  
      await fetch(`${this.url}/upload_score/`, {
  
        method: 'POST', 
        headers: {
  
            'Content-Type': 'application/json',
            'X-CSRFToken': this.csrftoken
  
        },
  
        body: JSON.stringify(
  
          {
            "username": this.name,
            "score": this.score
          }
  
        ),
  
        })
      .then(response => response.json())
      .then(success => console.log('Success - upload_new_high_score(): ', success))
      .catch(error => console.error('Error - upload_new_high_score(): ', error))
  
    }
  
    increment_score() {
      
      this.score = this.score + 1
  
    }
    get_score() {
  
      return this.score
  
    }
    get_high_score() {
  
      return this.high_score
  
    }
    get_name() {
  
      return this.name
  
    }
  
  }