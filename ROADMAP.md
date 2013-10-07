## Binary Protocol

- Document all commands in RESEARCH.md
- Implement movement (MO_O commands)
- Implement audio/video (MO_V commands)
  - Camera stream
  - Microphone stream
  - Audio out stream

## Testing

- Create mock rover to test commands against
  - Mock rover should work with the iOS/Android apps as well as this library for accuracy
  - Mock rover video can just be one frame
  - Mock rover audio can just be a simple square wave or something

## Library structure

- Movement via the CGI scripts and the binary protocol should be specified as an option to the client.
  - Binary protocol should be the default.
- Sugar should be added for rebooting the rover
- Sugar should be added for more config options on the rover
  - Switching WiFi networks
