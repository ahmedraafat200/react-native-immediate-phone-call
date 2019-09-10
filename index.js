import {NativeModules} from 'react-native';

var RNImmediatePhoneCall = {
  immediatePhoneCall: function(number, slot = 0) {
        NativeModules.RNImmediatePhoneCall.immediatePhoneCall(number, slot);
  }
};

export default RNImmediatePhoneCall;
