const express = require('express');
const app = express();

app.use(express.json());

// Importar todas las rutas
const rolesRoutes = require('./src/routes/roles.routes');
const usuariosRoutes = require('./src/routes/usuarios.routes');
const categoriasRoutes = require('./src/routes/categorias.routes');
const eventosRoutes = require('./src/routes/eventos.routes');

// Ruta de prueba (healthcheck)
app.get('/', (req, res) => {
  res.send({ message: "API Activa 🐼" });
});

// Usar las rutas
app.use('/roles', rolesRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/eventos', eventosRoutes);

// Configuración de puerto
app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), () => {
  console.log(`Server running on PORT ${app.get('PORT')}`);
});