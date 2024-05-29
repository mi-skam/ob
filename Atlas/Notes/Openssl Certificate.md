## ultra short version

```shell
SSLHOST=www.server1.nobj.lan; printf '%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n%s\n' '[req]' 'default_bits = 2048' 'prompt = no' 'default_md = sha256' 'x509_extensions = v3_req' 'distinguished_name = dn' '' '[dn]' 'C = CO' 'ST = ST' 'L = L' 'O = O' 'OU = OU' 'emailAddress = e@'$SSLHOST'' 'CN = '$SSLHOST'' '' '[v3_req]' 'subjectAltName = @alt_names' '' '[alt_names]' 'DNS.1 = *.'$SSLHOST'' 'DNS.2 = '$SSLHOST'' > $SSLHOST.cnf; openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout $SSLHOST.key -days 3560 -out $SSLHOST.cert -config $SSLHOST.cnf; rm $SSLHOST.cnf Generating a RSA private key
```

## Extended Version (with CA)

https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate

```shell
######################
# Become a Certificate Authority
######################

# Generate private key
openssl genrsa -des3 -out myCA.key 2048
# Generate root certificate
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 825 -out myCA.pem

######################
# Create CA-signed certs
######################

NAME=mydomain.example # Use your own domain name
# Generate a private key
openssl genrsa -out $NAME.key 2048
# Create a certificate-signing request
openssl req -new -key $NAME.key -out $NAME.csr
# Create a config file for the extensions
>$NAME.ext cat <<-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = $NAME # Be sure to include the domain name here because Common Name is not so commonly honoured by itself
DNS.2 = bar.$NAME # Optionally, add additional domains (I've added a subdomain here)
IP.1 = 192.168.0.13 # Optionally, add an IP address (if the connection which you have planned requires it)
EOF
# Create the signed certificate
openssl x509 -req -in $NAME.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial \
-out $NAME.crt -days 825 -sha256 -extfile $NAME.ext
```
