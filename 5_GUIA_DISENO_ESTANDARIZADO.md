# Guía de Diseño Estandarizado - 9001app

> **Versión:** 1.0  
> **Actualizado:** 2026-01-05

---

## 🎨 Paleta de Colores

### Colores Primarios
| Color | Hex | Uso |
|-------|-----|-----|
| Emerald 600 | `#059669` | Botones primarios, acciones principales |
| Emerald 700 | `#047857` | Hover de botones primarios |
| Slate 900 | `#0f172a` | Textos principales |
| Slate 600 | `#475569` | Textos secundarios |
| Slate 50 | `#f8fafc` | Fondos claros |

### Colores por Módulo
| Módulo | Color | Badge | Emoji |
|--------|-------|-------|-------|
| Auditorías | `bg-purple-100 text-purple-800` | Púrpura | 🔍 |
| Capacitaciones | `bg-blue-100 text-blue-800` | Azul | 📚 |
| Evaluaciones | `bg-green-100 text-green-800` | Verde | 📋 |
| Hallazgos | `bg-orange-100 text-orange-800` | Naranja | 🔎 |
| Acciones | `bg-red-100 text-red-800` | Rojo | ⚡ |

### Colores de Estado
| Estado | Color | Clase |
|--------|-------|-------|
| Programado | Azul | `bg-blue-50 text-blue-600` |
| En Progreso | Amarillo | `bg-yellow-50 text-yellow-600` |
| Completado | Verde | `bg-green-50 text-green-600` |
| Cancelado | Gris | `bg-gray-50 text-gray-600` |
| Vencido | Rojo | `bg-red-50 text-red-600` |

---

## 📦 Componentes Estándar

### 1. Tarjeta Kanban
```tsx
<div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-5 border-0 cursor-pointer">
  {/* Título */}
  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
    {titulo}
  </h4>
  
  {/* Info (fecha, responsable) */}
  <div className="space-y-2 text-xs text-gray-600 mb-4">
    <div className="flex items-center gap-2">
      <Calendar className="w-3.5 h-3.5" />
      <span>{fecha}</span>
    </div>
    <div className="flex items-center gap-2">
      <User className="w-3.5 h-3.5" />
      <span>{responsable}</span>
    </div>
  </div>
  
  {/* Acciones */}
  <div className="flex gap-2 pt-3 border-t">
    <Button size="sm" variant="ghost">
      <Edit className="w-4 h-4" />
    </Button>
    <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50">
      <Trash2 className="w-4 h-4" />
    </Button>
  </div>
</div>
```

### 2. Diálogo de Formulario
```tsx
<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
  {/* Siempre usar max-w-2xl para formularios estándar */}
  {/* max-w-4xl para formularios complejos con múltiples columnas */}
</DialogContent>
```

### 3. Selector de Personal (PersonnelSelect)
```tsx
<div>
  <Label>Responsable *</Label>
  <select
    className="w-full h-10 px-3 py-2 border rounded-md bg-white"
    value={selectedPersonId}
    onChange={e => setSelectedPersonId(e.target.value)}
  >
    <option value="">Seleccionar...</option>
    {personnel.map(p => (
      <option key={p.id} value={p.id}>{p.nombre}</option>
    ))}
  </select>
</div>
```

### 4. Botones de Acción
```tsx
{/* Botón Crear (primario) */}
<Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
  + Nueva {Entidad}
</Button>

{/* Botón Editar */}
<Button variant="ghost" size="sm">
  <Edit className="w-4 h-4 mr-1" /> Editar
</Button>

{/* Botón Eliminar */}
<Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
  <Trash2 className="w-4 h-4 mr-1" /> Eliminar
</Button>

{/* Botón Cancelar */}
<Button variant="outline">Cancelar</Button>
```

---

## 📐 Layout Estándar

### Página de Listado
```
+------------------------------------------+
| Breadcrumb                               |
+------------------------------------------+
| Título           |  [Exportar] [+ Nuevo] |
| Descripción                              |
+------------------------------------------+
| [ Buscar...    ] | Filtros | Vista |     |
+------------------------------------------+
| Estadísticas: Total | Estado1 | Estado2  |
+------------------------------------------+
|                                          |
|   Contenido (Grid/Kanban/Lista)         |
|                                          |
+------------------------------------------+
```

### Vista Single (Detalle)
```
+------------------------------------------+
| Breadcrumb                               |
+------------------------------------------+
| Título           | [Editar] [Eliminar]   |
| Badge Estado                             |
+------------------------------------------+
| Información Principal                    |
| - Campo 1: Valor                        |
| - Campo 2: Valor                        |
+------------------------------------------+
| Secciones Colapsables                   |
| [+] Sección 1                           |
| [+] Sección 2                           |
+------------------------------------------+
```

---

## ✅ Checklist de Validación

Cada módulo debe cumplir:

- [ ] Botón "Eliminar" en tarjetas y vista single
- [ ] Botón "Editar" visible y funcional
- [ ] Selector de personal como desplegable (no texto libre)
- [ ] Diálogo de formulario mínimo 2xl de ancho
- [ ] Badge de estado con colores consistentes
- [ ] Fecha formateada: `dd/mm/yyyy`
- [ ] Iconos de lucide-react
- [ ] Sombras: `shadow-sm` (reposo), `shadow-lg` (hover)
- [ ] Bordes redondeados: `rounded-xl` (tarjetas), `rounded-lg` (botones)

---

## 🔧 Componentes Reutilizables a Crear

1. **`PersonnelSelect`** - Selector de personal con búsqueda
2. **`EventCard`** - Tarjeta estándar para eventos
3. **`DeleteConfirmDialog`** - Confirmación de eliminación
4. **`StatusBadge`** - Badge de estado unificado
5. **`DateDisplay`** - Formateo de fechas consistente

---

## 📁 Ubicación de Componentes

```
src/components/
├── shared/              # Componentes compartidos
│   ├── PersonnelSelect.tsx
│   ├── EventCard.tsx
│   ├── DeleteConfirmDialog.tsx
│   ├── StatusBadge.tsx
│   └── DateDisplay.tsx
├── audits/
├── rrhh/
└── ...
```
