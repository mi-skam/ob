
## LogitechMediaServer

```yaml
version: '3'
services:
  logitechmediaserver:
    image: lmscommunity/logitechmediaserver:8.3.2
    volumes:
      - /share/Container/lms/config:/config:rw
      - /share/Multimedia/Music:/music:ro
      - /share/Playlists:/playlist:rw
      - /etc/localtime:/etc/localtime:ro
      - /etc/TZ:/etc/timezone:ro
    ports:
      - 9001:9001/tcp
      - 9090:9090/tcp
      - 3483:3483/tcp
      - 3483:3483/udp
    environment:
      - PUID=1001 # Your user ID
      - PGID=100 # Your group ID
      - TZ=Europe/Berlin
      - HTTP_PORT=9001
    restart: unless-stopped
```

## Syncthing

