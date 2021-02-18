import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Dayane from '../../assets/images/dayane.jpeg';
import Ana from '../../assets/images/ana.jpeg';


export default function Colaboradores() {
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Nossos Colaboradores</Text>
            <Text style={styles.paragraph}>Esta página dedicamos aos nossos colaboradores. Pessoas que acreditam no projeto SinalCode e junto com o resto da equipe trabalha para oferecer o que há de melhor para nossos usuários.</Text>

            <Text style={styles.title}>Nossas Voluntárias</Text>

            <Image source={Dayane} style={styles.foto} /> 
            <Text style={styles.paragraph}>Dayane Karoline Rodrigues</Text>

            <Image source={Ana} style={styles.foto} /> 
            <Text style={styles.paragraph}>Ana Paula Koszt</Text>
        
    


        <View style={styles.footer}>
          <Text>&copy;Copyright - Todos os direitos reservados.</Text>
          <Text>Desenvolvido por Squad 2 SP-T2 Recode Pro 2021.</Text>
        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#00c1ca', 
    alignItems: 'center',
    justifyContent: 'center',
  },

   title: {
    color: '#fe6e15',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },

   paragraph: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'justify',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  foto: {
    marginTop: 40,
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  footer: {
    marginTop: 40,
    fontWeight: '500',
    alignItems: 'center',
  },

});

