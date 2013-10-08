## Web

More details on CGI script parameters can be found here https://gist.github.com/prasincs/4465801 and here http://corz.org/windows/software/oodlecam/files/IP%20Camera%20CGI%20Manual%20[from%20Tenvis%203815%20SDK].pdf but most of those are incorrect or missing.

Web Panel: `http://192.168.1.100/`

Default username: `AC13`
Default password: `AC13`

Listing of User/Pass: `check_user.cgi`

Listing of device config: `get_params.cgi`

Listing of network info: `wifi_scan.cgi` then `get_wifi_scan_result.cgi`

Firmware dump: `backup_params.cgi`

Wheel motor controls: `wifi_car_control.cgi?command={wheel number}&param={speed 1-10}`

Camera motor controls: `decoder_control.cgi?command={0 for up 2 for down}&degree={degrees to move}`

Camera resolution/brightness/contrast control: `camera_control.cgi`

Changing device config: Each querystring key/value after `set_params.cgi?next_url=reboot.html&reboot=1` will modify the config

Reboots take 45 seconds apparently according to some of the code but I doubt it.

## Wire Protocol

CommandEncoder reversed from the Android APK: https://gist.github.com/Contra/6678097

### Constants

```javascript
AUDIO_DATA = 2;
AUDIO_END = 10;
AUDIO_START_REQ = 8;
AUDIO_START_RESP = 9;
DECODER_CONTROL_REQ = 14;
DEVICE_CONTROL_REQ = 250;
FETCH_BATTERY_POWER_REQ = 251;
FETCH_BATTERY_POWER_RESP = 252;
HEAD_LEN = 23;
KEEP_ALIVE = 255;
LOGIN_REQ = 0;
LOGIN_RESP = 1;
MEDIA_LOGIN_REQ = 0;
TALK_DATA = 3;
TALK_END = 13;
TALK_START_REQ = 11;
TALK_START_RESP = 12;
VERIFY_REQ = 2;
VERIFY_RESP = 3;
VIDEO_DATA = 1;
VIDEO_END = 6;
VIDEO_FRAMEINTERVAL = 7;
VIDEO_START_REQ = 4;
VIDEO_START_RESP = 5;
WIFICAR_OP = "MO_O";
WIFICAR_VIDEO_OP = "MO_V";
```

### Write Protocol

Pseudo-code

```javascript
var createCommand = function(header, op, content) {
  var out = new Buffer();
  out.write(header);
  out.write(int16ToByteArray(op));
  out.write(fill(1, 0x00)); // new byte[1]
  out.write(fill(8, 0x00)); // new byte[8]
  out.write(int32ToByteArray(content.length));
  out.write(fill(4, 0x00)); // new byte[4]
  out.write(content);
  return out
};

var fill = function(len, val) {
  var out = new Array(len);
  while (--len >= 0) {
    out[len] = val;
  }
  return out;
};
```

### Commands

#### Keep Alive

```javascript
var data = [];

createCommand("MO_O", 255, data);
```

#### Fetch Battery Power

```javascript
var data = [];

createCommand("MO_O", 251, data);
```

#### Start Audio

```javascript
var data = [int8ToByteArray(1)];

createCommand("MO_O", 8, data);
```

#### End Audio

```javascript
var data = [int8ToByteArray(1)];

createCommand("MO_O", 10, data);
```

#### Start Video

```javascript
var data = fill(4, 0x00);
data[0] = int8ToByteArray(1);

createCommand("MO_O", 4, data);
```

#### End Video

```javascript
var data = [];

createCommand("MO_O", 6, data);
```

### Read Protocol

No idea.

```javascript
// TODO
// https://gist.github.com/Contra/6678097#file-commandencoder-java-L400
// and
// https://gist.github.com/Contra/6678097#file-commandencoder-java-L530
```