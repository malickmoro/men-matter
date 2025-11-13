import router from '@adonisjs/core/services/router'

const MessagesController = () => import('#app/Controllers/Http/MessagesController')

router.get('/', [MessagesController, 'index']).as('home')
router.post('/begin', [MessagesController, 'begin']).as('begin')
router.post('/messages/praise', [MessagesController, 'storePraise']).as('messages.storePraise')
router.post('/messages/issue', [MessagesController, 'storeIssue']).as('messages.storeIssue')
router.get('/history', [MessagesController, 'history']).as('history')
