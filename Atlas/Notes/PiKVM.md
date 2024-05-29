
## WiFi

`/etc/systemd/network/wlan0.network`

```shell
[Match]
Name=wlan0

[Network]
DHCP=yes
DNSSEC=no
# Use same IP by forcing to use MAC address for clientID [DHCP] 
ClientIdentifier=mac
```

Set network ESSID and password
```shell
wpa_passphrase 'MyNetwork' 'P@assw0rd' > /etc/wpa_supplicant/wpa_supplicant-wlan0.conf
```