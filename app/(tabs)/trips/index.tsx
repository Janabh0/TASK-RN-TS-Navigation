import DifficultyFilter from "@/component/DifficultyFilter";
import Line from "@/component/Line";
import Searchbar from "@/component/Searchbar";
import TripList from "@/component/TripList";
import trips from "@/data/trips";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function TripsIndex() {
  const [search, setSearch] = useState("");
  const displayTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Trips</Text>
      <Searchbar setSearch={setSearch} />

      <DifficultyFilter />

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
      <TripList trips={displayTrips} />
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
