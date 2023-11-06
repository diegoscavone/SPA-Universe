export class Router {
  //cria um objeto routes
  routes = {}
  // função add que é passada como parametro routeName e page
  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    // retira o padrão do evento do botão
    event = event || window.event
    event.preventDefault()

    /* Esta linha de código adiciona uma nova entrada ao histórico de navegação do navegador. Ela recebe três argumentos:
      O primeiro argumento, {}, representa o estado de JavaScript associado à nova entrada do histórico. Neste caso, é um objeto vazio.
      O segundo argumento, '', representa o título da página. Neste caso, está vazio, o que significa que o título da página permanecerá inalterado.
      O terceiro argumento, event.target.href, é o URL para o qual a nova entrada do histórico de navegação está apontando. O valor de event.target.href provavelmente é o URL que o usuário está tentando acessar. */
    window.history.pushState({}, '', event.target.href)

    this.handle() //chama a função handle
  }

  handle() {
    const { pathname } = window.location
    //const pathname = window.location.pathname

    // se não houver um caminho correspondente ao valor de pathname será exibido a página de erro 404
    const route = this.routes[pathname] || this.routes[404]

    this.toggleBackground(pathname)

    // Esta parte da linha de código usa a função fetch para enviar uma solicitação de rede para o destino especificado pela variável "route". A variável "route" provavelmente contém o URL de onde os dados devem ser obtidos.
    fetch(route)
      .then(data => data.text()) //está manipulando a resposta da solicitação. Ele usa o método .then() para lidar com a promessa resultante da função fetch. Aqui, está sendo usado o método text() para converter os dados da resposta em texto.
      .then(html => {
        document.querySelector('#app').innerHTML = html
      }) //Ele define o innerHTML do elemento com o ID "app" no documento HTML atual como o texto obtido na resposta. Isso provavelmente significa que o conteúdo obtido da solicitação de rede será inserido no elemento com o ID "app" na página da web. Em resumo, esta linha de código está realizando uma solicitação de rede, obtendo o texto da resposta e, em seguida, inserindo esse texto em um elemento específico no HTML da página.
    console.log(route)
  }

  toggleBackground(pathname) {
    const pageName = document.body.classList.value
    document.body.classList.remove(pageName)

    switch (pathname) {
      case '/':
        document.body.classList.add('home')
        break
      case '/universe':
        document.body.classList.add('universe')
        break
      case '/exploration':
        document.body.classList.add('exploration')
        break
      default:
        break
    }
  }

}
