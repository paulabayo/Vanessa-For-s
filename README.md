# Vane Fores | Micropigmentación Avanzada & Visagismo

Sitio web y One-Page interactiva de alta gama para el estudio de micropigmentación de **Vane Fores**, desarrollado con **React**, **Vite** y **Tailwind CSS**.

---

## 🚀 Despliegue en Vercel (Recomendado)

### Opción 1: Despliegue con 1 Clic desde GitHub
1. Sube este repositorio a tu cuenta de **GitHub**.
2. Entra en [vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **"Add New..."** > **"Project"**.
4. Importa el repositorio de GitHub.
5. Vercel detectará automáticamente el framework **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Haz clic en **"Deploy"**. ¡Listo en segundos!

*(El archivo `vercel.json` incluido en la raíz gestiona automáticamente el enrutamiento SPA).*

---

## 🌐 Despliegue en Netlify

### Opción 1: Despliegue con GitHub
1. Sube este proyecto a tu **GitHub**.
2. Entra en [netlify.com](https://netlify.com) y haz clic en **"Add new site"** > **"Import an existing project"**.
3. Selecciona tu repositorio.
4. Netlify cargará la configuración desde `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Haz clic en **"Deploy site"**.

### Opción 2: Despliegue Manual (Drag & Drop)
1. Ejecuta en tu terminal:
   ```bash
   npm install
   npm run build
   ```
2. Arrastra la carpeta `dist/` resultante a la sección **"Deploys"** en Netlify.

---

## 🛠️ Comandos Locales

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview
```
