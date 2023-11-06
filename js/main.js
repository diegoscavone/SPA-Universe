import { Router } from "./router.js";

// estou adicionando as paginas dentro da classe Router, passando como parametro routeName e page
const router = new Router()
router.add('/', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/exploration', './pages/exploration.html')
router.add(404, './pages/404.html')

router.handle() //dispara a função handle

//O evento popstate é acionado quando o histórico de navegação do navegador muda. Quando isso acontece, a função router.handle() é chamada. Utilizado para disparar o evento de voltar para a pagina anterior
window.onpopstate = () => router.handle()
//Esta linha de código está criando uma função route no objeto window. Quando essa função é chamada, ela chama o método route()
window.route = () => router.route()