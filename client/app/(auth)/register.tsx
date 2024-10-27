import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '@/components/Logo'
import { TextInput } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
const register = () => {

    useEffect(() => {
    GoogleSignin.configure({
      webClientId:
       Platform.OS=="ios"?"821648540083-ud466m64p78ur2hqobs7q97n3b3u1c5q.apps.googleusercontent.com":"821648540083-nk9iqmvjjb6pdemm71v1mkmts7oqchfj.apps.googleusercontent.com",
    });
  }, []);

   const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      console.log(user)
      // setUserInfo(user);
      // setError("");
    } catch (e) {
      // setError(e);
    }
   };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.registerContainer}>
        <View style={styles.registerItemContainer}>
          <View style={{ marginRight: 10 }}>
            <MaterialIcons name="email" size={24} color="#555" />
          </View>
          <TextInput placeholder='Email' placeholderTextColor={"#777"}></TextInput>
        </View>
        <View style={styles.registerItemContainer}>
          <View style={{ marginRight: 10 }}>
            <MaterialCommunityIcons name="shield-key" size={24} color="#555" />
          </View>
          <TextInput placeholder='Password' placeholderTextColor={"#777"}></TextInput>
        </View>
      </View>
      {/* button */}
      <View style={{ width: "100%", marginTop: 20 }}>
        <TouchableOpacity style={styles.signUp}>
          <Text style={{ textAlign: "center", color: "#fff" }}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%",marginTop:10 }}>
        <Text style={{ textAlign: "center" }}>Or</Text>
        <View style={{marginTop:10}}>
          <TouchableOpacity style={styles.oauthContainer} onPress={signin}>
          <View style={{marginRight:10}}>
          <AntDesign name="google" size={24} color="#257180" />
          </View>
            <Text style={{ textAlign: "center",color: "#257180" }}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  registerContainer: {
    width: "100%",
    paddingVertical: 10,
    marginTop: 40
  },
  registerItemContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 20,

    flexDirection: "row",
    alignItems: "center"
  },
  signUp: {
    backgroundColor: "#257180",
    padding: 10,
    borderRadius: 10
  },
  oauthContainer: {
    borderRadius: 10,
    borderColor: "#257180",
    borderWidth: 1,
    padding: 10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  }
})

// import { StatusBar } from "expo-status-bar";
// import { Button, Platform, StyleSheet, Text, View } from "react-native";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-google-signin/google-signin";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [error, setError] = useState<any>();
//   const [userInfo, setUserInfo] = useState<any>();

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//        Platform.OS=="ios"?"821648540083-ud466m64p78ur2hqobs7q97n3b3u1c5q.apps.googleusercontent.com":"821648540083-nk9iqmvjjb6pdemm71v1mkmts7oqchfj.apps.googleusercontent.com",
//     });
//   }, []);

//   const signin = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const user = await GoogleSignin.signIn();
//       console.log(user)
//       setUserInfo(user);
//       setError("");
//     } catch (e) {
//       setError(e);
//     }
//   };

//   const logout = () => {
//     setUserInfo("");
//     GoogleSignin.revokeAccess();
//     GoogleSignin.signOut();
//   };

//   return (
//     <View style={styles.container}>
//       <Text>{JSON.stringify(error)}</Text>
//       {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
//       {userInfo ? (
//         <Button title="Logout" onPress={logout} />
//       ) : (
//         <GoogleSigninButton
//           size={GoogleSigninButton.Size.Standard}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={signin}
//         />
//       )}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });