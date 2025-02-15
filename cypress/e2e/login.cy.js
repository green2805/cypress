describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин 
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); //нажал войти 
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //провери правильность пароля
         cy.get('#messageHeader').should('be.visible'); // виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
        })
    
    
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин 
        cy.get('#pass').type('iLoveqastudio123'); // ввели НЕверный пароль
        cy.get('#loginButton').click(); //нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //провери правильность пароля
        cy.get('#messageHeader').should('be.visible'); // виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
       })

    it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('german@dolnikov33.ru'); //ввели НЕверный логин 
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //провери правильность пароля
        cy.get('#messageHeader').should('be.visible'); // виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
       })
       
       it('логин без @', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('germandolnikov.ru'); //ввели НЕверный логин 
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //провери правильность пароля
        cy.get('#messageHeader').should('be.visible'); // виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
       })
       
       it('логика восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //провери правильность пароля
        cy.get('#messageHeader').should('be.visible'); // виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
       })
    
       it('Проверка на строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели верный логин 
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //провери правильность пароля
        cy.get('#messageHeader').should('be.visible'); // виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
       })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    })
    

         



 
    
   