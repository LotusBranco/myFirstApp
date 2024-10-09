import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  Conteiner: {
    flex: 1,
    backgroundColor: "#101316",
    padding: 24,
  },
  eventNome: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 42,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 46,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    height: 46,
    width: 46,
    backgroundColor: "#31CF63",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  ListEmptyComponent: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
})
