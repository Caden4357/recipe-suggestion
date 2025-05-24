import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle:{
					height:70,
					borderWidth:2,
					borderBlockColor:'red',
					borderRadius:50,
					paddingTop:8
				},
				tabBarLabelStyle:{
					
				}
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					title: "Home",
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={24} color={"black"} />
					),
				}}
			/>
			<Tabs.Screen
				name="camera"
				options={{
					headerShown: false,
					title: "Camera",
					tabBarIcon: ({ color }) => (
						<AntDesign name="camera" size={24} color={"black"} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<AntDesign name="user" size={24} color={"black"} />
					),
				}}
			/>
		</Tabs>
	);
};

const styles = StyleSheet.create({});
export default TabLayout;
