
## 🔧 Cómo Levantar el Proyecto Expo

### 1️⃣ Requisitos Previos
1. **Node.js**: Asegúrate de tener **Node.js** instalado en tu máquina. [Descargar Node.js](https://nodejs.org/)

### 2️⃣ Instalación del Proyecto
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/JGRinas/GymApp.git
   cd GymApp
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**:
   - Reemplaza el archivo `.env-template` por `.env` en la raíz del proyecto:

4. **Ejecutar el Proyecto en Modo Desarrollo**:
   ```bash
   npm run android
   ```
   - Esto abrirá el **Metro Bundler** en tu terminal.
   - Escanea el **QR Code** con la aplicación Expo Go en tu dispositivo móvil o usa un emulador.

---

## 📂 Estructura del Proyecto

El proyecto sigue la **Clean Architecture**, lo que permite mantener el código organizado y escalable. A continuación, se detalla cada capa:

### 1️⃣ **UI Layer (Capa de Presentación)**
- **Descripción**: Contiene los componentes de la interfaz de usuario que los usuarios ven e interactúan, como botones, inputs, banners, y contenedores que son utilizados por las pantallas..

### 2️⃣ **Domain Layer (Capa de Dominio)**
- **Descripción**: Define la lógica de negocio y las reglas esenciales de la aplicación. Aquí se colocan **entidades**, **casos de uso** e **interfaces**.

### 3️⃣ **Application Layer (Capa de Aplicación)**
- **Descripción**: Maneja la comunicación entre la capa de presentación y el dominio. Aquí se colocan los **servicios** que conectan la lógica de negocio con la interfaz.

### 4️⃣ **Infrastructure Layer (Infraestructura)**
- **Descripción**: Implementa las conexiones con **APIs externas** y bases de datos. Aquí se encuentran las configuraciones de **repositorios** y la integración con servicios externos.

---

## 📦 Patrón Repositorio

El proyecto implementa el **Patrón Repositorio** para desacoplar la lógica de negocio del acceso a datos. Esto permite que la aplicación cambie la fuente de datos (por ejemplo, de una API a una base de datos local) sin afectar la lógica del dominio.

### Ejemplo de Repositorio:
```typescript
//infrastructure/repository.ts
export default function createExerciseRepository(): ExerciseRepository {
  return {
    getAllExercises,
  };
}

async function getAllExercises() {
  const response = await API.EXERCISE.get("/");
  return response.data;
}

//domain/repository.ts
export interface ExerciseRepository {
  getAllExercises: () => Promise<Exercise[]>;
}

//application/index.ts
import { ExerciseRepository } from "../domain/repository";

export function getAllExercises(repository: ExerciseRepository) {
  return async function () {
    return await repository.getAllExercises();
  };
}
```

---

## 📋 Descripción General de la Aplicación

Esta aplicación está diseñada para facilitar la interacción entre usuarios y su rutina de entrenamiento en un gimnasio. Los usuarios pueden:
- **Visualizar y gestionar sus rutinas**.
- **Buscar ejercicios específicos**.
- **Ver indicaciones detalladas** de cada ejercicio.
- **Registrarse y gestionar su cuenta**.

La aplicación sigue las mejores prácticas de desarrollo utilizando **Expo**, **React Native** y una estructura basada en **Clean Architecture** para garantizar escalabilidad y facilidad de mantenimiento.
