const app = require('./app');
const configVariables = require('./config/config');

app.listen(configVariables.PORT || 3000, () => {
    console.log(`Server running on port ${configVariables.PORT}`)
})
