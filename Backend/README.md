# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

#### Example
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "Rohan",
      "lastname": "Kumar"
    },
    "email": "rohan@gmail.com"
  }
}
```

## `/users/login` Endpoint

### Description

Logs in an existing user by validating the provided credentials.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- **200 OK**
  - **Description:** User successfully logged in.
  - **Body:**
    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
      }
    }
    ```
  - **Example:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "Rohan",
          "lastname": "Kumar"
        },
        "email": "rohan@gmail.com"
      }
    }
    ```

- **400 Bad Request**
  - **Description:** Validation error.
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "string"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - **Description:** Invalid email or password.
  - **Body:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**
  - **Description:** An error occurred on the server.

## `/users/profile` Endpoint

### Description

Fetches the profile of the authenticated user.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

- **200 OK**
  - **Description:** User profile fetched successfully.
  - **Body:**
    ```json
    {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "Rohan",
        "lastname": "Kumar"
      },
      "email": "rohan@gmail.com"
    }
    ```

- **401 Unauthorized**
  - **Description:** User is not authenticated.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

## `/users/logout` Endpoint

### Description

Logs out the authenticated user by invalidating the token.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

- **200 OK**
  - **Description:** User successfully logged out.
  - **Body:**
    ```json
    {
      "message": "Logged out"
    }
    ```

- **401 Unauthorized**
  - **Description:** User is not authenticated.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - **Description:** An error occurred on the server.

## `/captains/register` Endpoint

### Description

Registers a new captain by creating a captain account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (required, min length: 3)", // Captain's first name
    "lastname": "string (optional, min length: 3)" // Captain's last name
  },
  "email": "string (required, valid email format)", // Captain's email address
  "password": "string (required, min length: 8)", // Captain's password
  "vehicle": {
    "color": "string (required, min length: 3)", // Vehicle color
    "plate": "string (required, min length: 3)", // Vehicle plate
    "capacity": "integer (required, min: 1)", // Vehicle capacity
    "vehicleType": "string (required, one of: 'car', 'motorcycle', 'auto')" // Vehicle type
  }
}
```

### Example Response

- **201 Created**
  - **Description:** Captain successfully registered.
  - **Body:**
    ```json
    {
      "captain": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "Rohan",
          "lastname": "Kumar"
        },
        "email": "rohan@gmail.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description:** Validation error.
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "string"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description:** An error occurred on the server.

## `/captains/login` Endpoint

### Description

Logs in an existing captain by validating the provided credentials.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

```json
{
  "email": "string (required, valid email format)", // Captain's email address
  "password": "string (required, min length: 6)" // Captain's password
}
```

### Example Response

- **200 OK**
  - **Description:** Captain successfully logged in.
  - **Body:**
    ```json
    {
      "token": "string",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "integer",
          "vehicleType": "string"
        }
      }
    }
    ```
  - **Example:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "captain": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "Rohan",
          "lastname": "Kumar"
        },
        "email": "rohan@gmail.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description:** Validation error.
  - **Body:**
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "string"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - **Description:** Invalid email or password.
  - **Body:**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**
  - **Description:** An error occurred on the server.

## `/captains/profile` Endpoint

### Description

Fetches the profile of the authenticated captain.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

- **200 OK**
  - **Description:** Captain profile fetched successfully.
  - **Body:**
    ```json
    {
      "captain": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "Rohan",
          "lastname": "Kumar"
        },
        "email": "rohan@gmail.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **401 Unauthorized**
  - **Description:** Captain is not authenticated.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

## `/captains/logout` Endpoint

### Description

Logs out the authenticated captain by invalidating the token.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token

### Example Response

- **200 OK**
  - **Description:** Captain successfully logged out.
  - **Body:**
    ```json
    {
      "message": "Logged out"
    }
    ```

- **401 Unauthorized**
  - **Description:** Captain is not authenticated.
  - **Body:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**
  - **Description:** An error occurred on the server.