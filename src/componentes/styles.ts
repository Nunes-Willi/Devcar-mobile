import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
  customMarker: {
    backgroundColor: "lightblue",
    padding: 5,
    borderRadius: 5,
  },
  customMarkerContent: {
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});