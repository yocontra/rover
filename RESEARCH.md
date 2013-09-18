## Web

Web Panel: `http://192.168.1.100/`

Default username: `AC13`
Default password: `AC13`

Listing of User/Pass: `check_user.cgi`

Listing of device config: `get_params.cgi`

Listing of network info: `wifi_scan.cgi` then `get_wifi_scan_result.cgi`

Wheel motor controls: `wifi_car_control.cgi?command={wheel number}&param={speed 1-10}`

Camera motor controls: `decoder_control.cgi?command={0 for up 2 for down}&degree={degrees to move}`

Changing device config: Each querystring key/value after `set_params.cgi?next_url=reboot.html&reboot=1` will modify the config

Reboots take 45 seconds apparently according to some of the code but I doubt it.

## Wire Protocol

Nobody has cracked this yet for the 2.0 so some reversing of the firmware will be needed.

The flow for 1.0 went like this:

1. HTTP req to check_user
2. Open command socket
3. Open image socket

4. Command 1, 2, and 3 to command socket
5. Command 4 to image socket with response from command socket after handshake


It's likely the flow is still the same as the 1.0 but with added encryption (supposedly blowfish) for certain control commands.