// ROUTES
import brandRoutes from './routes/brandRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import scriptRoutes from './routes/scriptRoutes.js';
import videoRoutes from './routes/videoRoutes.js';

// --- API ROUTES ---
app.use('/api/brands', brandRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/scripts', scriptRoutes);
app.use('/api/videos', videoRoutes);
