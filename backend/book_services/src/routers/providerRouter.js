const {
    Router
} = require('express');
const provider_router = Router();

const {
    get_providers,
    get_provider,
    add_provider,
    update_provider,
    delete_provider
} = require('../controllers/ProviderController')

provider_router.get('/providers', get_providers)

provider_router.get('/provider/:id', get_provider)

provider_router.post('/provider', add_provider)

provider_router.put('/provider/:id', update_provider)

provider_router.delete('/provider/:id', delete_provider)

module.exports = provider_router