  ### FRONTEND
## Comenzando 🚀

_El presente proyecto está enfocado al público; el mismo se tratará de un ECOMERCE-PET que permitirá visualizar los productos y/o ascesorios de caninos, donde encontrará una minuciosa búsqueda por título. Para ello hemos realizado diversas pestañas donde el usuario le sera fácil desplazarse, propiciandole nuevas promociones y estará actualizándose con los productos recientemente agregados._

### Pre-requisitos 📋

_-Se necesitaría un dispositivo conectado a internet y que contenga una memoria ram preferiblemente mayor o igual a 4GB_
_Debes prescindir de una cuenta de mail para proceder al registro y asi obtener la posibilidad de adquirir el producto deseado_
### Código a destacar
``` 
   {props.user ?
       <div className="userZone">
          <span>{props.user.email}</span>
             <NavLink to="/" onClick={logout} >Logout</NavLink>
             <NavLink to="/cesta" exact>
                 <div className="col-8 carrito">
                     <Button 
                        type="primary" icon={<ShoppingCartOutlined />}>
                           <p>Quantity  {cantUnit}</p>  
                           <p>Total  {resultado} $</p>
                      </Button>
                 </div>         
              </NavLink>
       </div> 
                :
       <div className="guestZone">
         <NavLink to="/login" exact>Login</NavLink>
         <NavLink to="/register" exact>Register</NavLink>
       </div>
 }
 
``` 
_En este pequeño código se analiza lo que se desea mostrar al usuario dentro de un ternario, que bien puede ser  el carrito de la compra y logout o la posibilidad de que se registre y se de de alta y asi pueda proceder a relizar la compra._

### Redux
```
export const buy = async(productIds) => {
    console.log(productIds)
    const res = await axios.post(API_URL + '/order', {productIds}, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    store.dispatch({ 
        type: 'BUY',
        payload: res.data
    });
    console.log(res.data)
    emptyCart()
}
```
_En este otro pequeño código se procede a la compra de los poductos se utuliza redux donde se hace un llamado a la base de datos y de esta forma es almacenado en una estado del redux pudiendo acceder a este posteriormente. Es enviado a la base de datos la información requerida en forma de objeto, la cual está contenida dentro de productIds y el token (autentifición), una vez finaliado esto se priocede a vaciar el carrito (la compra)_
### Instalación 🔧

_No requiere de instalación ya que posteriormente se crearán aplicaciones para los diversos sistemas operativos, teniendo la compatibildad adecuada._

### Y las pruebas de estilo de codificación ⌨️

_Se realizó diversos filtros que fueron capaz de poner a prueba la aplicación trayendo consigo unos resultados favorables, se le implementará umn formulario donde el usuario podra manifestrar sus inquietudes y de esa manera  mejor aun máas nuesto servicio_


## Construido con 🛠️


* [REACT] - _Es una biblioteca Javascript para crear interfaces de usuario. Permite la creación de prácticamente todo el proyecto de frontend_.
### Instalación 🔧    
``` npm install 
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.0",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1",
    "redux": "^4.0.5",
    "redux-localstorage-simple": "^2.2.0" 
 ```
     
* [ANT-DESIGN] - Se utilizó como variante de estilos, importando los diferentes componenetes. 
### Importación 🔧 
```import 'antd/dist/antd.css'; ```

### BACKEND

### Código a destacar
``` 
   insert(req, res) {
        Product.create(req.body)
            .then(product => res.status(201).send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    }
 
``` 
_En este pequeño se puede apreciar un controlador que inserta los productos en la base de datos dando como respuesta un estado 201 como satisfactorio y el producto creado._
```
const authentication = async(req, res, next) => {
    
        try {
            const token = req.headers.authorization;
            const payload = jwt.verify(token, 'la cambiare por seguridad');
            const user = await UserModel.findOne({
                _id: payload._id,
                tokens: token
            });
            if (!user) {
                return res.status(401).send({
                    message: 'You are not authorized'
                });
            }
            req.user = user;
            next();
        } catch (error) {
            console.error(error)
            res.status(401).send({
                message: 'You are not authorized',
                error
            })
        }
    }
```
_Este codigo no es más que un middleware que valida la autentificación, es sumamente importante puesto que diversos controladores deben pasar por ella primero, puesto que los usuarios tiene limitados los privilegios, de esta maneras quedaría el sitio más seguro y le da más robustez a la aplicacion_

## Construido con 🛠️


* [MONGO] - _Es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. Permite la creación de prácticamente todo el proyecto de backend. se procede a instalar las siguientes dependencias_.
### Instalación 🔧    
``` npm install 
   "bcryptjs": "^2.4.3",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.12",
    "morgan": "~1.9.1",
    "nodemon": "^2.0.3"
 ```
     
## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/G1ovann16/E-Commerce/blob/master/README.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autor ✒️

* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)
