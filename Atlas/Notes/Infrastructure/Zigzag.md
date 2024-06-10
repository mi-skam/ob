---
comment:
  - Synology NAS 2TB (RAID-0 SSD), 1*8TB external HDD
roles:
  - nas
  - container-host
os: qnap
status: active
created: 2023-08-02
---
# [[Atlas/Notes/Infrastructure/Zigzag]]

## Maintenance

I have a script running (`crontab -l`), that moves daily photos from the Camera Syncthing folder *DCIM* to Plump's  Photo folder.

To alter crontabs you need to do it as su, as the others get kicked out.

### Code
```bash
# Define source and destination directories
SOURCE_DIR="/share/Sync/DCIM/Camera/"
DEST_DIR="/share/Plumps/Bilder/Fotos/unsortiert/"

# Run rsync with options and redirect output to /dev/null
rsync -vaP "$SOURCE_DIR" "$DEST_DIR" > /dev/null 2>&1

# Check if rsync was successful
if [ $? -eq 0 ]; then
  echo "Rsync completed successfully."
  
  # Remove all files in the source directory
  rm -rf "$SOURCE_DIR"*

  echo "All files in the source directory have been removed."
else
  echo "Rsync encountered an error. Check the logs for details."
fi

```

## Docker

### LogitechMediaServer

```yaml
---
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

### Syncthing
```yaml
---
version: "2.1"
services:
  syncthing:
    image: lscr.io/linuxserver/syncthing:latest
    container_name: syncthing
    hostname: syncthing #optional
    environment:
      - PUID=1002
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /share/Container/syncthing/config:/config
      - /share/Sync:/sync
    ports:
      - 8384:8384
      - 22000:22000/tcp
      - 22000:22000/udp
      - 21027:21027/udp
    restart: unless-stopped
```
### Qbittorrent
```yaml
---
version: "2.1"
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1003
      - PGID=1000
      - TZ=Europe/Berlin
      - WEBUI_PORT=2678
    volumes:
      - /share/Container/qbittorrent/config:/config:rw
      - /share/Public:/downloads:rw
    ports:
      - 2678:2678
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped
```




