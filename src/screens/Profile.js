import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';
const tailwind = (...args) => tw.style(...args);

const Profile = () => {
  const user = {
    name: 'Spnosa',
    email: 'spnosa@gmail.com',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
  };
  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <View style={tailwind('flex-1 items-center justify-center bg-white px-6')}>
      <Image
        source={{ uri: user.profilePicture }}
        style={tailwind('w-32 h-32 rounded-full mb-4')}
      />

      <Text style={tailwind('text-2xl font-bold text-gray-800')}>
        {user.name}
      </Text>

      <Text style={tailwind('text-base text-gray-500 mb-6')}>
        {user.email}
      </Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={tailwind('bg-red-500 px-8 py-3 rounded-lg')}
      >
        <Text style={tailwind('text-white text-lg font-semibold')}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({});