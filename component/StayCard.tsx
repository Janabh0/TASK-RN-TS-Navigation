import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface StayCardProps {
  stay: {
    id: number;
    name: string;
    img: string;
    rating: number;
    price: number;
    location: string;
  };
}

const StayCard = ({ stay }: StayCardProps) => {
  return (
    <Link
      href={{ pathname: "/stays/[slug]/page", params: { id: stay.id } }}
      asChild
    >
      <View style={styles.container}>
        <Image source={{ uri: stay.img }} style={styles.image} />
      </View>
    </Link>
  );
};

export default StayCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
