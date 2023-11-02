import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

import PhoneInput from "react-phone-input-2";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const App = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");

  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  //   function onCaptchVerify() {
  //     // RecaptchaVerifier can't be used directly in React Native, consider using an alternative method for phone number verification
  //   }

  //   function onSignup() {
  //     // Implement the sign-up logic for React Native
  //   }

  //   function onOTPVerify() {
  //     // Implement the OTP verification logic for React Native
  //   }
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }
  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;

        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>
      {user ? (
        <Text style={styles.successText}>👍 Login Success</Text>
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome to CODE A PROGRAM</Text>
          {showOTP ? (
            <View style={styles.otpContainer}>
              <Text style={styles.otpLabel}>Enter your OTP</Text>
              <OTPInputView
                value={otp}
                onChange={setOtp}
                style={{ width: "100%", height: 200, paddingHorizontal: 32 }}
                pinCount={6}
                autoFocusOnLoad
                CodeInputFieldStyle={{
                  width: 30,
                  height: 45,
                  color: "#f4a135",
                }}
                codeInputHighlightStyle={{
                  borderColor: "#2ab124",
                }}
              />
              <TouchableOpacity
                style={styles.verifyOTPButton}
                onPress={onOTPVerify}
              >
                <Text style={styles.verifyOTPButtonText}>Verify OTP</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.phoneVerificationContainer}>
              <Text style={styles.phoneVerificationLabel}>
                Verify your phone number
              </Text>
              <PhoneInput country={"rw"} value={ph} onChange={setPh} />
              <TouchableOpacity
                style={styles.sendCodeButton}
                onPress={onSignup}
              >
                <Text style={styles.sendCodeButtonText}>Send code via SMS</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  successText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  otpContainer: {
    alignItems: "center",
  },
  otpLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  otpInputContainer: {
    width: "80%",
    marginVertical: 20,
  },
  verifyOTPButton: {
    backgroundColor: "green",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  verifyOTPButtonText: {
    color: "white",
    fontSize: 20,
  },
  phoneVerificationContainer: {
    alignItems: "center",
  },
  phoneVerificationLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sendCodeButton: {
    backgroundColor: "green",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sendCodeButtonText: {
    color: "white",
    fontSize: 20,
  },
  lockIcon: {
    width: 30,
    height: 30,
  },
  phoneIcon: {
    width: 30,
    height: 30,
  },
});

export default App;
