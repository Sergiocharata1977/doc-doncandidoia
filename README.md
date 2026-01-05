# 9001app-firebase - Documentación de Contexto

> **Propósito:** Archivos de contexto para sesiones de desarrollo con IA  
> **Proyecto Principal:** `9001app-firebase`  
> **Última Actualización:** 2026-01-05

---

## 📚 Archivos de Contexto

| Archivo | Contenido |
|---------|-----------|
| **1_ESTADO_GENERAL_PROYECTO.md** | Resumen ejecutivo, stack tecnológico, estado actual |
| **2_ARQUITECTURA_TECNICA.md** | APIs, Firestore, componentes, tipos TypeScript |
| **3_MODULOS_Y_FUNCIONALIDADES.md** | 30 módulos del dashboard, Don Cándido, CRM, MCP detallado |
| **4_ROADMAP_Y_PENDIENTES.md** | Desarrollo activo, backlog, integraciones |
| **SEGURIDAD_FASE6_RESUMEN.md** | Mejoras de seguridad multi-tenant (Enero 2026) |
| **PLAN_SESSION_COOKIES.md** | Plan de refactor de autenticación httpOnly (Pendiente) |

---

## 🤖 Don Cándido - Asistente IA ISO 9001

El sistema cuenta con **Don Cándido**, un asistente de IA especializado en ISO 9001:2015. Incluye:

### 💬 Chat Inteligente (FAB flotante)
- Responde preguntas sobre ISO 9001:2015
- Explica cómo usar cada módulo del sistema
- Muestra tiempo de respuesta en cada mensaje
- Modo voz (Speech-to-Text y Text-to-Speech)

### 🧭 Mi Certificación (`/journey`)
Dashboard visual de implementación ISO con:
- **6 Fases**: Diagnóstico, Planificación, Diseño, Implementación, Verificación, Certificación
- Barra de progreso global y por fase
- Checklist de tareas con vinculación a módulos
- Botones "Generar con IA" para documentos

### ✨ Generador de Documentos (`/generador-documentos`)
6 templates ISO listos para usar:
1. **Política de Calidad** (Cláusula 5.2)
2. **Procedimiento Control de Documentos** (7.5)
3. **Procedimiento Auditorías Internas** (9.2)
4. **Procedimiento Acciones Correctivas** (10.2)
5. **Formato Acta de Reunión** (7.5, 9.3)
6. **Objetivos de Calidad** (6.2)

### 💡 Sugerencias Proactivas
Motor de hints contextuales que sugiere:
- Próximo paso en tu certificación
- Recordatorios de tareas pendientes
- Felicitaciones por productividad
- Alertas de hallazgos/acciones abiertas

---

## 🎯 Cómo Usar Estos Archivos

1. **Al iniciar sesión**: Cargar los 4 archivos en el proyecto ChatGPT o Gemini
2. **Para tareas específicas**: Referenciar el archivo relevante
3. **Después de cambios grandes**: Actualizar los archivos

---

## 🏗️ Proyectos del Ecosistema

| Proyecto | Descripción | Puerto Local |
|----------|-------------|--------------|
| **9001app-firebase** | Sistema ISO 9001 principal | 3000 |
| **docs-9001app** | Documentación y contexto | 3001 |
| **don-candido-finanzas** | CRM Financiero standalone | 3002 |
| **sig-agro** | Sistema GIS Agropecuario | 3003 |

---

## ⚡ Comandos Rápidos

```bash
# 9001app-firebase
cd "c:\Users\Usuario\Documents\Proyectos\ISO -conjunto\9001app-firebase"
npm run dev

# docs-9001app  
cd "c:\Users\Usuario\Documents\Proyectos\ISO -conjunto\docs-9001app"
npm run dev

# Build para producción
npm run build

# Type check
npm run type-check
```

---

## 📋 Tecnologías Clave

- **Next.js 14** (App Router)
- **TypeScript**
- **Firebase** (Firestore, Auth, Storage)
- **Tailwind CSS + Shadcn UI**
- **Claude AI / Groq** (Chat y generación)
- **ElevenLabs** (Text-to-Speech)
- **Twilio** (WhatsApp Business API)

---

## 🔄 Historial de Actualizaciones

| Fecha | Cambios |
|-------|---------|
| 2026-01-05 | **Seguridad Multi-Tenant**: Firestore rules corregido, AuditLogService, IAOutputValidator, Webhook Mobbex HMAC |
| 2026-01-05 | **Multi-Tenancy Completo**: Fases 1-5 (Types, Services, Rules, APIs, Storage) |
| 2025-12-29 | **Don Cándido v2.0**: Journey Dashboard, Generador IA, Sugerencias Proactivas |
| 2025-12-28 | Kanban con Drag & Drop, Checklists por etapa, Fix API Admin SDK |
| 2025-12-24 | **App Vendedor (PWA)**: Captura offline, Sync Engine, Deploy a Vercel |
| 2025-12-24 | Integración WhatsApp/Twilio, Análisis Don Juan GIS |
| 2025-12-22 | MCP, CRM Financiero, APIs actualizadas |

---

## 📖 Documentación del Manual de Usuario

El Manual de Usuario está disponible en: **[docs.doncandidoia.com](https://docs.doncandidoia.com)**

Contiene:
- Guías por módulo
- Preguntas frecuentes
- Casos de uso
- Roles y permisos
