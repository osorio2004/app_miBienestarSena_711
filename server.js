const express = require('express');
const app = express();

app.use(express.json());

// Rutas
const rolesRoutes = require('./src/routes/roles.routes');

// Ruta de prueba (healthcheck)
app.get('/', (req, res) => {
  res.send({ message: "API Activa 🐼" });
});

// Rutas de roles
app.use('/roles', rolesRoutes);

// Configuración de puerto
app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), () => {
  console.log(`Server running on PORT ${app.get('PORT')}`);
});
