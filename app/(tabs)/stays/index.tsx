import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Searchbar from "@/component/Searchbar";
import Line from "@/component/Line";
import StaysList from "@/component/StaysList";
import stays from "@/data/stays";

export default function StaysIndex() {
  const [search, setSearch] = useState("");
  const displayStays = stays.filter((stay) =>
    stay.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Stays</Text>
      <Searchbar setSearch={setSearch} />
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Line width={"50%"} color="#1abc9c" />
        <Line width={"50%"} color="#1abc9c" />
      </View>

      <StaysList stays={displayStays} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
