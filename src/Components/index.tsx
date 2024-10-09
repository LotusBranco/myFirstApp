import { Text, View, TouchableOpacity } from "react-native"

import { styles } from "./style"

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.nome}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
