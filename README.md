# 📌 Estructura y Arquitectura del Proyecto

Este documento describe la estructura del proyecto y las tecnologías utilizadas.

## 🛠️ Tecnologías Utilizadas
- **Backend:** Node.js con Express
- **Base de Datos:** MySQL
---

## 📁 Estructura de Carpetas

### 🏗️ Backend (Node.js + Express)

```
/backend
│── /src
│   │── /api              
│   │   │── /config       # Configuración global del servidor
│   │   │── /controllers  # Controladores que manejan la lógica de cada endpoint
│   │   │── /database     # Configuracion de la conexion a la BD
│   │   │── /middlewares  # Middlewares como validaciones y logs
│   │   │── /models       # Modelos de la BD
│   │   │── /routes       # Definición de rutas (API endpoints)
│   │   │── /utils        # Configuracion de rutas para EJS
│   │── /public           # Archivos de estilo y recursos visuales
│   │── /views            # Plantillas EJS para servir pantallas
│── index.js              # Archivo principal que arranca el servidor (Entrypoint)
│── .env                  # Variables de entorno
│── package.json          # Dependencias y scripts del proyecto
│── README.md             # Documentación
```


## 📤DB Schema
![Image](/src/api/database/db.png)

## 🔍Endpoints

#### ➕ Obtener todos los productos

```http
  GET /api/products
```

Respuesta
```javascript
  [
    {
      "id": number,
      "name": string,
      "price": decimal,
      "category": string,
      "image": string,
      "is_active": boolean
    }    
  ]
```
#### ➕ Obtener producto por Id

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Requerido**. Id del producto   |

Respuesta
```javascript
  {
    "id": number,
    "name": string,
    "price": decimal,
    "category": string,
    "image": string,
    "is_active": boolean
  }  
```
#### ➕ Crear nuevo producto

```http
  POST /api/products/
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Requerido**. Nombre del producto   |
| `category`      | `string` | **Requerido**. Categoria del producto   |
| `price`      | `decimal` | **Requerido**. Precio del producto  |
| `image`      | `string` | **Requerido**. Imagen del producto   |

Respuesta
```javascript
  {
    "message": string,
  }
```
#### ➕ Actualizar producto

```http
  PUT /api/products/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Requerido**. Id del producto   |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Nuevo nombre del producto   |
| `category`      | `string` | Nueva categoria del producto   |
| `price`      | `decimal` | Nuevo precio del producto  |
| `image`      | `string` | Nueva imagen del producto   |

Respuesta
```javascript
  {
    "message": string
  }
```
#### ➕ Eliminar producto

```http
  DELETE /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Requerido**. Id del producto   |


Respuesta
```javascript
  {
    "message": string
  }
```
#### ➕ Crear una venta

```http
  POST /api/sales
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `timestamp` | Fecha y hora de la creacion   |
| `total`      | `decimal` | Monto total de la venta  |
| `buyerName`      | `string` | Nombre del comprador |
| `items`      | `Array<Item>` | Items de la venta  |

#### Item
```javascript
  {
    "productId": number,
    "productName": string,
    "quantity": number,
    "productPrice": decimal
  }
```

Respuesta
```javascript
{
  "message": string
}
```

#### ➕ Obtener ventas

```http
  GET /api/sales/
```

Respuesta
```javascript
  [
    {
      "id": number,
      "date": timestamp,
      "total": decimal,
      "buyerName": string,
    }
  ]
```

#### ➕ Obtener venta por Id

```http
  GET /api/sales/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Requerido**. Id de la venta   |

Respuesta
```javascript
  {
    "id": number,
    "date": timestamp,
    "total": decimal,
    "buyerName": string,
    "items": [
      {
        "quantity": number,
        "productId": number,
        "productName": string,
        "productPrice": decimal
      }
    ]
  }
```

