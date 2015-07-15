### Instalacion, Aplicacion Web
### Dashboard

```bash
Instalacion en Debian de NodeJS (como root)

apt-get install curl
curl --silent --location https://deb.nodesource.com/setup_0.12 | bash -
apt-get install --yes nodejs
apt-get install --yes build-essential

Actualizamos Npm
npm install npm -g

Instalamos Dependencias
cd webapp-dashboard && npm install
npm install -g forever

Exportamos variables de Entorno

Asignamos Ip y port, al Server NodeJS

export VM_NODEJS_IP="0.0.0.0"
export VM_NODEJS_PORT=8080

Asignamos la Ip, port y password al Server Redis

export VM_REDIS_HOST=""
export VM_EXTREDIS_DB_PORT=""
export VM_EXTREDIS_DB_NAME=""
export VM_EXTREDIS_DB_PASSWORD=""

Iniciar server
forever start server.js

Ver estado de app y ruta del archivo de Logs
forever list

Detener
forever stop 0

Reiniciar
forever restart 0
```