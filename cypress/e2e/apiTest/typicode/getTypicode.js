describe('Use GET method to get data from typicode', () => {

  //abriendo la página web
    it('first visit and get on typicode.com', () => {
      cy.visit("https://jsonplaceholder.typicode.com/");
      cy.request({
        method: 'GET',
        url: '/posts'
      })
    });

  //sólo hace el get y devuelve el resultado  
    it('first visit and get on typicode.com', () => {
        cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      })
    });

  //sólo hace el get y devuelve el resultado  
    it.only('Get on typicode.com', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      })
    });

    it('Get without declare parameter (method and url) on typicode.com', () => {
      cy.request('GET','https://jsonplaceholder.typicode.com/posts');
    });

    it('Get without method on typicode.com', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts');
    });

    it.only('Get on typicode.com and check status code', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
        expect(response.status).to.eq(200);
      });      
    });

    it('Get on typicode.com and use should and expect on the response', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100);
      });
    });

    it('Get on typicode.com and check status, lenght and its an array and not a number', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100);
        expect(response.body).to.be.a('array');
        expect(response.body).not.to.be.a('number');
      });
    });

    // ejercicio 

    //tipo de respuesta y longitud

    it.only("Get on typicode.com /post1 body", () => {
      cy.request("https://jsonplaceholder.typicode.com/posts/1").should(
        (response) => {
          expect(response.body).to.be.a("object");
          expect(response.body).not.to.be.a("number");
          expect(response.body.userId).to.be.eq(1); // true
          expect(response.body.title).to.be.eq(
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
          });
        });  

    //status

    it('Get on typicode.com and check status code', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
        expect(response.status).to.eq(200);
      });
    });  

    //Comprobar que no falta ningún campo en ningún objeto

    it('check that the response fot the endpoint "/posts" and include the keys userId, id, title, body ', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
        response.body.forEach((array) => {
          expect(array).to.include.all.keys(['userId', 'id', 'title', 'body']);
        })
      })
    });

})