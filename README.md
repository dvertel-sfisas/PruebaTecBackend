
# PRUEBA TECNICA BACKEND

API REST BASICA CON AUTH JWT.

## INSTALACIÓN

En el directorio principal ejecutar:

```bash
  docker-compose up -d
```


## API Reference

#### Login

```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. BodyParam |
| `password` | `string` | **Required**. BodyParam |

```http
  RETURN:
  {"token": "eyJhbGciOiJIUzI1N..."}
```

## EJEMPLO LOGIN

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)



#### Register

```http
  POST /register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. BodyParam |
| `password`      | `string` | **Required**. BodyParam |
| `cpassword`      | `string` | **Required**. BodyParam |

```http
  RETURN:
  {"token": "eyJhbGciOiJIUzI1N..."}
```

## EJEMPLO REGISTER

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


#### Parents

```http
  GET /parents
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `X-APP-TOKEN`      | `string` | **Required**. Header |

```http
  RETURN:
  {
  "parents": [
    {
            "id": 1,
            "description": "parent admin"
        },
        {
            "id": 2,
            "description": "parent admin 2"
        }
    ]
}
```

## EJEMPLO PARENTS

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### Children by idParent

```http
  GET /children/{idParent}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `X-APP-TOKEN`      | `string` | **Required**. Header |
| `idParent`      | `string` | **Required**. URLQuery |

```http
  {
    "childrens": [
        {
            "id": 1,
            "name": "children admin 1",
            "parent_id": 1,
            "createdAt": "2023-05-20T03:37:22.000Z",
            "updatedAt": "2023-05-20T03:37:22.000Z"
        },
        {
            "id": 2,
            "name": "children admin 2",
            "parent_id": 1,
            "createdAt": "2023-05-20T03:37:22.000Z",
            "updatedAt": "2023-05-20T03:37:22.000Z"
        }
    ]
}
```

## EJEMPLO CHILDRENS

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## 

El proyecto incluye un seeder con un user admin, dos parent y dos children insertados de forma inicial, de igual manera se dispone del metodo register para agregar mas usuarios.

