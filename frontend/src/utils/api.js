
 class Api {
    constructor({address, token, format}) {
        this._address = address;
        this._token = token;
        this._format = format;
    }

    //Загрузка информации о пользователе с сервера
    getUser(){
        return fetch(`${this._address}/users/me`, {
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            }
        })
        .then(this._checkResponse)
    }

    //Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            }
        })
        .then(this._checkResponse)
    }

    //Редактирование профиля
    editUser({ name, about }){
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                Authorization: this._token,
                Accept: "application/json",
                'Content-Type': this._format
            },
            body: JSON.stringify({
                name,
                about
            })
    })
    .then(this._checkResponse)

    }

    //Редактирование аватара
    editAvatar({avatar}){
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'Authorization': this._token,
                'Content-Type': this._format
            },
            body: JSON.stringify({
                avatar
            })
    })
    .then(this._checkResponse)

    }

    //Добавление новой карточки
    addCard({ name, link }){
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                'Authorization': this._token,
                'Content-Type': this._format
            },
            body: JSON.stringify({
                name,
                link
            })
    })
    .then(this._checkResponse)
}

    //Удаление карточки
    deleteCard(data){
        return fetch(`${this._address}/cards/${data._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': this._token,
                    'Content-Type': this._format
                },
        })
        .then(this._checkResponse)
        
    }

    //Добавление лайка
    addLike(id){
        return fetch(`${this._address}/cards/${id}/likes`, {
                method: 'PUT',
                headers: {
                    'Authorization': this._token,
                    'Content-Type': this._format
                },
                
        })
        .then(this._checkResponse)
    }

    //Удаление лайка
    removeLike(id){
        return fetch(`${this._address}/cards/${id}/likes`, {
                method: 'DELETE',
                headers: {
                    'Authorization': this._token,
                    'Content-Type': this._format
                },
        })
        .then(this._checkResponse)
    }  

    //Добавление и удаление лайков
    changeLikeCardStatus(cardId, isLiked){
        if(isLiked){
            return this.addLike(cardId)
        }
        else{
             return this.removeLike(cardId)   
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const api = new Api({
    address: 'http://localhost:5000',
    token: `Bearer ${localStorage.getItem('jwt')}`,
    //token: 'fd83089e-563a-4f6d-a7ca-57bbc8360c89',
    format: 'application/json'
  }); 
  
  export default api;

    
 

