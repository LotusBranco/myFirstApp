import React, { useState } from "react"

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"

import { styles } from "./style"

import { Participant } from "../components"

export default function Home() {
  const [participant, setPaticipant] = useState<string[]>([])

  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participantName == "") {
      return Alert.alert("Campo vazio", "Preencha o campo com um nome válido.")
    }

    if (participant.includes(participantName)) {
      return Alert.alert("Já existente", "O participante já está listado")
    }

    setPaticipant((prevState) => [...prevState, participantName])

    setParticipantName("")
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Excluir", `Deseja excluir o participante ${name} da lista ?`, [
      {
        text: "Sim",
        onPress: () =>
          setPaticipant(
            participant.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ])
  }

  return (
    <View style={styles.Conteiner}>
      <Text style={styles.eventNome}>Beach Tennis</Text>
      <Text style={styles.eventDate}> Quinta-feira, 10 de outubro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participant}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.ListEmptyComponent}>
              Não a ninguém listado ainda.
            </Text>
            <Text style={styles.ListEmptyComponent}>
              Adicione participantes a sua lista de presença.
            </Text>
          </View>
        )}
      />
    </View>
  )
}
