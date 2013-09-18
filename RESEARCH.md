Default username: `AC13`
Default password: `AC13`

Listing of User/Pass: `check_user.cgi`

Listing of device config: `get_params.cgi`

Listing of network info: `wifi_scan.cgi` then `get_wifi_scan_result.cgi`

Wheel motor controls: `wifi_car_control.cgi?command={wheel number}&param={speed 1-10}`

Camera motor controls: `decoder_control.cgi?command={0 for up 2 for down}&degree={degrees to move}`

Web Panel: `http://AC13:AC13@192.168.1.100/`

Binary Handshake:

HTTP req to check_user
Open command socket
Open image socket

Command 1, 2, and 3 to command socket
Command 4 to image socket with response from command socket after handshake