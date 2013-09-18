var securityTypes = {
  0: 'none',
  1: 'WEP',
  2: 'WPA/WPA2-PSK',
  3: 'WPA/WPA2-PSK',
  4: 'WPA/WPA2-PSK',
  5: 'WPA/WPA2-PSK',
  6: 'WPA/WPA2'
};

var networkTypes = {
  0: 'infra',
  1: 'adhoc'
};

module.exports = function(networks) {
  var out = [];
  networks.ap_bssid.forEach(function(v, idx){
    var obj = {
      ssid: networks.ap_ssid[idx],
      bssid: networks.ap_bssid[idx],
      mode: {
        id: networks.ap_mode[idx],
        type: networkTypes[networks.ap_mode[idx]]
      },
      security: {
        id: networks.ap_security[idx],
        type: securityTypes[networks.ap_security[idx]]
      }
    };
    // 0 is none so just nop that
    if (obj.security.id === 0) {
      delete obj.security;
    }
    out.push(obj);
  });
  return out;
};