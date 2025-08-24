const express = require('express');
const app = express();

app.use(express.json());

// importar rutas
const rolesRouter = require('./routes/roles.routes');
app.use('/api', rolesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
